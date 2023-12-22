import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Link from "next/link";
export default function HomeCardItem({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={`/running_type/${link}`}
      className="flex flex-col justify-center items-center w-full h-full text-center m-auto hover:scale-110 hover:cursor-pointer  transition-all duration-300 py-2"
    >
      <div className="w-full h-[60%]">
        <DirectionsRunIcon
          className="icon transition-transform transform-gpu "
          sx={{ color: "red", width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-black h-[20%] w-full">{title}</div>
      <div className="text-black text-gray-500 h-[20%] w-full">
        {description}
      </div>
    </Link>
  );
}
