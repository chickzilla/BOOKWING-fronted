const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function Login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const response = await fetch(`${BackendUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("รักพ่อ ร.10");
  }
  return await response.json();
}
