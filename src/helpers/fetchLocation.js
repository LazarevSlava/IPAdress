const myKey = 'at_vEhT0ZnWw5eYL3XlfArBnWieonjhS';

export async function fetchLocation(ip) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${myKey}&ipAddress=${ip}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
