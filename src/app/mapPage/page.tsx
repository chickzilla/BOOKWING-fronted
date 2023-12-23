import MapAllLocation from "@/components/GGMap/MapAllLocation";
import MapAllCard from "@/components/GGMap/MapAllCard";
import eventDetail from "@/data/eventsDetail";

const eventDetailData = eventDetail;

export default function MapPage() {
  return (
    <main className="bg-neutral-100 w-[100vw] h-[100vh] pt-[70px]">
      <div className="w-[100%] h-[100%]">
        <MapAllCard />

        <MapAllLocation AllEvent={eventDetailData} />
      </div>
    </main>
  );
}
