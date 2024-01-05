import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventType_Data from "@/data/eventType";
export default function PackageCard({
  distance,
  location,
  date,
  time,
}: {
  distance: string;
  location: string;
  date: string;
  time: string;
}) {
  return (
    <div className="w-[80%] h-[90%] bg-white rounded-lg text-black flex flex-col justify-between p-8 border-black shadow-xl duration-300 hover:shadow-2xl ">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-bold ">{distance}</h1>
        <h1 className=" text-end pr-5">
          <FavoriteIcon
            sx={{
              "&:hover": {
                color: "pink",
              },
            }}
          />
        </h1>
      </div>

      <p className="text-base p-2 font-normal">
        <LocationOnIcon />
        {location}
      </p>
      <p className="text-base p-2 font-normal">
        <CalendarMonthIcon /> {date}
      </p>
      <p className="text-base p-2 font-normal">
        <AccessTimeIcon />
        {time}
      </p>
      <button className="transition-colors w-20 h-10 text-white bg-rose-800 rounded-md hover:bg-white hover:text-rose-800 hover:border hover:border-rose-800 duration-300">
        {" "}
        Join us{" "}
      </button>
    </div>
  );
}
