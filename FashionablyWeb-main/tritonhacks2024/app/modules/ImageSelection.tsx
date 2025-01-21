"use client";
import "../globals.css"
import Webcam from "react-webcam"
import { ChangeEvent, useCallback, useRef, useState } from "react";
import Button from "@mui/material/Button"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import { styled } from "@mui/material/styles"

export default function ImageSelection() {

  const [file, setFile] = useState<File | null>();

  const resetUpload = () => {setFile(null)}

  const onUpload = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const onContinue = () => {
    if(!file) {
      return;
    }

    
  };


  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
    
    return (
      <div className="h-16 w-70 flex place-content-center container w-full align-center">
        {file == null ? (
          <div className=" capture-container">
            <label htmlFor="upload-image">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Photo
                <VisuallyHiddenInput type="file" />
              </Button>
              <input
                id="upload-image"
                hidden
                accept=".png, .jpg, .jpeg"
                type="file"
                onChange={onUpload}
              >
              </input>
            </label>
          </div>
        ) : (
          <div className="confirm-container w-full align-center">
            <img src={file.webkitRelativePath} alt="webcam"></img>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={resetUpload}
              color="error"
            >
              Go Back
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={onContinue}
              color="success"
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    );
}