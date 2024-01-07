import { revalidateTag } from "next/cache";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function deleteEvent({
  id,
  token,
}: {
  id: string;
  token: string;
}) {
  const response = await fetch(`${BackendUrl}/event/delete?id=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("status", response.status);
    throw new Error("fail to delete event");
  }

  return await response.json();
}
