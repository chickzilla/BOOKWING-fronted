export default async function getSubProvince(province_id: string) {
  const response = await fetch(
    `https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates.");
  }

  const data = await response.json();
  const result = data.filter((item: any) => item.province_id == province_id);

  return result;
}
