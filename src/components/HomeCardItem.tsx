import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function HomeCardItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[20%] flex flex-col justify-center items-center w-[100%] h-[100%]">
      <div className="w-full h-[60%]">
        <DirectionsRunIcon
          sx={{ color: "red", width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-black h-[20%]">{title}</div>
      <div className="text-black text-gray-500 h-[20%]">{description}</div>
    </div>
  );
}
