import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../app/cartSlice';
import { api } from '../../api/axios';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [client, setClient] = useState({
    customerName: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    if (!client.customerName || !client.email || !client.address) {
      alert('Uzupełnij wszystkie dane!');
      return;
    }

    try {
      const payload = {
        ...client,
        items: cart.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          note: item.note || '',
        })),
      };

      await api.post('/orders', payload);
      alert('Zamówienie złożone!');
      dispatch(clearCart());
      setClient({ customerName: '', email: '', address: '' });
    } catch (err) {
      console.error(err);
      alert('Błąd przy składaniu zamówienia!');
    }
  };

  if (cart.length === 0) return <p>Twój koszyk jest pusty.</p>;
  return;
}
