const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getUserProfile({ token }: { token: string }) {
  const response = await fetch(`${BackendUrl}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("fail to get user profile");
  }

  return await response.json();
}
