import { Link, NavLink } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to='/' className={styles.brand}>
          <span className={styles.logo} />
          <span className={styles.name}>Mr. Gadget</span>
        </Link>

        <form className={styles.search}>
          <Input placeholder='Szukaj produktów…' ariaLabel='Szukaj produktów' />
        </form>

        <nav className={styles.nav}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to='/cart'
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Bag
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
