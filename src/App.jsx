import './App.css';
import Search from './components/search_form/Search.jsx';
import InfoPanel from './components/InfoPanel/InfoPanel.jsx';
import Leaflet_map from './components/leaflet/Leaflet_map';

const isLoading = false;

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  const coordinates = [51.505, -0.09];
  return (
    <div>
      <div className="header">
        <Search onSearch={handleSearch} />
        <InfoPanel ip="mmm" location="mmm" timezone="mmm" isp="mmm" isLoading={isLoading} />
      </div>
      <Leaflet_map coordinates={coordinates} />
    </div>
  );
}

export default App;
