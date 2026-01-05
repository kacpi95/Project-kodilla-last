import styles from './Input.module.scss';

export default function Input({ value, onChange, placeholder, ariaLabel }) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
    />
  );
}
