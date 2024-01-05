import Map, { Marker } from "react-map-gl";
export default function MapDetail() {
  return (
    <div className="w-[70%] h-[60vh] space-y-5">
      <h1 className="text-black text-2xl font-bold pb-2">Location 🗺️</h1>

      <div className="w-[100%] h-[90%] text-black overflow-hidden">
        <Map
          initialViewState={{
            latitude: 13.7563123456123, // Latitude of Bangkok
            longitude: 100.5018123456123, // Longitude of Bangkok
            zoom: 10,
          }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          {/* <Marker
                        longitude= {100.5018123456123}
                        latitude= {13.7563123456123}
                        color="red"

                    /> */}
          <Marker latitude={13.7563} longitude={100.5018}>
            <div style={{ color: "red", fontSize: "20px" }}>📍</div>
          </Marker>
        </Map>
      </div>
    </div>
  );
}
