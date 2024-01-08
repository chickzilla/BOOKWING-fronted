const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function changeRoleOrganizer(token: string) {
  const response = await fetch(`${BackendUrl}/auth/changerole`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Fail to change role");
  }

  return await response.json();
}
