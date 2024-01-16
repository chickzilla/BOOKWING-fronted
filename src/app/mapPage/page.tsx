"use client";

import MapAllLocation from "@/components/GGMap/MapAllLocation";
import MapAllCard from "@/components/GGMap/MapAllCard";
import { useEffect, useState } from "react";
import getAllEvent from "@/libs/getAllEvent";
import getAllLocation from "@/libs/getAllLocation";

export default function MapPage() {
  const [eventDetailId, setEventDetailId] = useState<string | null>(null);
  const [eventDetailData, setEventDetailData] = useState([]);

  useEffect(() => {
    const fetchAllEvent = async () => {
      try {
        if (eventDetailData.length > 0) return;
        const data = await getAllLocation();
        setEventDetailData(data);
      } catch (error) {}
    };
    fetchAllEvent();
  }, []);

  return (
    <main className="bg-neutral-100 w-[100vw] h-[100vh] pt-[70px]">
      <div className="w-[100%] h-[100%]">
        <MapAllCard EventId={eventDetailId} />

        <MapAllLocation
          AllEvent={eventDetailData}
          onMarckerClicked={(e: string) => setEventDetailId(e)}
        />
      </div>
    </main>
  );
}
