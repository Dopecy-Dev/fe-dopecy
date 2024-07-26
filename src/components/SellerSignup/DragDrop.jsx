import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    setFileURL(URL.createObjectURL(file));
  };

  const customStyles = {
    border: "2px dashed grey",
    borderRadius: "8px",
    height: "200px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    color: "grey",
    textAlign: "center",
    cursor: "pointer",
    padding: "20px",
    margin: "20px auto",
    position: "relative",
  };

  const imageStyles = {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children={
          <div style={customStyles}>
            {fileURL ? (
              <img src={fileURL} alt="Preview" style={imageStyles} />
            ) : (
              <div>Drag and drop your files here or click to upload</div>
            )}
          </div>
        }
      />
    </div>
  );
}

export default DragDrop;
