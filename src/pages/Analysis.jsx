import React, { useState, useRef, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import toast from "react-hot-toast";
import axios from "axios";
import uploadImage from "../assets/upload.svg";
import { TailSpin } from "react-loader-spinner";

const Analysis = () => {
  const [prevImage, setPrevImage] = useState(null);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [analysisResults, setAnalysisResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const currentImagePreview = prevImage;
    return () => {
      if (currentImagePreview) {
        URL.revokeObjectURL(currentImagePreview);
      }
    };
  }, [prevImage]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("File not found");
      return;
    }

    if (prevImage) {
      URL.revokeObjectURL(prevImage);
    }

    setImage(file);
    const newPreviewURL = URL.createObjectURL(file);
    setPrevImage(newPreviewURL);
    setText("");
    setAnalysisResults([]);

    e.target.value = null;
  };

  const triggerFileInput = () => {
    if (isLoading) return;
    imageRef.current?.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPrevImage(null);
    setText("");
    setAnalysisResults([]);

    if (imageRef.current) {
      imageRef.current.value = null;
    }
  };

  function formatRawText(text) {
    let formatted = text;
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    if (formatted.includes("- ")) {
      formatted =
        '<ul class="list-disc list-inside">' +
        formatted
          .split("\n")
          .map((line) =>
            line.startsWith("- ") ? `<li>${line.slice(2)}</li>` : line
          )
          .join("") + 
        "</ul>";
    }
    formatted = formatted.replace(/\n/g, "<br>");
    return formatted;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select an image first.");
      return;
    }

    setIsLoading(true);
    setText("");
    setAnalysisResults([]);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:3000/generate/compare",
        formData
      );
      if (res.data && res.data.info) {
        setText(res.data.info);
        setAnalysisResults(res.data.allresult || []);
      } else {
        setText("Received incomplete data from server.");
        setAnalysisResults([]);
      }
    } catch (err) {
      console.error("Submission Error:", err);
      const errorMsg =
        err.response?.data?.message || err.message || "Error sending request";
      setText(`Error: ${errorMsg}`);
      setAnalysisResults([]);
      toast.error(`Submission failed: ${errorMsg}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center min-h-screen py-8 px-4 bg-gray-50 font-geist">
      <div className="flex flex-col space-y-6 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div className="flex flex-col space-y-4 w-full md:w-2/5 bg-white shadow-md border border-gray-200 p-5 rounded-lg h-auto min-h-[24rem]">
            <div
              className="flex-grow overflow-hidden rounded-md cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-dashed border-gray-300 transition-colors min-h-[16rem]"
              onClick={triggerFileInput}
              title="Click to upload an image"
            >
              {!prevImage ? (
                <div className="flex flex-col space-y-4 items-center text-center px-4">
                  <img
                    src={uploadImage}
                    className="size-12 text-gray-400"
                    alt="Upload icon"
                  />
                  <span className="text-lg font-medium text-gray-600">Click to Upload Image</span>
                </div>
              ) : (
                <img
                  src={prevImage}
                  alt="Selected preview"
                  className="max-w-full max-h-full object-contain p-1"
                />
              )}
            </div>

            <input
              type="file"
              ref={imageRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: "none" }}
              disabled={isLoading}
            />

            <div className="flex justify-center items-center space-x-4 pt-2">
              <button
                onClick={handleRemoveImage}
                disabled={!image || isLoading}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                  !image || isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer"
                }`}
              >
                Remove
              </button>
              <button
                onClick={handleSubmit}
                disabled={!image || isLoading}
                className={`px-5 py-2 text-sm font-medium text-white rounded-md transition-colors flex items-center justify-center ${
                  isLoading
                    ? "bg-sky-400 cursor-wait"
                    : !image
                    ? "bg-sky-300 cursor-not-allowed"
                    : "bg-sky-600 hover:bg-sky-700 cursor-pointer"
                }`}
              >
                {isLoading ? (
                   <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                ) : "Analyze Image"}
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-3/5 bg-white shadow-md border border-gray-200 p-5 rounded-lg min-h-[24rem] items-center justify-center space-y-4">
            {isLoading && (
              <>
                <TailSpin
                  visible={true}
                  height="40"
                  width="40"
                  color="#3B82F6"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                />
                <span className="text-gray-500 text-base text-center">
                  Analyzing image, please wait...
                </span>
              </>
            )}
            {!isLoading && analysisResults.length === 0 && !prevImage && (
              <div className="text-center text-gray-400 text-lg px-4">
                Upload an image to see the analysis results here.
              </div>
            )}
            {!isLoading &&
              analysisResults.length === 0 &&
              prevImage &&
              text === "" && (
                 <div className="text-center text-gray-500 text-lg px-4">
                  Click 'Analyze Image' to get results.
                </div>
              )}
             {!isLoading &&
              analysisResults.length === 0 &&
              text.startsWith("Error:") && (
                <div className="text-center text-red-500 text-lg px-4">
                  Analysis failed. Please try again or use a different image.
                </div>
              )}
            {!isLoading && analysisResults.length > 0 && (
              <div className="flex flex-col space-y-4 w-full px-2 sm:px-4">
                 <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">Analysis Results</h2>
                {analysisResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-1.5 w-full"
                  >
                    <div className="flex justify-between items-baseline px-1">
                      <h3 className="text-gray-700 font-medium text-sm truncate mr-2">
                        {result.label}
                      </h3>
                      <h4 className="text-gray-800 font-semibold text-sm flex-shrink-0">
                        {`${Math.floor(result.score * 100)}%`}
                      </h4>
                    </div>
                    <ProgressBar
                      completed={Math.floor(result.score * 100)}
                      height="6px"
                      bgColor="black" // sky-600
                      baseBgColor="#E5E7EB" // gray-200
                      isLabelVisible={false}
                      animateOnRender={true}
                      transitionDuration="1.5s"
                      className="w-full rounded-full overflow-hidden"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {!isLoading && text && !text.startsWith("Error:") && (
          <div className="bg-white border border-gray-200 shadow-sm p-5 rounded-lg mt-0">
             <h2 className="text-xl font-semibold text-gray-800 mb-3">Details & Recommendations</h2>
             <div
               className="prose prose-sm sm:prose-base max-w-none text-gray-700 prose-strong:text-gray-800 prose-li:marker:text-sky-600"
               dangerouslySetInnerHTML={{ __html: formatRawText(text) }}
             />
          </div>
        )}

        {!isLoading && text && text.startsWith("Error:") && (
          <div className="bg-red-50 border border-red-300 p-4 rounded-lg mt-0">
            <h2 className="text-lg font-semibold text-red-700 mb-2">Error Details</h2>
            <p className="text-sm text-red-600">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analysis;