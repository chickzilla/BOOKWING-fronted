"use client";

import { useState } from "react";
import EventType_Data from "@/data/eventType";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Event Date" />
          <TimeField label="Start time" format="HH:mm" />{" "}
        </LocalizationProvider>
      </div>
    </div>
  );
}
