import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function HomeCardItem() {
  return (
    <div className="w-[20%] flex flex-col justify-center items-center w-[100%] h-[100%]">
      <div className="w-full h-[60%]">
        <DirectionsRunIcon
          sx={{ color: "red", width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-black">description</div>
    </div>
  );
}
