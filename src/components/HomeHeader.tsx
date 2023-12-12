import SearchBar from "./SearchBar";

export default function HomeHeader() {
  return (
    <div className="w-full h-[55vh] flex flex-col justify-center items-center relative">
      <div className="bg-gradient-to-b from-[#CD5C5C] to-[#FA8072] w-full h-[80%] flex justify-center items-center">
        <div className="text-4xl font-bold font-mono">
          Step into the Future: Run, Connect, Conquer!
        </div>
      </div>
      <div className="w-full h-[20%]"></div>
      <SearchBar />
    </div>
  );
}
