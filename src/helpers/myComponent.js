// import { useMapEvent } from 'react-leaflet/hooks';

// export function MyComponent({ geoInfo }) {
//   const map = useMapEvent('moveend', () => {
//     if (geoInfo) {
//       map.setView(geoInfo, map.getZoom());
//     }
//   });

//   return null;
// }

// export function MyComponent({ geoInfo }) {
//   const map = useMapEvent(() => {
//     map.setView(geoInfo.centre.getZoom());
//   });

//   return null;
// }

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export function MyComponent({ geoInfo }) {
  const map = useMap();

  useEffect(() => {
    if (geoInfo) {
      map.setView(geoInfo, map.getZoom());
    }
  }, [geoInfo, map]);

  return null;
}
