import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.cover}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
