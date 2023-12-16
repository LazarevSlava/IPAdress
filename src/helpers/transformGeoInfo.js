export function transformGeoInfo(geoData) {
  return {
    ip: geoData.ip,
    isp: geoData.isp,
    timezone: geoData.location.timezone,
    country: geoData.location.country,
    coordinates: [geoData.location.lat, geoData.location.lng],
  };
}
