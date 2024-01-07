import { Event } from "@/interface";
import { getCookie } from "typescript-cookie";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const Token = getCookie("jwt");

export default async function createEvent(Event: Event) {
  const response = await fetch(`${BackendUrl}/event/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },

    body: JSON.stringify(Event),
  });
  if (!response.ok) {
    throw new Error("Fail to create event");
  }
  return await response.json();
}
