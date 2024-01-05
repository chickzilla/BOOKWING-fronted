import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Link from "next/link";
import { Event } from "@/interface";
import EventType_Data from "@/data/eventType";

export default function EventCard({ Event }: { Event: Event }) {
  const eventTypes = Event.type.map((type) => {
    const eventType = EventType_Data.find((event) => event.link === type);
    return eventType ? eventType.title : type;
  });
  return (
    <Link
      href={`/runningevent/${Event.id}`}
      className="flex flex-row items-center bg-white w-[100%] h-[100%] justify-between px-5 py-5 rounded-xl shadow-md border-2 border-black hover:cursor-pointer duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className=" flex flex-col items-start justify-between space-y-2 w-[70%] h-[100%]">
        <div className="text-xl text-black font-semibold text-start my-2">
          {Event.name}
        </div>
        <div className="text-sm text-gray-500">
          <LocationOnIcon /> {Event.province}
        </div>
        <div className="text-sm text-gray-500">
          <CalendarMonthIcon /> {Event.date}
        </div>
        <div className="text-sm text-gray-500">
          <DirectionsRunIcon /> {eventTypes.join(", ")}
        </div>
      </div>
      <div className="w-[30%] h-[100%] flex items-center justify-end ">
        <div className="w-[80%] h-[80%]">
          <Image
            className="w-full h-full md:w-48 object-cover"
            src={`${Event.picture}`}
            alt="Picture of the closing event"
            priority
            sizes="100"
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
