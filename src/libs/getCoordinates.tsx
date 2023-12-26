import { Coordinates } from "@/interface";

const mapboxApiKey = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const endpoint = "mapbox.places";

//const searchText = "21000, Mueang Rayong, Rayong, Thailand";
//const encodedSearchText = encodeURIComponent(searchText);

//console.log(encodedSearchText);

export default async function getCoordinates(address: string) {
  const search_text = encodeURIComponent(address);
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?access_token=${mapboxApiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates.");
  }

  return await response.json();
}
