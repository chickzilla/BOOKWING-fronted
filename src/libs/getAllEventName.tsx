//import { BackendUrl } from "@/const";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getAllEventName() {
  const response = await fetch(`${BackendUrl}/event/name`, {
    next: { tags: ["events"] },
    cache: "no-store",
  });
  //console.log("backend url", BackendUrl);

  if (!response.ok) {
    throw new Error("Fail to fetch ALL event Name");
  }

  //console.log("response all name", response);

  return await response.json();
}
