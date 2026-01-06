import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.pill}>Everything you need in one place.</div>
        <h1 className={styles.title}>
          Welcome to <span>Mr. Gadget</span>.
        </h1>
        <p className={styles.subtitle}>
          Find electronics, accessories, and everyday gadgets for work and home.
        </p>
        
          <Link to='/cart' className={styles.linkReset}>
            <Button variant='ghost'>Go to bag</Button>
          </Link>
        
      </div>
    </div>
  );
}
