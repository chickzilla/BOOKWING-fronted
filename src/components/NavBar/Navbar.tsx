import RunCircleIcon from "@mui/icons-material/RunCircle";
import Link from "next/link";
import NavbarAuth from "./NavbarAuth";
import NavbarTypes from "./NavbarTypes";

export default function Navbar() {
  return (
    <nav className="bg-[#B22222] fixed w-[100vw] h-[70px] z-20 top-0 start-0 flex flex-row items-center justify-between">
      <Link href="../">
        <div className="h-full w-[22%] text-center flex items-center font-bold text-xl pt-2 px-5">
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
      <div className="w-[20%] h-[100%]">
        <NavbarTypes />
      </div>
      <div className="w-[20%] h-[100%]">
        <NavbarAuth />
      </div>
    </nav>
  );
}
