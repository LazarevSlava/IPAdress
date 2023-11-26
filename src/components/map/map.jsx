import style from './map.module.scss';


 const Map = (props) => {
  return (
    <div className={style.infoPanel}>
      <div className={style.IPAddress}>
        IP ADDRESS<h3 className={style.params}>
          {props.ip}</h3></div>
      <hr />
      <div className={style.location}>LOCATION
      <h3 className={style.params}>
          {props.location}</h3></div>
      <hr />
      <div className={style.timezone}>TIMEZONE<h3 className={style.params}>
          {props.timezone}</h3>
          </div>
      <hr />
      <div className={style.ISP}>ISP
      <h3 className={style.params}>
          {props.isp}</h3></div>
    </div>
  );
};

export default Map;
