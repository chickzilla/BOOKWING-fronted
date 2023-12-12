import HomeCardItem from "./HomeCardItem";

export default function HomeCard() {
  return (
    <div className="px-2 py-2 mx-auto mt-10 bg-white rounded-xl shadow-md flex flex-row items-center justify-center space-x-4 w-[75%] h-[10%] border-2 border-black">
      <HomeCardItem />
      <HomeCardItem />
      <HomeCardItem />
      <HomeCardItem />
    </div>
  );
}
