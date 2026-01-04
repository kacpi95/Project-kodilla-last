import { useDispatch, useParams } from 'react-redux';
import { useState, useEffect } from 'react';
import { api } from '../../api/axios';
import { addToCart } from '../../app/cartSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Ładowanie...</p>;
  if (!product) return <p>Nie znaleziono produktu</p>;

  const handleAdd = () => {
    dispatch(
      addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        quantity,
      })
    );
  };

  return (
    <div>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} />

      <p>{product.description}</p>
      <strong>{product.price} zł</strong>

      <div>
        <input
          type='number'
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAdd}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}
