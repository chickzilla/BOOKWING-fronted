import { BackendUrl } from "@/const";

export default async function getEventsByTypes(type: string) {
  const response = await fetch(`${BackendUrl}/event/type?type=${type}`);
  if (!response.ok) {
    throw new Error("Fail to fetch event by type");
  }

  return await response.json();
}
