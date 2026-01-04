import { useDispatch, useParams } from 'react-redux';
import { useState, useEffect } from 'react';
import { api } from '../../api/axios';

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

  return;
}
