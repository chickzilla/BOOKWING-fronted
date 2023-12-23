import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function MapAllCard() {
  return (
    <div className="w-[30%] h-[100vh] flex fixed items-center justify-center start-0 top-0 z-10 pt-[70px]">
      <div className="w-[80%] h-[75%] bg-white rounded-lg flex flex-col opacity-90 hover:cursor-pointer duration-300 hover:shadow-lg hover:scale-105">
        <Link href="/runningevent/1" className="w-[100%] h-[100%]">
          <div className="w-[100%] h-[50%]">
            <Image
              src="/img/run_themoon.png"
              width={100}
              height={100}
              sizes="500"
              alt="picture from map"
              className="object-cover w-full h-full layout-fill rounded-t-lg"
            />
          </div>
          <div className="w-[100%] h-[50%] flex flex-col text-black pt-4 px-5">
            <div className="w-[100%] h-[20%] font-bold text-3xl">
              Event Name
            </div>
            <div className="w-[100%] h-[20%] flex flex-row items-center text-xl">
              <LocationOnIcon sx={{ marginRight: "5px" }} /> Location
            </div>
            <div className="w-[100%] h-[20%] flex flex-row items-center text-xl">
              <CalendarMonthIcon sx={{ marginRight: "5px" }} /> Date
            </div>
            <div className="w-[100%] h-[20%] flex flex-row items-center text-xl">
              <DirectionsRunIcon sx={{ marginRight: "5px" }} /> Distance
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
