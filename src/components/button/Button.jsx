import style from './button.module.scss';

function Button({ children, onClick, className = '' }) {
  return (
    // <button className={style.request} onClick={onClick}>
    <button className={`${style.request} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
