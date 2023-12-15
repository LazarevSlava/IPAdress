import style from './infoPanel.module.scss';
import Preloader from '../preloader/Preloader';

const InfoPanel = ({ isLoading, ip, country, timezone, isp }) => {
  return isLoading ? (
    <div className={style.infoPanel}>
      <div className={style.IPAddress}>
        IP ADDRESS
        <h3 className={style.params}>
          <Preloader />
        </h3>
      </div>
      <hr />
      <div className={style.location}>
        LOCATION
        <h3 className={style.params}>
          <Preloader />
        </h3>
      </div>
      <hr />
      <div className={style.timezone}>
        TIMEZONE
        <h3 className={style.params}>
          <Preloader />
        </h3>
      </div>
      <hr />
      <div className={style.ISP}>
        ISP
        <h3 className={style.params}>
          <Preloader />
        </h3>
      </div>
    </div>
  ) : (
    <div className={style.infoPanel}>
      <div className={style.IPAddress}>
        IP ADDRESS
        <h3 className={style.params}>{ip ? ip : '-'}</h3>
      </div>
      <hr />
      <div className={style.location}>
        LOCATION
        <h3 className={style.params}>{country ? country : '-'}</h3>
      </div>
      <hr />
      <div className={style.timezone}>
        TIMEZONE<h3 className={style.params}>{timezone ? timezone : '-'}</h3>
      </div>
      <hr />
      <div className={style.ISP}>
        ISP
        <h3 className={style.params}>{isp ? isp : '-'}</h3>
      </div>
    </div>
  );
};

export default InfoPanel;
