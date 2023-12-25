import { Event } from "@/interface";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function createEvent(Event: Event) {
  const response = await fetch(`${BackendUrl}/event/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Event),
  });
  if (!response.ok) {
    throw new Error("Fail to create event");
  }
  return await response.json();
}
