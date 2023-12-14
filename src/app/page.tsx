import HomeCard from "@/components/HomeCard/HomeCard";
import HomeHeader from "@/components/HomeCard/HomeHeader";
import MapHome from "@/components/GGMap/MapHome";
import ClosingMain from "@/components/Closing/ClosingMain";

export default function Home() {
  return (
    <>
      <header></header>

      <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center pt-[70px]">
        <HomeHeader />
        <HomeCard />
        <MapHome />
        <ClosingMain />
      </main>
    </>
  );
}
