"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function DetailForm({
  setParentDescription,
  setParentPicture,
}: {
  setParentDescription: Function;
  setParentPicture: Function;
}) {
  const [fieldDescription, setFieldDescription] = useState<string>("");
  const [fieldPicture, setFieldPicture] = useState<File | null>(null);

  return (
    <div className="w-[60%] h-[20%] bg-white dark:bg-gray-400 rounded-xl shadow-xl flex flex-row py-10 items-center">
      <div className="w-[50%] h-[100%] flex flex-col justify-center items-center space-y-2">
        <div className="w-[80%] h-[10%] text-black text-md text-center">
          Upload picture
        </div>
        <div className="w-[80%] h-[10%] text-xs text-center text-gray-500 dark:text-gray-800">
          {/*JPG, JPEG, PNG only*/}
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
              id="icon-button-file"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFieldPicture(e.target.files[0]);
                  setParentPicture(e.target.files[0]);

                  //console.log("Selected file:", e.target.files[0]);
                }
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
