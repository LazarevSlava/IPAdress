import './App.css'
import Search from './components/Search.jsx';

function App() {
  const handleSearch = (value) => {
    console.log(value);
    

  };
  return (
    <Search onSearch={handleSearch} />
  )
}

export default App
