import { useState } from 'react';
import Button from '../button/Button.jsx';

function Search(props) {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    if (props.onSearch) {
      props.onSearch(inputValue);
    }
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder={'Search for any IP address or domain'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleButtonClick}>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </Button>
    </div>
  );
}

export default Search;
