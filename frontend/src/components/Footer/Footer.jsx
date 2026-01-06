import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.dot} />
        <strong>Mr. Gadget</strong>
        <span className={styles.sep}>•</span>
        <span className={styles.muted}>E-commerce</span>
        <span className={styles.muted}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
