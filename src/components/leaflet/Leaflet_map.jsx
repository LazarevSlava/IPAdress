import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import style from './leaflet.module.scss';

const Leaflet_map = (props) => {
  return (
    <MapContainer
      className={style.mapCont}
      center={props.coordinates}
      zoom={13}
      scrollWheelZoom={false}
      l
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.coordinates} />
    </MapContainer>
  );
};

export default Leaflet_map;
