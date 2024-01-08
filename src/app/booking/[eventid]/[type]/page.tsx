import getEventByID from "@/libs/getEventByID";
import Image from "next/image";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default async function BookingPage({
  params,
}: {
  params: { eventid: string; type: string };
}) {
  const event = await getEventByID(params.eventid);
  console.log(event);

  return (
    <main className="flex justify-center w-full bg-neutral-100 h-[100vh] py-16 pt-[160px]">
      <div className="flex bg-white w-[65%] h-[50vh] justify-between px-8 py-5 rounded-xl shadow-lg border-2 border-black hover:cursor-pointer duration-300">
        <div className="flex flex-col min-w-[55%] justify-between">
          <div className="text-black text-3xl font-bold mt-1 mb-6 w-[100%]">
            {event.name}
          </div>
          <div className="border-1 border-black mb-7"></div>
          <div className="flex mb-4">
            <DirectionsRunIcon className="text-black mr-1" />
            <div className="text-black font-semibold mr-1 w-[20%]">
              Event Type
            </div>
            <div className="text-black">
              : {decodeURIComponent(params.type)}
            </div>
          </div>
          <div className="flex mb-4">
            <LocationOnIcon className="text-black mr-1" />
            <div className="text-black font-semibold mr-1 w-[20%]">
              Location
            </div>
            <div className="text-black">: {event.location}</div>
          </div>
          <div className="flex mb-4">
            <CalendarMonthIcon className="text-black mr-1" />
            <div className="text-black font-semibold mr-1 w-[20%]">Date</div>
            <div className="text-black">: {event.date}</div>
          </div>
          <div className="flex mb-4">
            <AccessTimeIcon className="text-black mr-1" />
            <div className="text-black font-semibold mr-1 w-[20%]">Time</div>
            <div className="text-black">: {event.time}</div>
          </div>
          <div className="flex mb-4">
            <AccountCircleIcon className="text-black mr-1" />
            <div className="text-black font-semibold mr-1 w-[20%]">
              Organizer
            </div>
            <div className="text-black">: {event.organizer}</div>
          </div>
        </div>
        <div className="w-[40%]">
          <Image
            className="w-full h-full object-cover rounded"
            src={`${event.picture}`}
            alt="Picture of the closing event"
            priority
            sizes="100"
            width={100}
            height={100}
          />
        </div>
      </div>
    </main>
  );
}
