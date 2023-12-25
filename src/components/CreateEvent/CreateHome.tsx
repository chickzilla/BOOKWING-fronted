import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

export default function CreateHome() {
  return (
    <div className="w-[80%] h-[25vh] space-y-12 items-start mt-24 mb-10 flex flex-col">
      <div className="space-y-12 w-[100%] h-[50%] mb-5">
        <div className="text-black w-full font-bold text-4xl text-center">
          Add Your Event
        </div>
        <div className="text-gray-600 w-[100%]">
          "Host the Ultimate Running Experience – Add Your Event! 🎉🏃‍♂️ Shine a
          Spotlight on Your Exciting Runs. Don't Miss Out – Secure Your Spot Now
          and Guide Participants to Running Bliss! ⭐️"
        </div>
      </div>
      <div className="h-[50%] w-[100%] items-center text-center flex justify-center">
        <Link
          href="/addEvent"
          className="h-[100%] w-[100%] items-center text-center flex justify-center"
        >
          <div className="flex flex-row items-center bg-blue-950 w-[40%] h-[100%] justify-center rounded-xl shadow-md border-2 border-black hover:cursor-pointer duration-300 hover:shadow-lg hover:scale-105 text-black text-2xl font-semibold text-blue-50">
            <AddIcon sx={{ fontSize: "50px" }} /> Add here
          </div>
        </Link>
      </div>
    </div>
  );
}
