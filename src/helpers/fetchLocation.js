const myKey = import.meta.env.VITE_MY_SECRET_KEY;

export async function fetchLocation(ip) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${myKey}&ipAddress=${ip}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
