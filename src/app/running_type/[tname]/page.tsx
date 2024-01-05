import FilterType from "@/components/TypePage/FilterType";
import NavBarType from "@/components/NavBarType/NavBarType";
import ShowCard from "@/components/TypePage/ShowCard";
import getEventsByTypes from "@/libs/getEventsByTypes";
import { TypeEvent } from "@/interface";
import { Event } from "@/interface";
import EventType_Data from "@/data/eventType";

export default async function TypePage({
  params,
}: {
  params: { tname: string };
}) {
  let EventByType: Event[] = [];
  let count = 0;

  try {
    EventByType = await getEventsByTypes(params.tname);
    count = EventByType.length;
  } catch (error) {
    EventByType = [];
    count = 0;
  }

  const EventType = EventType_Data.find(
    (e: TypeEvent) => e.link === params.tname
  );

  return (
    <main className="bg-neutral-100 w-full h-[200vh] flex flex-col items-center mt-[70px] text-black py-16">
      <NavBarType />
      <div className="w-[100%] h-[80%] flex flex-col items-center space-y-16">
        <div className="space-y-4 w-[80%] h-[10%] flex flex-row justify-around pt-[50px]">
          <div className="text-black w-full font-bold text-5xl">
            {EventType?.title}
            <div className="text-gray-500 w-[100%] text-2xl font-semibold my-5">
              {EventType?.description}
            </div>
          </div>
          <div className="text-[#8B0000] w-full font-bold text-7xl text-end">
            {count}
            <div className="text-gray-500 w-[100%] text-4xl my-5 inline mx-10 ">
              EVENT
            </div>
          </div>
        </div>
        <div className="h-[70%] w-[80%] flex flex-row justify-center space-x-12">
          <div className="w-[20%] h-[40%] top-[120px] sticky border-2 border-black rounded-xl p-2 bg-white">
            <FilterType />
          </div>
          <div className="w-[80%] h-[100%]">
            <ShowCard Events={EventByType} />
          </div>
        </div>
      </div>
    </main>
  );
}
