"use client";

import { Booking, Event } from "@/interface";
import { useEffect, useState } from "react";
import getEventByID from "@/libs/getEventByID";
import Image from "next/image";
import EventType_Data from "@/data/eventType";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";

import DeleteDialog from "./DeleteDialog";

export default function BookingDetail({
  booking,
  setDeleteID,
}: {
  booking: Booking;
  setDeleteID: Function;
}) {
  const [isfetch, setIsfetch] = useState(false);
  const [eventtype, setEventtype] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [event, setEvent] = useState<Event>({
    id: "",
    name: "",
    longitude: 0,
    latitude: 0,
    type: [],
    picture: "",
    picture_location: "",
    province: "",
    location: "",
    date: "",
    time: "",
    package: [],
    description: "",
    organizer: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const event = await getEventByID(booking.eventid);
        console.log("event", event);
        console.log("picture", event.picture);
        setEvent(event);
        setIsfetch(true);
        const eventtype = EventType_Data.find((type) => {
          return type.link === booking.eventtype;
        });
        setEventtype(eventtype?.title || "");
        setDistance(eventtype?.description || "");
        setDate(event?.date);
        setTime(event?.time);
      } catch (error) {
        console.log("ERROR FETCHING EVENT");
      }
    };
    fetchEvent();
  }, []);

  const [open, setOpen] = useState(false);
  const handlerOpen = () => {
    setOpen(true);
  };

  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    if (isDeleted) {
      setDeleteID(booking.id);
    }
  }, [isDeleted]);

  return (
    isfetch && (
      <div className="flex bg-white w-[80%] justify-between px-8 py-5 rounded-xl shadow-lg border-2 border-black mb-20">
        <div className="w-[30%] h-[80%] flex flex-col">
          <Image
            src={event?.picture}
            sizes="100"
            width={100}
            height={100}
            className="object-cover w-[100%] h-[300px]"
            alt="Event Picture"
          />
        </div>
        <div className="w-[60%] h-[auto] text-center font-black text-black text-3xl">
          <div className="w-[100%] flex flex-row justify-between">
            {event?.name}
            <div
              onClick={() => {
                handlerOpen();
              }}
            >
              <DeleteIcon className="hover:cursor-pointer" />
            </div>
            <DeleteDialog
              parent_open={open}
              setparent_Open={(e: boolean) => setOpen(e)}
              bookingID={booking.id}
              setIsDelete={(e: boolean) => setIsDeleted(e)}
            />
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="w-[30%] h-[200px] flex flex-col justify-center items-center text-center text-3xl space-y-2 border-2 rounded-xl shadow-xl">
              <DirectionsRunIcon sx={{ fontSize: 60 }} />
              <div className="w-[100%] text-base font-medium	">{eventtype}</div>
              <div className="w-[100%] text-base font-medium	">{distance}</div>
            </div>
            <div className="w-[30%] h-[200px] flex flex-col justify-center items-center text-center space-y-2 border-2 rounded-xl shadow-xl text-3xl">
              <AccessibilityIcon sx={{ fontSize: 60 }} />
              <div className="w-[100%] text-base font-medium	">
                {booking.shirtsize}
              </div>
              <div className="w-[100%] text-base font-medium	">Shirt </div>
            </div>
            <div className="w-[30%] h-[200px] flex flex-col justify-center items-center text-center space-y-2 border-2 rounded-xl shadow-xl text-3xl">
              <CalendarMonthIcon sx={{ fontSize: 60 }} />
              <div className="w-[100%] text-base font-medium	">{time} </div>
              <div className="w-[100%] text-base font-medium	">{date}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
