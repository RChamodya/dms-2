import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DropZone = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      notifySuccessful();

      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      // reader.readAsText(file); // You can use other methods based on your file type (e.g., readAsDataURL for images).
      reader.readAsDataURL(file);
    }
  };

  const notifySuccessful = () => {
    toast.success("Uploaded Successfully");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "64px",
            border: "2px dashed",
            borderColor: "gray.300",
            borderRadius: "lg",
            cursor: "pointer",
            backgroundColor: "gray.50",
            // "&:hover": {
            //   backgroundColor: "gray.100",
            //   borderColor: "gray.500",
            // },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "5px",
              paddingBottom: "6px",
            }}
          >
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 16"
            >
              {/* Your SVG path */}
            </svg>
            <Typography variant="body2" color="gray.500">
              <span style={{ fontWeight: "bold" }}>Click to upload</span> or
              drag and drop
            </Typography>
            <Typography variant="caption" color="gray.500">
              Upload your document here (MAX. 100MB)
            </Typography>
          </div>
          <input
            type="file"
            id="dropzone-file"
            style={{ display: "none" }}
            accept=".pdf, .doc, .docx, .jpg, .txt" // Define accepted file types
            onChange={handleFileChange}
          />
        </label>
      </div>

      {uploadedFile && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Uploaded File: {uploadedFile.name}
          </Typography>
          <Typography>{uploadedFile.name}</Typography>
          <Typography variant="body2">
            Size: {Math.round(uploadedFile.size / 1024)} KB{" "}
          </Typography>
        </div>
      )}
    </>
  );
};

export default DropZone;
