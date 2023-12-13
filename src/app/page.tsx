import HomeCard from "@/components/HomeCard";
import Banner from "@/components/Banner";
import HomeHeader from "@/components/HomeHeader";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

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

      <main className="bg-neutral-100 w-full h-[150vh] flex flex-col items-center pt-[70px]">
        <HomeHeader />
        <HomeCard />
        <div className="w-[80%] space-y-5">
          <div className="text-black w-full font-bold mt-16 text-4xl">
            HOT EVENT
          </div>
          <div className="text-gray-600">
            "Hit the Pavement, Heat Up Your Run! 🔥 Discover the Hottest Events
            in Town. Don't Miss Out – Book Your Spot Now and Ignite Your Running
            Passion!"
          </div>
        </div>

        <Banner />
      </main>
    </>
  );
}
