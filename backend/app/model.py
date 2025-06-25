import os
os.environ["TORCH_HOME"] = "/tmp/torch"
os.environ["HF_HOME"] = "/tmp/huggingface"
import io
import base64
from PIL import Image
import torch
import numpy as np
import cv2
import segmentation_models_pytorch as smp

def load_model(model_path):
    model = smp.DeepLabV3Plus(
        encoder_name="resnet34",
        encoder_weights="imagenet",
        in_channels=1,
        classes=1,
    )
    state_dict = torch.load(model_path, map_location=torch.device("cpu"))
    new_state_dict = {k.replace("module.", ""): v for k, v in state_dict.items()}
    model.load_state_dict(new_state_dict)
    model.eval()
    return model

def preprocess(img):
    img = cv2.resize(img, (256, 256))
    img = img / 255.0
    img = (img - 0.5)
    img = np.expand_dims(img, axis=0)  # shape: (1, 256, 256)
    img = np.expand_dims(img, axis=0)  # shape: (1, 1, 256, 256)
    return torch.tensor(img, dtype=torch.float32)

def predict(model, img):
    tensor = preprocess(img)
    with torch.no_grad():
        output = model(tensor)
        output = torch.sigmoid(output).squeeze().numpy()
    print("DEBUG: output min:", output.min(), "max:", output.max(), "mean:", output.mean())
    mask = (output > 0.5).astype(np.uint8)
    print("DEBUG: output shape:", output.shape, "mask shape:", mask.shape, "mask sum:", mask.sum())
    mask = np.squeeze(mask)  # Ensure mask is 2D

    tumor_coverage = (np.sum(mask) / mask.size) * 100

    # --- Encode mask as base64 PNG ---
    mask_img = (mask * 255).astype(np.uint8)
    mask_pil = Image.fromarray(mask_img)
    mask_buffer = io.BytesIO()
    mask_pil.save(mask_buffer, format="PNG")
    mask_base64 = base64.b64encode(mask_buffer.getvalue()).decode("utf-8")

    # --- Create overlay image (simple red mask over grayscale MRI) ---
    img_norm = ((img - img.min()) / (img.max() - img.min()) * 255).astype(np.uint8)
    img_rgb = np.stack([img_norm.squeeze()] * 3, axis=-1)
    overlay = img_rgb.copy()
    mask = mask.astype(bool)
    if mask.shape != overlay.shape[:2]:
        mask = cv2.resize(mask.astype(np.uint8), (overlay.shape[1], overlay.shape[0]), interpolation=cv2.INTER_NEAREST).astype(bool)
    overlay[mask] = [255, 0, 0]  # Red overlay

    overlay_pil = Image.fromarray(overlay)
    overlay_buffer = io.BytesIO()
    overlay_pil.save(overlay_buffer, format="PNG")
    overlay_base64 = base64.b64encode(overlay_buffer.getvalue()).decode("utf-8")

    return {
        "tumor": bool(np.any(mask)),
        "tumor_coverage_percent": round(tumor_coverage, 2),
        "mask": mask_base64,
        "overlay": overlay_base64,
    }