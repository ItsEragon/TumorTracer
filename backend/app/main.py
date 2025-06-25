
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from app.model import load_model, predict
import numpy as np
import cv2

app = FastAPI()
model = load_model("tumor_segmentation_model.pth")

@app.post("/predict/")
async def predict_tumor(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        np_arr = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_GRAYSCALE)
        if image is None:
            return JSONResponse(content={"error": "Invalid image"}, status_code=400)
        result = predict(model, image)
        return result
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
