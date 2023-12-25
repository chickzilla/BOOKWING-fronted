import CollapseComp from "../Filter/collapseComp";
export default function FilterType() {
  return (
    <div className="w-[100%] h[100%] z-20 items-center flex flex-col text-black px-5 space-y-0">
      <div className="font-semibold text-2xl w-[100%] text-center mt-10 mb-5">Filter</div>
      <div className="w-[100%] "><CollapseComp filterName = "Province"/></div>
      <div className="w-[100%] "><CollapseComp filterName = "Price"/></div>
      {/* <div className="text-gray-500 text-start w-[100%]">Province</div> */}
    </div>
  );
}
