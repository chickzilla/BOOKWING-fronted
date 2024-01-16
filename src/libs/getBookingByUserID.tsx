const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getBookingByUserID(token: string, uid: string) {
  const response = await fetch(
    `${BackendUrl}/booking/id?id=0libJEnT7EMnzFRxjeDR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Fail to fetch booking");
  }

  return await response.json();
}
