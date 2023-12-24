"use client";

import { RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import EventType_Data from "@/data/eventType";

export default function TypesFrom() {
  const [selectType, setSelectType] = useState("Bangkok");
  return (
    <div className="w-[60%] h-[30%] bg-white rounded-xl shadow-xl flex flex-col py-10 items-center bl-black">
      <div className="w-[100%] h-[80%] flex justify-center items-center">
        <RadioGroup
          className="w-[100%] h-[80%] flex flex-column items-center justify-center"
          row
        >
          {EventType_Data.map((type, index) => (
            <FormControlLabel
              value={type.link}
              control={<Radio />}
              label={type.title}
              key={index}
              labelPlacement="top"
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
