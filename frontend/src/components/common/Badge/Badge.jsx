import styles from './Badge.module.scss';

export default function Badge({ children, className = '' }) {
  return <span className={`${styles.badge} ${className}`}>{children}</span>;
}
