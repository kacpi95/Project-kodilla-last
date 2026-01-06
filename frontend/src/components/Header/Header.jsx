import { Link, NavLink } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Input from '../common/Input/Input';
import Badge from '../common/Badge/Badge';
import styles from './Header.module.scss';

export default function Header() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const count = useMemo(
    () => cartItems.reduce((sum, it) => sum + (it.quantity || 0), 0),
    [cartItems]
  );

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
            {count > 0 && <Badge className={styles.badge}>{count}</Badge>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
