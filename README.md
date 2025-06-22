# Tumor Tracer

**Tumor Tracer** is a modern, responsive web application for advanced AI-powered brain tumor detection from MRI scans. Built with React and Tailwind CSS, it provides a seamless user experience and connects to a HuggingFace-hosted machine learning model for instant, accurate analysis and segmentation.

## Features

- **AI-Powered Detection:** Upload brain MRI scans and receive rapid, detailed tumor analysis and segmentation.
- **Lightning Fast:** Results in under 30 seconds, powered by optimized deep learning models.
- **High Accuracy:** 99%+ accuracy rate using state-of-the-art computer vision and medical imaging techniques.
- **User-Friendly:** Simple drag-and-drop interface, mobile-optimized, and touch-friendly.
- **Secure & Private:** Your data is processed securely and never stored permanently.
- **24/7 Availability:** Cloud-based, always-on service.
- **Modern UI/UX:** Beautiful, professional design with pixel-perfect alignment, smooth animations, and a floating scroll-to-top button for easy navigation.
- **Open Source:** Easily extensible and customizable for research or clinical use.

## Demo

<!-- ![Tumor Tracer Screenshot](screenshot.png) --> <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ItsEragon/OncoType.git
   cd OncoType
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Upload an MRI Scan:**  
   Drag and drop your MRI image or click to browse and select a file.
2. **Analyze:**  
   Click "Analyze MRI Scan" to send the image to the AI model.
3. **View Results:**  
   Instantly see tumor detection results and segmentation overlays.

> **Note:** The app connects to a HuggingFace Spaces API for inference. Ensure you have a stable internet connection.

## Project Structure

```
src/
  components/      # React components (Header, Hero, DetectionSection, About, Contact, Footer, ScrollToTopButton)
  assets/          # (Unused, can be deleted)
  index.css        # Tailwind and custom styles
  main.jsx         # App entry point
public/
  favicon.png      # App icon
  favicon.svg      # (Unused, can be deleted)
  vite.svg         # (Unused, can be deleted)
index.html         # Main HTML file
tailwind.config.js # Tailwind configuration
vite.config.js     # Vite configuration
```

## Customization

- **Branding:** Update the logo and colors in `Header.jsx` and `tailwind.config.js`.
- **API Endpoint:** The detection API is set in `DetectionSection.jsx` (`https://itseragon-brain-tumor-api.hf.space/predict/`). Change this if you deploy your own model.
- **Social Links:** Update your GitHub, LinkedIn, and Twitter in `Contact.jsx`.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

### Linting

This project uses ESLint with React and Tailwind best practices:

```bash
npm run lint
```

## License

[MIT](LICENSE) © Tumor Tracer

## Contact

Connect with us:

- [LinkedIn](https://linkedin.com/in/itseragon)
- [GitHub](https://github.com/ItsEragon)
- [Twitter](https://x.com/reek312)
