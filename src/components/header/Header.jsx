import style from './header.module.scss';
import InfoPanel from '../InfoPanel/InfoPanel';
import Search from '../search_form/Search';

function Header({ onSearch, isLoading, data }) {
  return (
    <div className={style.finder}>
      <h1 className={style.title}>IP Address Tracker</h1>
      <Search onSearch={onSearch} />
      <InfoPanel {...data} isLoading={isLoading} />
    </div>
  );
}

export default Header;
