import SearchBar from "@/components/SearchBar";
import HomeCard from "@/components/HomeCard";
import Banner from "@/components/Banner";
import HomeHeader from "@/components/HomeHeader";

export default function Home() {
  return (
    <main className="bg-neutral-100 w-full h-[150vh] flex flex-col items-center pt-[70px]">
      <HomeHeader />
      <HomeCard />
      <Banner />
    </main>
  );
}
