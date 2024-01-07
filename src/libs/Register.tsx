const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// firstname, lastname, email, username, password
export default async function Register({
  firstname,
  lastname,
  email,
  username,
  password,
}: {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}) {
  const response = await fetch(`${BackendUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("fail to register. Try again with new Username");
  }
  return await response.json();
}
