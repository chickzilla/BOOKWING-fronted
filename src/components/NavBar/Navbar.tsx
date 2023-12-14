import RunCircleIcon from "@mui/icons-material/RunCircle";

export default function Navbar() {
  return (
    <nav className="bg-[#B22222] fixed w-full h-[70px] z-20 top-0 start-0 flex flex-row items-center">
      <div className="h-full w-[10%] text-center flex items-center font-bold text-xl p-2">
        <RunCircleIcon sx={{ color: "white", width: "60%", height: "70%" }} />
        BookWing
      </div>
    </nav>
  );
}
