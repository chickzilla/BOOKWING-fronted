"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Map, { Marker } from "react-map-gl";
export default function MapDetail({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState(resolvedTheme);
  useEffect(() => {
    if (resolvedTheme === "dark") {
      setTheme("mapbox://styles/mapbox/navigation-night-v1");
    } else {
      setTheme("mapbox://styles/mapbox/streets-v12");
    }
  }, [resolvedTheme]);

  const [useLatitude, setUseLatitude] = useState(latitude);
  const [useLongitude, setUseLongitude] = useState(longitude);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 8,
  });

  useEffect(() => {
    setViewport({
      latitude: useLatitude,
      longitude: useLongitude,
      zoom: 8,
    });
  }, [useLatitude, useLongitude]);

  return (
    <div className="w-[70%] h-[60vh] space-y-5">
      <h1 className="text-black dark:text-gray-200 text-2xl font-bold pb-2">
        Location 🗺️
      </h1>

      <div className="w-[100%] h-[90%] text-black overflow-hidden">
        <Map
          initialViewState={{
            latitude: 15.87,
            longitude: 100.9925,
            zoom: 6,
          }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          mapStyle={theme}
        >
          {/*<Marker longitude={latitude} latitude={longitude} color="red" />*/}
          <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
            <div style={{ color: "red", fontSize: "20px" }}>📍</div>
          </Marker>
        </Map>
      </div>
    </div>
  );
}
