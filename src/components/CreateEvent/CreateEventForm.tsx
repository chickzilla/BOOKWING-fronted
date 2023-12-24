"use client";

import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { ThailandProvince } from "@/data/province";
import { useState } from "react";
import { TimeField } from "@mui/x-date-pickers/TimeField";

export default function CreateEventForm() {
  const [selectProvince, setSelectProvince] = useState("Bangkok");
  const handleSelectProvince = (event: any) => {
    setSelectProvince(event.target.value);
  };
  return (
    <div className="w-[60%] h-[30%] bg-white bg-white rounded-xl shadow-xl flex flex-col py-10 items-center">
      <div className="w-[80%] h-[50%] flex justify-center">
        <TextField
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </div>
      <div className="w-[80%] h-[50%] flex flex-row">
        <div className="w-[50%] h-[100%] flex justify-start items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Event Date" />
            <TimeField label="Start time" format="HH:mm" />{" "}
          </LocalizationProvider>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <Select
            value={selectProvince}
            sx={{ width: "80%" }}
            onChange={handleSelectProvince}
          >
            {ThailandProvince.map((province, index) => (
              <MenuItem value={province} key={index}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
