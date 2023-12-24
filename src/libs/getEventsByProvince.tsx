import { BackendUrl } from "@/const";

export default async function getEventsByProvince(province: string) {
  const response = await fetch(
    `${BackendUrl}/event/province?province=${province}`
  );
  if (!response.ok) {
    throw new Error("Fail to fetch event by province");
  }

  return await response.json();
}
