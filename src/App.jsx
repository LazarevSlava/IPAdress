import './App.css';
import Search from './components/search_form/Search';
import Map from './components/map/map';

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="header">
      <Search onSearch={handleSearch} />
      <Map />
    </div>
  );
}

export default App;
