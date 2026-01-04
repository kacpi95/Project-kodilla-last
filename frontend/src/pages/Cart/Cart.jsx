import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  updateNote,
  clearCart,
} from '../../app/cartSlice';
import { api } from '../../api/axios';
import styles from './Cart.module.scss';

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

  if (cart.length === 0)
    return <p className={styles.empty}>Twój koszyk jest pusty.</p>;

  return (
    <div className={styles.cartContainer}>
      <h1>Koszyk</h1>
      {cart.map((item) => (
        <div key={item.productId} className={styles.cartItem}>
          <h3>{item.title}</h3>
          <p>Cena: {item.price} zł</p>
          <input
            type='number'
            value={item.quantity}
            min={1}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  productId: item.productId,
                  quantity: Number(e.target.value),
                })
              )
            }
          />
          <input
            type='text'
            placeholder='Notatka'
            value={item.note || ''}
            onChange={(e) =>
              dispatch(
                updateNote({ productId: item.productId, note: e.target.value })
              )
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.productId))}>
            Usuń
          </button>
        </div>
      ))}

      <div className={styles.summary}>
        Łączna kwota: {cart.reduce((acc, i) => acc + i.price * i.quantity, 0)}{' '}
        zł
      </div>

      <div className={styles.contactForm}>
        <h2>Dane kontaktowe:</h2>
        <input
          name='customerName'
          placeholder='Imię i nazwisko'
          value={client.customerName}
          onChange={handleChange}
        />
        <input
          name='email'
          placeholder='Email'
          value={client.email}
          onChange={handleChange}
        />
        <input
          name='address'
          placeholder='Adres'
          value={client.address}
          onChange={handleChange}
        />
        <button onClick={handleOrder}>Złóż zamówienie</button>
      </div>
    </div>
  );
}
