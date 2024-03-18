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
      <main className="bg-neutral-100 dark:bg-gray-900 w-full flex flex-col items-center pt-[70px]">
        <HomeHeader />
        <HomeCardWithText />
        <MapHome />
        <ClosingMain />
        <div className="w-full flex flex-col items-center bg-gradient-to-b from-neutral-100 dark:from-gray-900 dark:to-indigo-950 to-[#FFC5C0] pt-10">
          <CreateHome />
          <HomeSlogan />
          <PictureSlogan />
        </div>
      </main>
    </>
  );
}
