"use client";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useState } from "react";

import { InputLabel, Select, MenuItem, Button } from "@mui/material";

export default function BookingInformation() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shirtsize, setSize] = useState("");
  return (
    <div className="flex flex-col gap-y-8 bg-white w-[50%] h-auto items-center px-8 py-12 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer">
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        required
        sx={{
          width: "80%",
          marginBottom: "12px",
        }}
        size="small"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        required
        sx={{
          width: "80%",
          marginBottom: "12px",
        }}
        size="small"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required
        sx={{
          width: "80%",
          marginBottom: "12px",
        }}
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        required
        sx={{
          width: "80%",
        }}
        size="small"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div className="flex w-[100%] ml-32 text-black items-end justify-between">
        <div className="w-[30%]">
          <InputLabel className="text-sm">Select Shirt Size</InputLabel>
          <Select
            className="w-[100%] text-sm"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={shirtsize}
            onChange={(e) => setSize(e.target.value)}
          >
            <MenuItem value="XS" key="XS" className="text-sm">
              XS
            </MenuItem>
            <MenuItem value="S" key="S" className="text-sm">
              S
            </MenuItem>
            <MenuItem value="M" key="M" className="text-sm">
              M
            </MenuItem>
            <MenuItem value="L" key="L" className="text-sm">
              L
            </MenuItem>
            <MenuItem value="XL" key="XL" className="text-sm">
              XL
            </MenuItem>
            <MenuItem value="XXL" key="XXL" className="text-sm">
              XXL
            </MenuItem>
          </Select>
        </div>
        <Button
          variant="contained"
          //onClick={SubmitHandler}
          className="hover:bg-[#CD5C5C] bg-[#B22222] text-base text-white w-auto h-[50%] mr-32"
          endIcon={<DoneAllIcon className="text-white" />}
        >
          JOIN US
        </Button>
      </div>
    </div>
  );
}
