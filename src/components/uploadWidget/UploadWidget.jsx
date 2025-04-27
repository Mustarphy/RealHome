import { createContext, useState, useEffect } from 'react';

// Create a context to manage the script loading state
const cloudinaryScriptContext = createContext();

const UploadWidget = ({ uwConfig, setPublicId, setState }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already present
    const existingScript = document.getElementById("cloudinary-upload-widget");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      script.id = "cloudinary-upload-widget";

      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const handleUpload = () => {
    if (!loaded) return;

    const widget = window.cloudinary.createUploadWidget(
      uwConfig,
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload success:", result.info);
          setState(prev=>[...prev,result.info.secure_url])
        }
      }
    );

    widget.open();
  };

  return (
    <cloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        className="cloudinary-button"
        onClick={handleUpload}
      >
        Upload
      </button>
    </cloudinaryScriptContext.Provider>
  );
};

export default UploadWidget;
export { cloudinaryScriptContext };
