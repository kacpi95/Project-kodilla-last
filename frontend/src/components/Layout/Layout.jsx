import Header from '../Header/Header';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.cover}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
