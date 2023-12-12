import HomeCardItem from "./HomeCardItem";

export default function HomeCard() {
  return (
    <div className="px-2 py-2 mx-auto bg-white rounded-xl shadow-md flex flex-row items-center justify-center space-x-4 w-[70%] h-[15%]">
      <HomeCardItem />
      <HomeCardItem />
      <HomeCardItem />
      <HomeCardItem />
    </div>
  );
}
