import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import style from './leaflet.module.scss';
import { Icon } from 'leaflet';
import MarkerIcon from '../../assets/images/marker-icon.png';
import ShadowIcon from '../../assets/images/marker-shadow.png';

const LeafletMap = (props) => {
  const customIcon = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    shadowUrl: ShadowIcon,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

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
      <Marker position={props.coordinates} icon={customIcon} />
    </MapContainer>
  );
};

export default LeafletMap;
