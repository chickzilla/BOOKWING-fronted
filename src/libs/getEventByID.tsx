//import { BackendUrl } from "@/const";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getEventByID(id: string) {
  const response = await fetch(`${BackendUrl}/event/id?id=${id}`, {});
  //console.log("backend url", BackendUrl);

  if (!response.ok) {
    throw new Error("Fail to fetch Event by ID");
  }

  return await response.json();
}
