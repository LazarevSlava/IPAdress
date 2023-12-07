import './App.css';
import LeafletMap from './components/leaflet/LeafletMap';
import Header from './components/header/Header';
const isLoading = false;

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  const coordinates = [51.505, -0.09];
  return (
    <div>
      <Header
        ip="mmm"
        location="mmm"
        timezone="mmm"
        isp="mmm"
        isLoading={isLoading}
        onSearch={handleSearch}
      />
      <LeafletMap coordinates={coordinates} />
    </div>
  );
}

export default App;
