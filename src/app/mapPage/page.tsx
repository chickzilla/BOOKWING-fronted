"use client";
import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  Popup,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef, useMemo, useCallback } from "react";
import mapboxgl from "mapbox-gl";

export default function MapPage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const mapStyle = {
    width: "100%",
    height: "400vh",
  };

  const markerRef = useRef<mapboxgl.Marker>();

  return (
    <main className="bg-neutral-100 w-full h-[400vh] pt-[70px]">
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          latitude: 13.7563, // Latitude of Bangkok
          longitude: 100.5018, // Longitude of Bangkok
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}
        style={mapStyle}
      >
        <FullscreenControl position="top-right" />
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        <Marker
          longitude={100.5018}
          latitude={13.7653}
          color="red"
          onClick={(e) => alert("Hello")}
        ></Marker>
        <Marker longitude={101} latitude={14} color="red"></Marker>
      </Map>
    </main>
  );
}
