import style from './button.module.scss';

function Button({ children, onClick }) {
  return (
    <button className={style.request} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
