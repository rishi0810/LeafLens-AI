# LeafLens AI - Plant Disease Detector & Advisor

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<br />

<div align="center">
  <a href="">
    <img src="./src/assets/logo.svg" alt="Visit Website" width="100" height="100" />
  </a>
</div>
## Overview

This project helps users identify potential diseases in plant leaves using computer vision and artificial intelligence. Upload an image of a leaf, and the application leverages a fine-tuned MobileNetV2 deep learning model to predict possible diseases. It then utilizes the Google Gemini API to provide detailed information, potential causes, and basic management strategies for the most likely disease identified.

This tool aims to provide quick, accessible initial diagnostics for gardeners, farmers, and plant enthusiasts.

##  Key Features

*   **Image Upload:** Simple interface to upload images of potentially diseased plant leaves.
*   **AI-Powered Disease Prediction:** Utilizes a MobileNetV2 model (pre-trained on ImageNet and fine-tuned on a plant disease dataset) to classify potential diseases.
*   **Confidence Scores:** Displays the model's confidence level for the predicted diseases.
*   **Detailed Information via Gemini:** Queries the Google Gemini API for comprehensive information about the top-predicted disease.
*   **User-Friendly Results:** Presents the prediction and Gemini's information in an easy-to-understand format.

##  Technology Stack

*   **Machine Learning Model:** MobileNetV2 using HF Inference API
*   **ML Backend:** Hugging Face Inference API
*   **AI Language Model:** Google Gemini API
*   **Frontend:** Vite + ReactJs + React-Router
*   **Image Handling:** Multer + ( NodeJS + ExpressJs)
*   **API Communication:** Axios 

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rishi0810/LeafLens-AI.git
    cd LeafLens-AI
    ```

2.  **Run the Application:**
    *   Start the backend server
    *   Start the frontend development server: `npm run dev` or `yarn dev`

3.  Access the application in your browser (usually `http://localhost:5173` for React, check your specific setup).

##  Usage

1.  Open the web application in your browser.
2.  Click the "Upload Image" button or drag and drop a clear photo of the plant leaf you want to analyze.
3.  Once the image preview is shown, click the "Analyze" or "Submit" button.
4.  Wait for the analysis to complete. The system will:
    *   Send the image to the backend.
    *   Process the image and feed it to the MobileNetV2 model.
    *   Display the predicted disease(s) with confidence scores.
    *   Query the Gemini API for information on the top prediction.
    *   Show the detailed information retrieved from Gemini.

##  How It Works

1.  **Image Input:** The user uploads a leaf image via the frontend.
2.  **Preprocessing:** The backend receives the image, resizes it to the required input dimensions for MobileNetV2, and normalizes pixel values.
3.  **Model Inference:** The preprocessed image is passed to the fine-tuned MobileNetV2 model, which outputs a probability distribution over the known disease classes.
4.  **Prediction Selection:** The class with the highest probability is identified as the top prediction.
5.  **Gemini API Call:** The name of the top-predicted disease is used to formulate a prompt for the Google Gemini API, requesting detailed information.
6.  **Response Handling:** The backend receives the text response from Gemini.
7.  **Display Results:** The frontend displays the uploaded image, the model's predictions (e.g., top 3 diseases and scores), and the formatted information from Gemini.

##  Future Enhancements

*   Support for a wider range of plant species and diseases.
*   Integration of potential treatment suggestions directly linked to predictions.
*   Ability to handle multiple leaves or different parts of the plant in one image.
*   Geolocation tagging to track disease prevalence regionally (with user consent).
*   User accounts to save analysis history.
*   Improving model accuracy with more diverse training data or different model architectures.

##  Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request. You can also open an issue for bugs or feature requests.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📫 Contact

<div align="center">
  <a href="https://www.linkedin.com/in/rishiraj2003/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</div>



---