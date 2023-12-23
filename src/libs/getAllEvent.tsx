import { BackendUrl } from "@/const";

export default async function getAllEvent() {
  const response = await fetch(`${BackendUrl}/event`);

  if (!response.ok) {
    throw new Error("Fail to fetch ALL event");
  }
  console.log("response", response);

  return await response.json();
}
