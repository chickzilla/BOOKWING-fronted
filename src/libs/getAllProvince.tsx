export default async function getAllProvince() {
  const response = await fetch(
    `https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates.");
  }

  return await response.json();
}
