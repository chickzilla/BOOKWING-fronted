import HomeHeader from "@/components/HomeCard/HomeHeader";
import MapHome from "@/components/GGMap/MapHome";
import ClosingMain from "@/components/Closing/ClosingMain";
import HomeCardWithText from "@/components/HomeCard/HomeCardWithText";
import HomeSlogan from "@/components/AboutUs/HomeSlogan";
import PictureSlogan from "@/components/AboutUs/PictureSlogan";
import CreateHome from "@/components/CreateEvent/CreateHome";

export default function Home() {
  return (
    <>
      <header></header>

      <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center pt-[70px]">
        <HomeHeader />
        <HomeCardWithText />
        <MapHome />
        <ClosingMain />
        <CreateHome />
        <HomeSlogan />
        <PictureSlogan />
      </main>
    </>
  );
}
