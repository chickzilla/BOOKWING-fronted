"use client";

import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import InputLabel from "@mui/material/InputLabel";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { province, Amphur } from "@/interface";
import getAllProvince from "@/libs/getAllProvince";
import getSubProvince from "@/libs/getSubProvince";

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
  const [selectAmphur, setSelectAmphur] = useState("");
  const [selectpostcode, setSelectpostcode] = useState("");
  const [selectDate, setSelectDate] = useState<Dayjs | null>(null);
  const [selectTime, setSelectTime] = useState<Dayjs | null>(null);

  const [provinces, setProvinces] = useState([]);
  const [provinceID, setProvinceID] = useState("1");
  const [amphures, setAmphures] = useState([]);

  useEffect(() => {
    const fetchAllProvince = async () => {
      try {
        const data = await getAllProvince();
        setProvinces(data);
      } catch (error) {}
    };
    fetchAllProvince();
  }, []);

  useEffect(() => {
    const fetchSubProvince = async () => {
      try {
        const data = await getSubProvince(provinceID);
        console.log(data);
        setAmphures(data);
      } catch (error) {}
    };
    fetchSubProvince();
  }, [provinceID]);

  useEffect(() => {
    provinces.map((province: province) => {
      if (province.id === provinceID) {
        setSelectProvince(province.name_en);
      }
    });
  }, [provinceID]);

  useEffect(() => {
    const mergeString = [
      selectpostcode,
      selectAmphur,
      selectProvince,
      "Thailand",
    ]
      .filter(Boolean)
      .join(", ");
    setParentProvince(mergeString);
  }, [selectProvince, selectAmphur, selectpostcode]);

  return (
    <div className="w-[60%] h-[25%] bg-white rounded-xl shadow-xl flex flex-col py-10 items-center bl-black">
      <div className="w-[80%] h-[80%] flex flex-col justify-center items-center space-y-10">
        <div className="w-[100%] h-[70%] flex flex-col items-center justify-center space-y-5">
          <div className="w-[100%]">Province</div>
          <Select
            labelId="province-select-label"
            value={provinceID}
            sx={{ width: "100%" }}
            onChange={(e) => {
              setProvinceID(e.target.value as string);
              setSelectAmphur("");
            }}
          >
            {provinces.map((province: province) => (
              <MenuItem value={province.id} key={province.id}>
                {province.name_en}
              </MenuItem>
            ))}
          </Select>
          <div className="w-[100%] h-[50%] flex flex-row space-x-10">
            <Select
              labelId="Alphures-select-label"
              value={selectAmphur}
              sx={{ width: "50%" }}
              onChange={(e) => {
                setSelectAmphur(e.target.value as string);
              }}
            >
              {amphures.map((amphur: Amphur) => (
                <MenuItem value={amphur.name_en} key={amphur.name_en}>
                  {amphur.name_en}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Postcode"
              variant="outlined"
              sx={{ width: "50%" }}
              onChange={(e) => {
                setSelectpostcode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-[100%] h-[30%] flex flex-col items-center justify-center space-y-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="w-[100%] flex flex-row space-x-2 justify-center items-center">
              <DatePicker
                label="Event Date"
                sx={{ width: "50%" }}
                value={selectDate}
                onChange={(newValue) => {
                  setSelectDate(newValue);
                  setParentDate(newValue?.format("DD/MMM/YYYY") as string);
                }}
              />
              <TimeField
                label="Start time"
                format="HH:mm"
                sx={{ width: "50%" }}
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
    </div>
  );
}
