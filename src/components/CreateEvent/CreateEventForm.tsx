"use client";

import { TextField } from "@mui/material";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import EventType_Data from "@/data/eventType";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CreateEventForm({
  SetParentType,
  SetParentName,
}: {
  SetParentType: Function;
  SetParentName: Function;
}) {
  const [selectType, setSelectType] = useState<string[]>([]);
  const [allDescription, setAllDescription] = useState<string>("");
  const [selectName, setSelectName] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof selectType>) => {
    const {
      target: { value },
    } = event;
    setSelectType(typeof value === "string" ? value.split(",") : value);
    SetParentType(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const allDescriptionArray = selectType.map((type) => {
      const eventType = EventType_Data.find((event) => event.link === type);
      return eventType ? eventType.description : "";
    });

    setAllDescription(allDescriptionArray.join(", "));
  }, [selectType]);

  return (
    <div className="w-[60%] h-[25%] bg-white bg-white rounded-xl shadow-xl flex flex-col py-10 items-center space-y-5">
      <div className="w-[80%] h-[50%] flex text-center justify-center items-center">
        <TextField
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
          value={selectName}
          onChange={(e) => {
            setSelectName(e.target.value);
            SetParentName(e.target.value);
          }}
          sx={{
            width: "100%",
          }}
        />
      </div>
      <div className="w-[80%] h-[50%] flex flex-row">
        <div className="w-[50%] h-[100%] flex flex-col justify-start items-start ">
          <InputLabel>Select Event Type</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            sx={{ width: "80%" }}
            multiple
            value={selectType}
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            {EventType_Data.map((type, index) => (
              <MenuItem value={type.link} key={index}>
                {type.title}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="w-[50%] h-[100%] flex flex-col justify-center items-center space-y-8">
          <div className="w-[100%] h-[20%]">Running Detail</div>
          <div className="w-[100%] h-[80%] text-gray-500 text-xs">
            {selectType.length === 0
              ? "Select event type to see event description"
              : allDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
