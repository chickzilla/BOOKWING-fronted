import CollapseComp from "../Filter/collapseComp";
import { ThailandProvince } from "@/data/province";
export default function FilterType() {
  return (
    <div className="w-[100%] h-[100%] z-20 items-center flex flex-col text-black dark:text-gray-200 px-5 space-y-0 overflow-hidden">
      <div className="font-semibold text-2xl w-[100%] text-center mt-10 mb-5">
        Filter
      </div>

      <div className="w-[100%] h-[100%] overflow-scroll">
        <div className="w-[100%] ">
          <CollapseComp filterName="Province" filterArray={ThailandProvince} />
        </div>
        <div className="w-[100%] ">
          <CollapseComp
            filterName="Price"
            filterArray={["fsdafgs", "fgsdgsdfg", "fdasfgdsfg"]}
          />
        </div>
        <div className="w-[100%] ">
          <CollapseComp
            filterName="Price"
            filterArray={["fsdafgs", "fgsdgsdfg", "fdasfgdsfg"]}
          />
        </div>
        <div className="w-[100%] ">
          <CollapseComp
            filterName="Price"
            filterArray={["fsdafgs", "fgsdgsdfg", "fdasfgdsfg"]}
          />
        </div>
      </div>
    </div>
  );
}
