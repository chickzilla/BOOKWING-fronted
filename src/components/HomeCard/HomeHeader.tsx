import SearchBar from "./SearchBar";

export default function HomeHeader() {
  return (
    <div className="w-full h-[40vh] flex flex-col bg-gradient-to-b from-[#B22222] dark:from-gray-900 dark:to-black to-[#FA8072] space-y-12 pt-12">
      <div className="text-5xl font-bold font-mono text-center justify-center h-[18%] w-full items-center flex mt-5">
        Find. Book. Run. Repeat.
      </div>
      <div className="w-full h-[20%] justify-center flex">
        <SearchBar />
      </div>
    </div>
  );
}
