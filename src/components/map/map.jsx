import './App.css';
import Search from './components/search_form/Search.jsx';
import Map from './components/map/map.jsx';

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="header">
      <Search onSearch={handleSearch} />
      <Map ip="mmm" location="mmm" timezone="mmm" isp="mmm" />
    </div>
  );
}

export default App;
