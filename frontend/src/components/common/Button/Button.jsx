import styles from './Button.module.scss';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className={`${styles.btn}`}>
      {children}
    </button>
  );
}
