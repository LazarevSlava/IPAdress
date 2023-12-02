import './App.css';
import Search from './components/search_form/Search.jsx';
import Map from './components/map/map.jsx';
import Leaflet_map from './components/leaflet/Leaflet_map';

const isLoading = false;

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="header">
        <Search onSearch={handleSearch} />
        <Map ip="mmm" location="mmm" timezone="mmm" isp="mmm" isLoading={isLoading} />
      </div>
      <Leaflet_map />
    </div>
  );
}

export default App;
