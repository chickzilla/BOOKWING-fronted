import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InfoIcon from "@mui/icons-material/Info";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function HomeSlogan() {
  return (
    <div className="w-[80%] h-[20vh] space-x-12 items-center mt-24 mb-10 flex flex-col text-black font-bold text-4xl">
      Why use BookWing ?
      <div className="w-[100%] h-[100%] flex flex-row justify-between mt-10">
        <div className="w-[25%] text-black text-base font-normal flex flex-col justify-center items-center ">
          <VerifiedUserIcon
            sx={{ width: "40%", height: "40%", color: "#325863" }}
          />
          <div className="w-[100%] h-[20%] text-black text-center font-semibold flex flex-col justify-center">
            Safety First
          </div>
          <div className="w-[100%] h-[20%] text-gray-600 text-center ">
            Your safety is our priority. verify all organizer and event.
          </div>
        </div>
        <div className="w-[25%] text-black text-base font-normal flex flex-col justify-center items-center">
          <InfoIcon sx={{ width: "40%", height: "40%", color: "#D99A3D" }} />
          <div className="w-[100%] h-[20%] text-black text-center font-semibold flex flex-col justify-center">
            Detailed Event Information
          </div>
          <div className="w-[100%] h-[20%] text-gray-600 text-center">
            Make informed decisions with comprehensive event details.
          </div>
        </div>
        <div className="w-[25%] text-black text-base font-normal flex flex-col justify-center items-center">
          <FindInPageIcon
            sx={{ width: "40%", height: "40%", color: "#F75151" }}
          />
          <div className="w-[100%] h-[20%] text-black text-center font-semibold flex flex-col justify-center">
            Extensive Event Selection
          </div>
          <div className="w-[100%] h-[20%] text-gray-600 text-center">
            Explore a diverse range of running events.
          </div>
        </div>
        <div className="w-[25%] text-black text-base font-normal flex flex-col justify-center items-center">
          <BookmarkAddedIcon
            sx={{ width: "40%", height: "40%", color: "#8F282D" }}
          />
          <div className="w-[100%] h-[20%] text-black text-center font-semibold flex flex-col justify-center">
            Effortless Booking Process
          </div>
          <div className="w-[100%] h-[20%] text-gray-600 text-center">
            Booking your next running adventure is a breeze with BookWing.
          </div>
        </div>
      </div>
    </div>
  );
}
