"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function RunningDetail({
  eventName,
  date,
  distance,
  picture,
  location,
}: {
  eventName: string;
  date: string;
  distance: string[];
  picture: string;
  location: string;
}) {
  const [allDistance, setAllDistance] = useState("");
  useEffect(() => {
    setAllDistance(distance.join(", "));
  }, [distance]);

  return (
    <div className="flex flex-row w-[90%] h-[50vh] justify-between">
      <div className="w-[40%] h-[100%]">
        <Image
          className="object-cover w-[100%] h-[100%] "
          src={`${picture}`}
          alt="cover"
          width={100}
          height={100}
          sizes="1000px"
        />
      </div>
      <div className="w-[50%] h-max text-black">
        <h1 className="text-3xl font-bold">{eventName}</h1>
        <div className="mt-14 text-gray-800">
          <LocationOnIcon />{" "}
          <div className="pl-6 inline text-base font-normal">{location}</div>
        </div>
        <div className="mt-2 text-gray-800">
          <CalendarMonthIcon />{" "}
          <div className="pl-6 inline text-base">{date}</div>
        </div>
        <div className="w-full border-t-zinc-400 border-2 mt-10 mb-5 " />
        <div className="flex flex-row w-full">
          <div className="font-bold mr-10">Running:</div>
          <div className="ml-10 text-gray-800">{allDistance}</div>
        </div>
        <div className="w-full border-t-zinc-400 border-2 mt-5" />
      </div>
    </div>
  );
}
