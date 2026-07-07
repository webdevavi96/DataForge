import { useState } from "react";

function useUpload() {
  const [file, setFile] = useState(null);

  const fileTypes = ["application/pdf", "text/plain", "text/csv"];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (!fileTypes.includes(selectedFile.type)) {
      alert("This file type is not supported.");
      return;
    }

    setFile(selectedFile);
  };

  const previewFile = () => {
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);

    window.open(fileUrl, "_blank");

    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
    }, 1000);
  };

  const clearFile = () => {
    setFile(null);
  };

  const uploadFile = async() =>{
    
  }

  return {
    file,
    setFile,
    handleFileChange,
    previewFile,
    clearFile,
    supportedTypes: fileTypes,
  };
}

export default useUpload;
