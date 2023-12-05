import './App.css';
import Search from './components/search_form/Search.jsx';
import InfoPanel from './components/InfoPanel/InfoPanel.jsx';
import LeafletMap from './components/leaflet/LeafletMap';

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
      <LeafletMap coordinates={coordinates} />
    </div>
  );
}

export default App;
