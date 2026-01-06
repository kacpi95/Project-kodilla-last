import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../app/productsSlice';
import { addToCart } from '../../app/cartSlice';
import styles from '../Home/Home.module.scss';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Błąd: {error}</p>;

  const handleAdd = (product) => {
    dispatch(
      addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className={styles.homeContainer}>
      <Hero />
      <h1>Products</h1>
      <div className={styles.productsGrid}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>
    </div>
  );
}
