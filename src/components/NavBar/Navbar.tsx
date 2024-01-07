"use client";

import RunCircleIcon from "@mui/icons-material/RunCircle";
import Link from "next/link";
import NavbarAuth from "./NavbarAuth";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  return (
    <nav className="bg-[#B22222] fixed w-[100vw] h-[70px] z-20 top-0 start-0 flex flex-row items-center justify-between">
      <div className="w-[50%] h-full flex flex-row items-center justify-between text-center">
        <Link href="../">
          <div className="h-full w-[40%] text-center flex items-center font-bold text-xl px-5 text-center">
            <RunCircleIcon
              sx={{
                color: "white",
                width: "60%",
                height: "70%",
                marginRight: "10px",
                marginLeft: "8px",
              }}
            />
            BookWing
          </div>
        </Link>
        <div className="w-[60%] h-[100%] flex flex-row justify-center items-center">
          <div className="w-[50%] h-[100%] space-x-12 flex flex-row items-center justify-center">
            <Link href="/addEvent">Add Event</Link>
            <Link href="/mapPage">Map</Link>
          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-center text-center">
            <NavbarDropdown />
          </div>
        </div>
      </div>

      <div className="w-[40%] h-[100%]">
        <NavbarAuth />
      </div>
    </nav>
  );
}
