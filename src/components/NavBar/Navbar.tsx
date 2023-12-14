import RunCircleIcon from "@mui/icons-material/RunCircle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#B22222] fixed w-full h-[70px] z-20 top-0 start-0 flex flex-row items-center">
      <Link href="../">
        <div className="h-full w-[22%] text-center flex items-center font-bold text-xl p-2">
          <RunCircleIcon
            sx={{
              color: "white",
              width: "60%",
              height: "70%",
              marginRight: "10px",
              marginLeft: "8px",
            }}
          />
          BookWing
        </div>
      </Link>
    </nav>
  );
}
