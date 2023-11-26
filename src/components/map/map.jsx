import style from './map.module.scss';

const Map = () => {
  return (
    <div className={style.infoPanel}>
      <div className={style.IPAddress}>IP ADDRESS</div>
      <hr />
      <div className={style.location}>LOCATION</div>
      <hr />
      <div className={style.timezone}>TIMEZONE</div>
      <hr />
      <div className={style.ISP}>ISP</div>
    </div>
  );
};

export default Map;
