"use client";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useEffect, useState } from "react";

import { InputLabel, Select, MenuItem, Button } from "@mui/material";
import { Booking, User } from "@/interface";
import createBooking from "@/libs/createBooking";
import { getCookie } from "typescript-cookie";
import { useRouter } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
import EventType_Data from "@/data/eventType";

export default function BookingInformation({
  eventid,
  eventtype,
}: {
  eventid: string;
  eventtype: string;
}) {
  const [phone, setPhone] = useState("");
  const [shirtsize, setSize] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getToken = async () => {
      const token = getCookie("jwt");
      setToken(token || "");
    };
    getToken();
  }, []);

  const createBookingHandler = async () => {
    const userProfile = await getUserProfile({ token });
    const user: User = userProfile.user;
    const typetoLink = () => {
      const foundEvent = EventType_Data.find(
        (event) => event.title === decodeURIComponent(eventtype)
      );
      if (foundEvent) return foundEvent.link;
    };
    const eventtoLink = typetoLink();

    if (!phone || !shirtsize || !eventtoLink) {
      alert("Please fill all information");
    } else {
      const data: Booking = {
        eventid: eventid,
        userid: user.id,
        eventtype: eventtoLink,
        phone: phone,
        shirtsize: shirtsize,
      };
      try {
        await createBooking({ booking: data, token: token });
        router.push("/mybooking");
      } catch (err) {
        alert("Booking fail, Booking already exist or Try again later");
        console.error(err);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-8 bg-white w-[50%] h-auto items-center px-8 py-12 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer">
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
          className="hover:bg-[#CD5C5C] bg-[#B22222] text-base text-white w-auto h-[50%] mr-32"
          endIcon={<DoneAllIcon className="text-white" />}
          onClick={createBookingHandler}
        >
          JOIN US
        </Button>
      </div>
    </div>
  );
}
