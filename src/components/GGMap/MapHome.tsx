import Link from "next/link";

export default function MapHome() {
  return (
    <div className="w-[80%] h-[25vh] space-y-5 space-x-12 items-start mt-24 mb-10 flex flex-row">
      <div className="space-y-12 w-[50%]">
        <div className="text-black w-full font-bold text-4xl text-start">
          Search by Google Map
        </div>
        <div className="text-gray-600 w-[100%]">
          "Embark on the Ultimate Adventure – Let's Find Your Event with Google
          Maps! 🗺️ Discover Exciting Running Events Near You. Don't Miss Out –
          Secure Your Spot Now and Navigate Your Way to Running Bliss! 🏃‍♂️🌟"
        </div>
      </div>
      <div className="h-[100%] w-[50%] items-center text-center flex justify-center">
        <Link
          href="/mapPage"
          className="h-[100%] w-[100%] items-center text-center flex justify-center"
        >
          <div className="flex flex-row items-center bg-white w-[60%] h-[80%] justify-center px-5 rounded-xl shadow-md border-2 border-black hover:cursor-pointer duration-300 hover:shadow-lg hover:scale-105 text-black text-2xl font-semibold">
            🗺️ View Map
          </div>
        </Link>
      </div>
    </div>
  );
}
