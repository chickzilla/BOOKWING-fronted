import Home from "@/app/page";
import HomeCard from "./HomeCard";

export default function HomeCardWithText() {
  return (
    <div className="w-[80%] space-y-5 items-center mt-14 mb-2 h-[25vh]">
      <div className="text-black w-full font-bold text-4xl h-[20%]">
        Find by running types
      </div>
      <div className="text-gray-600">
        "Accelerate your running journey! 🚀 Browse our catalog to discover a
        variety of upcoming events tailored to your favorite running types. "
      </div>
      <HomeCard />
    </div>
  );
}
