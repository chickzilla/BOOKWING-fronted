import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Link from "next/link";

export default function EventCard({ eventid }: { eventid: string }) {
  return (
    <Link
      href={`/runningevent/${eventid}`}
      className="flex flex-row items-center bg-white w-[100%] h-[100%] justify-between px-5 py-5 rounded-xl shadow-md border-2 border-black hover:cursor-pointer duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className=" flex flex-col items-start justify-between space-y-2">
        <div className="text-xl text-black font-semibold text-start my-2">
          Rayong Marathon
        </div>
        <div className="text-sm text-gray-500">
          <LocationOnIcon /> Rayong, Thailand
        </div>
        <div className="text-sm text-gray-500">
          <CalendarMonthIcon /> 1 Feb 2566
        </div>
        <div className="text-sm text-gray-500">
          <DirectionsRunIcon /> 5 km - 10 km
        </div>
      </div>
      <Image
        className="object-cover w-full h-96 md:h-auto md:w-48 "
        src="/img/head_picture.jpg"
        alt="Picture of the closing event"
        priority
        sizes="500vh"
        width={100}
        height={100}
      />
    </Link>
  );
}
