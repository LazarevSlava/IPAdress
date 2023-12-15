import { useState } from 'react';
import './App.css';
import LeafletMap from './components/leaflet/LeafletMap';
import Header from './components/header/Header';
import { fetchLocation } from './helpers/fetchLocation';
import { transformGeoInfo } from './helpers/transformGeoInfo';

const initialGeoInfo = {
  ip: '',
  isp: '',
  country: '',
  timezone: '',
  coordinates: [51.505, -0.09],
};
const regExpIp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;

function App() {
  const [isLoading, setLoading] = useState(false);
  const [geoInfo, setGeoInfo] = useState(initialGeoInfo);
  // const [error, setError] = useState(null);
  console.log(geoInfo);

  const handleSearch = async (newSearchTerm) => {
    if (!regExpIp.test(newSearchTerm)) {
      alert('IP address is not correct');

      return;
    }
    setLoading(true);

    try {
      const data = await fetchLocation(newSearchTerm);

      // fetchLocation(newSearchTerm).then(res => {}).catch(err => {})
      const newGeoInfo = transformGeoInfo(data);
      setGeoInfo(newGeoInfo);
    } catch (error) {
      // setError(error);
      console.error(this.state.error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header isLoading={isLoading} data={geoInfo} onSearch={handleSearch} />
      <LeafletMap coordinates={geoInfo.coordinates} />
    </div>
  );
}

export default App;
