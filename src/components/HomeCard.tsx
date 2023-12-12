import HomeCardItem from "./HomeCardItem";

export default function HomeCard() {
  return (
    <div className="px-2 py-2 mx-auto mt-10 bg-white rounded-xl shadow-md flex flex-row items-center justify-center space-x-4 w-[75%] h-[12%] border-2 border-black">
      <HomeCardItem title="Fun Run" description="<= 5 km" />
      <HomeCardItem title=" Mini Marathon" description="10.5 km" />
      <HomeCardItem title="Half Marathon" description="21 km" />
      <HomeCardItem title="Full Marathon" description="42 km" />
      <HomeCardItem title="Trail Running" description="" />
    </div>
  );
}
