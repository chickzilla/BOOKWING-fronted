"use client";

import { useState } from "react";
import EventType_Data from "@/data/eventType";
import { Select, MenuItem } from "@mui/material";

export default function TypesFrom() {
  const [selectType, setSelectType] = useState("Bangkok");
  return (
    <div className="w-[60%] h-[30%] bg-white rounded-xl shadow-xl flex flex-col py-10 items-center bl-black">
      <div className="w-[100%] h-[60%] flex justify-center items-center">
        <Select sx={{ width: "80%" }} value={"fun_run"}>
          {EventType_Data.map((type, index) => (
            <MenuItem value={type.link} key={index}>
              {type.title}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
