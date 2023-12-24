//import { BackendUrl } from "@/const";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getEventsByTypes(type: string) {
  //console.log("backend url", BackendUrl);

  const response = await fetch(`${BackendUrl}/event/type?type=${type}`, {
    cache: "no-store",
    next: { tags: ["events"] },
  });
  if (!response.ok) {
    throw new Error("Fail to fetch event by type");
  }
  console.log("response ALL PROVINCE", response);

  return await response.json();
}
