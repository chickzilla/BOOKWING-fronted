//import { BackendUrl } from "@/const";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getAllLocation() {
  const response = await fetch(`${BackendUrl}/event/location`);
  console.log("backend url", BackendUrl);

  if (!response.ok) {
    throw new Error("Fail to fetch ALL location");
  }
  console.log("response", response);

  return await response.json();
}
