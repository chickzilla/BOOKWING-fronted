"use client";

import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { ThailandProvince } from "@/data/province";
import InputLabel from "@mui/material/InputLabel";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";

export default function DateandLocationForm({
  setParentProvince,
  setParentDate,
  setParentTime,
}: {
  setParentProvince: Function;
  setParentDate: Function;
  setParentTime: Function;
}) {
  const [selectProvince, setSelectProvince] = useState("Bangkok");
  const [selectDate, setSelectDate] = useState<Dayjs | null>(null);
  const [selectTime, setSelectTime] = useState<Dayjs | null>(null);

  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined,
  });

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
        });
    })();
  }, []);

  return (
    <div className="w-[60%] h-[20%] bg-white rounded-xl shadow-xl flex flex-col py-10 items-center bl-black">
      <div className="w-[80%] h-[40%] flex flex-row justify-center items-center">
        <div className="w-[50%] h-[100%] flex flex-col">
          <InputLabel>selectProvince</InputLabel>
          <Select
            labelId="province-select-label"
            sx={{ width: "80%" }}
            value={selectProvince}
            onChange={(e) => {
              setSelectProvince(e.target.value as string);
              setParentProvince(e.target.value as string);
            }}
          >
            {ThailandProvince.map((type, index) => (
              <MenuItem value={type} key={index}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="w-[50%] h-[100%] flex flex-col flex flex-row pl-5">
          <InputLabel>Date and Time</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="w-[100%] flex flex-row space-x-2 justify-center">
              <DatePicker
                label="Event Date"
                sx={{ width: "50%", height: "100%" }}
                value={selectDate}
                onChange={(newValue) => {
                  setSelectDate(newValue);
                  setParentDate(newValue?.format("DD/MMM/YYYY") as string);
                }}
              />
              <TimeField
                label="Start time"
                format="HH:mm"
                sx={{ width: "50%", height: "80%" }}
                value={selectTime}
                onChange={(newValue) => {
                  setSelectTime(newValue);
                  setParentTime(newValue?.format("HH:mm") as string);
                }}
              />
            </div>
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <div className="w-[80%] h-[60%] flex flex-row justify-center items-center">
          <TextField
            id="outlined-basic"
            label="Post code"
            variant="outlined"
          ></TextField>
        </div>
      </div>
    </div>
  );
}
