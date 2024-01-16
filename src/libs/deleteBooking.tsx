const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function deleteBooking(id: string, token: string) {
  const response = await fetch(`${BackendUrl}/booking/delete?id=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Fail to delete booking");
  }
  return await response.json();
}
