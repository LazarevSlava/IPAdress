import './App.css';
import Search from './components/search_form/Search.jsx';
import Map from './components/map/map.jsx';

const isLoading=true;

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div className='header'>
    <Search onSearch={handleSearch} />
  <Map ip="mmm" location='mmm' timezone='mmm' isp='mmm' isLoading={isLoading}/>
  </div>
)
  }

export default App;
