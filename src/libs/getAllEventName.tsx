import { BackendUrl } from "@/const";

export default async function getAllEventName() {
  const response = await fetch(`${BackendUrl}/event/name`);

  if (!response.ok) {
    throw new Error("Fail to fetch ALL event Name");
  }

  console.log("response all name", response);

  return await response.json();
}
