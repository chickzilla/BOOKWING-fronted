import { BackendUrl } from "@/const";

export default async function getEventByID(id: string) {
  const response = await fetch(`${BackendUrl}/event/id?id=${id}`);

  if (!response.ok) {
    throw new Error("Fail to fetch Event by ID");
  }

  return await response.json();
}
