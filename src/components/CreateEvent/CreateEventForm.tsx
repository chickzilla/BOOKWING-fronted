"use client";

import { TextField } from "@mui/material";

import { Select, MenuItem } from "@mui/material";
import { ThailandProvince } from "@/data/province";
import { useState } from "react";
import EventType_Data from "@/data/eventType";

export default function CreateEventForm() {
  const [selectProvince, setSelectProvince] = useState("Bangkok");
  const handleSelectProvince = (event: any) => {
    setSelectProvince(event.target.value);
  };
  return (
    <div className="w-[60%] h-[20%] bg-white bg-white rounded-xl shadow-xl flex flex-col py-10 items-center">
      <div className="w-[80%] h-[50%] flex text-center justify-center items-center">
        <TextField
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </div>
      <div className="w-[80%] h-[50%] flex flex-row">
        <div className="w-[50%] h-[100%] flex justify-start items-center">
          <Select sx={{ width: "80%" }} value={"fun_run"}>
            {EventType_Data.map((type, index) => (
              <MenuItem value={type.link} key={index}>
                {type.title}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center"></div>
      </div>
    </div>
  );
}
