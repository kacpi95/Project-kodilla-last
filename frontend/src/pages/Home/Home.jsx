import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../app/productsSlice';
import { addToCart } from '../../app/cartSlice';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd: {error}</p>;

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
    <div>
      <h1>Produkty</h1>
      <div>
        {items.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>{product.price} zł</strong>
            <button onClick={() => handleAdd(product)}>Dodaj do koszyka</button>
          </div>
        ))}
      </div>
    </div>
  );
}
