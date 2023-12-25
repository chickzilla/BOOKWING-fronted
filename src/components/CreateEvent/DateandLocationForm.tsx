"use client";

import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { ThailandProvince } from "@/data/province";
import InputLabel from "@mui/material/InputLabel";
import { Dayjs } from "dayjs";

export default function DateandLocationForm() {
  const [selectProvince, setSelectProvince] = useState("Bangkok");
  const [selectDate, setSelectDate] = useState<Dayjs | null>(null);
  const [DateString, setDateString] = useState<string>("");

  const [selectTime, setSelectTime] = useState<Dayjs | null>(null);
  const [TimeString, setTimeString] = useState<string>("");

  return (
    <div className="w-[60%] h-[30%] bg-white rounded-xl shadow-xl flex flex-col py-10 items-center bl-black">
      <div className="w-[80%] h-[40%] flex flex-row justify-center items-center">
        <div className="w-[50%] h-[100%] flex flex-col space-y-4">
          <InputLabel>selectProvince</InputLabel>
          <Select
            labelId="province-select-label"
            sx={{ width: "80%" }}
            value={selectProvince}
            onChange={(e) => {
              setSelectProvince(e.target.value as string);
              console.log(e.target.value);
            }}
          >
            {ThailandProvince.map((type, index) => (
              <MenuItem value={type} key={index}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="w-[50%] h-[100%] flex flex-col flex flex-row space-y-4 pl-5">
          <InputLabel>Date and Time</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="w-[100%] flex flex-row space-x-2 justify-center">
              <DatePicker
                label="Event Date"
                sx={{ width: "50%", height: "100%" }}
                value={selectDate}
                onChange={(newValue) => {
                  setSelectDate(newValue);
                  setDateString(newValue?.format("DD/MMM/YYYY") as string);
                }}
              />
              <TimeField
                label="Start time"
                format="HH:mm"
                sx={{ width: "50%", height: "80%" }}
                value={selectTime}
                onChange={(newValue) => {
                  setSelectTime(newValue);
                  setTimeString(newValue?.format("HH:mm") as string);
                }}
              />
            </div>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
