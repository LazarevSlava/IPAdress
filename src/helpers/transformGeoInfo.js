/**
 * geoData - {object}
 * ip: string
 * isp: string
 * location - {object Location}
 * * city: string
 * * country: string
 * * geonameId: number
 * * lat: number
 * * lng: number
 * * postalCode: string
 * * region: string
 * * timezone: string
 */
export function transformGeoInfo(geoData) {
  return {
    ip: geoData.ip,
    isp: geoData.isp,
    timezone: geoData.location.timezone,
    country: geoData.location.country,
    coordinates: [geoData.location.lat, geoData.location.lng],
  };
}
