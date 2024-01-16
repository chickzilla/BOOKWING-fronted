"use client";
import { useState } from "react";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function MedalBar({
  Userdistance,
  Userpoint,
}: {
  Userdistance: number;
  Userpoint: number;
}) {
  const [distance, setDistance] = useState<number>(Userdistance);
  const [point, setPoint] = useState<number>(Userpoint);
  return (
    <div className="w-[100%] h-[40vh] text-black flex flex-row justify-center items-center text-center overflow-x-hidden">
      <div className="w-[30%] h-[100%] flex items-center justify-center ">
        <WorkspacePremiumIcon sx={{ height: "80%", width: "80%" }} />
      </div>
      <div className="w-[50%] h-[80%] flex flex-row justify-center items-center text-center">
        <div className="w-[40%] h-[100%] flex items-center text-5xl font-bold border-r-2 text-center justify-center border-gray-700">
          {distance} KM
        </div>
        <div className="w-[40%] h-[100%] flex items-center text-center text-5xl font-bold justify-center">
          {point} Point
        </div>
      </div>
    </div>
  );
}
