const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getBookingByUserID({ token }: { token: string }) {
  const response = await fetch(`${BackendUrl}/booking/id`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Fail to fetch booking");
  }

  return await response.json();
}
