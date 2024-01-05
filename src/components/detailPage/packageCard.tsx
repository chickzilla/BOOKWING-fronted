import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
    <div className="w-1/2 h-30vh bg-[blue] rounded-lg text-black ">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl p-2 pb-14 font-bold ">{distance}</h1>
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

      <p className="text-xl p-2 font-normal">
        <LocationOnIcon />
        {location}
      </p>
      <p className="text-xl p-2 font-normal">
        <CalendarMonthIcon /> {date}
      </p>
      <p className="text-xl p-2 font-normal">
        <AccessTimeIcon />
        {time}
      </p>
      <p className="text-end pr-8">
        <button className="transition-colors w-20 h-10 text-white bg-rose-800 rounded-md hover:bg-white hover:text-rose-800 hover:border hover:border-rose-800 ">
          {" "}
          Join us{" "}
        </button>
      </p>
    </div>
  );
}
