//import { BackendUrl } from "@/const";
const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getAllEvent() {
  const response = await fetch(`${BackendUrl}/event`, {
    next: { tags: ["events"] },
  });
  //console.log("backend url", BackendUrl);

  if (!response.ok) {
    throw new Error("Fail to fetch ALL event");
  }
  console.log("response", response);

  return await response.json();
}
