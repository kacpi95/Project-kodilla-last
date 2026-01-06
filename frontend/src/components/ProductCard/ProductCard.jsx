import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './ProductCard.module.scss';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.media}>
        <img src={product.image} alt={product.title} loading='lazy' />
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/product/${product.id}`} className={styles.titleLink}>
            {product.title}
          </Link>
        </h3>

        <p className={styles.desc}>{product.description}</p>

        <div className={styles.bottom}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>{product.price} zł</span>
            <span className={styles.vat}>brutto</span>
          </div>

          <Button onClick={() => onAdd(product)}>Dodaj</Button>
        </div>
      </div>
    </article>
  );
}
