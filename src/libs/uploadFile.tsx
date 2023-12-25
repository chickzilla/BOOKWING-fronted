const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function uploadFile(picture: File | null) {
  if (!picture) {
    throw new Error("No file");
  }
  const formData = new FormData();
  formData.append("file", picture);
  const response = await fetch(`${BackendUrl}/event/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error uploading file");
  }

  return await response.json();
}
