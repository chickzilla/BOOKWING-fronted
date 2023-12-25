"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function DetailForm({
  setParentDescription,
}: {
  setParentDescription: Function;
}) {
  const [fieldDescription, setFieldDescription] = useState<string>("");
  const [fieldPicture, setFieldPicture] = useState<string>("");

  return (
    <div className="w-[60%] h-[20%] bg-white bg-white rounded-xl shadow-xl flex flex-row py-10 items-center">
      <div className="w-[50%] h-[100%] flex flex-col justify-center items-center space-y-2">
        <div className="w-[80%] h-[10%] text-black text-md text-center">
          Upload picture
        </div>
        <div className="w-[80%] h-[10%] text-black text-xs text-center text-gray-500">
          JPG, JPEG, PNG only
        </div>
        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center ">
          <label
            htmlFor="icon-button-file"
            className="w-[100%] h-[100%] flex flex-col justify-center items-center"
          >
            <AddPhotoAlternateIcon
              sx={{
                "&:hover": { cursor: "pointer", backgroundColor: "#FCF6F6" },
                borderRadius: "10px",
                border: "3px solid #E0E0E0",
                borderStyle: "dashed",
                width: "100%",
                height: "80%",
                padding: "10px",
              }}
            />
            <input
              accept="image/png, image/jpeg, image/jpg"
              id="icon-button-file"
              type="file"
              hidden
              onChange={(e) => {
                setFieldPicture(e.target.value);
                console.log(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex flex-col items-center">
        <div className="w-[80%] h-[100%] flex flex-col overflow-y-auto py-5">
          <TextField
            id="outlined-multiline-static"
            label="Event Description"
            multiline
            defaultValue={fieldDescription}
            onChange={(e) => {
              setFieldDescription(e.target.value);
              setParentDescription(e.target.value);
            }}
            minRows={8}
            maxRows={20}
            sx={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
