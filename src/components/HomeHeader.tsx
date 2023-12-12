import SearchBar from "./SearchBar";

export default function HomeHeader() {
  return (
    <div className="w-full h-[25%] flex flex-col justify-around items-center bg-gradient-to-b from-[#CD5C5C] to-[#FA8072]">
      <div className="text-6xl font-bold font-mono flex flex-row items-center text-center justify-center h-[70%] w-full">
        Find. Book. Run. Repeat.
      </div>
      <div className="w-full h-[70%] justify-center flex">
        <SearchBar />
      </div>
    </div>
  );
}
