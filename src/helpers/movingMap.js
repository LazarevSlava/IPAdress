import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export function MovingMap({ geoInfo }) {
  const map = useMap();

  useEffect(() => {
    if (geoInfo) {
      map.flyTo(geoInfo, 13, {
        duration: 3,
        easeLinearity: 0.5,
        noMoveStart: true,
      });
    }
  }, [geoInfo, map]);

  return null;
}
