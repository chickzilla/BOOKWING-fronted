import HomeCard from "@/components/HomeCard/HomeCard";
import Banner from "@/components/Banner/Banner";
import HomeHeader from "@/components/HomeHeader";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Closing from "@/components/Closing/Closing";

export default function Home() {
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </header>

      <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center pt-[70px]">
        <HomeHeader />
        <HomeCard />
        <div className="w-[80%] space-y-5 items-center mt-14 mb-2">
          <div className="text-black w-full font-bold text-4xl">
            Closing Soon EVENT
          </div>
          <div className="text-gray-600">
            "Feel the Rush, Ignite Your Run! 🔥 Grab Your Spot in the Hottest
            Closing Soon Events. Time is Running Out – Secure Your Place Now and
            Fuel Your Running Passion!"
          </div>
        </div>
        <Closing />
        <div className="w-[80%] space-y-5 items-center mt-24 mb-2">
          <div className="text-black w-full font-bold text-4xl text-center">
            Search by Google Map
          </div>
          <div className="text-gray-600">
            "Embark on the Ultimate Adventure – Let's Find Your Event with
            Google Maps! 🗺️ Discover Exciting Running Events Near You. Don't
            Miss Out – Secure Your Spot Now and Navigate Your Way to Running
            Bliss! 🏃‍♂️🌟"
          </div>
        </div>
      </main>
    </>
  );
}
