import './App.css';
import Search from './components/search_form/Search.jsx';

function App() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return <Search onSearch={handleSearch} />;
}

export default App;
