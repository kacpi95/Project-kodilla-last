import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  updateNote,
  clearCart,
} from '../../app/cartSlice';
import { api } from '../../api/axios';
import styles from './Cart.module.scss';
import Button from '../../components/common/Button/Button';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [client, setClient] = useState({
    customerName: '',
    email: '',
    address: '',
  });

  const total = useMemo(
    () => cart.reduce((acc, i) => acc + i.price * i.quantity, 0),
    [cart]
  );

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    if (!client.customerName || !client.email || !client.address) {
      alert('Complete all fields!');
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
      alert('Placed orders!');
      dispatch(clearCart());
      setClient({ customerName: '', email: '', address: '' });
    } catch (err) {
      console.error(err);
      alert('Error when placing the order!');
    }
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyWrap}>
        <div className={styles.emptyCard}>
          <h1>Bag</h1>
          <p className={styles.muted}>Your bag is empty.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.cart}>
      <div className={styles.topRow}>
        <h1 className={styles.title}>Bag</h1>
        <button className={styles.clear} onClick={() => dispatch(clearCart())}>
          Clear
        </button>
      </div>
      <div className={styles.layout}>
        <section className={styles.items}>
          {cart.map((item) => (
            <div key={item.productId} className={styles.item}>
              <div className={styles.itemMain}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemPrice}>
                  {item.price} zł <span className={styles.muted}>/ szt.</span>
                </div>
              </div>
              <div className={styles.controls}>
                <input
                  className={styles.input}
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
                  className={styles.input}
                  type='text'
                  placeholder='Product note (optional)'
                  value={item.note || ''}
                  onChange={(e) =>
                    dispatch(
                      updateNote({
                        productId: item.productId,
                        note: e.target.value,
                      })
                    )
                  }
                />
                <button
                  className={styles.remove}
                  onClick={() => dispatch(removeFromCart(item.productId))}
                >
                  Delete
                </button>
              </div>

              <div className={styles.lineTotal}>
                Subtotal:{' '}
                <strong>{Number(item.price) * Number(item.quantity)} zł</strong>
              </div>
            </div>
          ))}
          <div className={styles.summary}>
            Total: {cart.reduce((acc, i) => acc + i.price * i.quantity, 0)} zł
          </div>
        </section>

        <div className={styles.checkout}>
          <div className={styles.panel}>
            <h2 className={styles.panelTitle}>Summary</h2>

            <div className={styles.sumRow}>
              <span>Cart value</span>
              <strong>{total} zł</strong>
            </div>

            <div className={styles.divider} />

            <div className={styles.form}>
              <h3>Contact details</h3>

              <label className={styles.label}>
                Name and surname
                <input
                  name='customerName'
                  placeholder='Name and surname'
                  value={client.customerName}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  name='email'
                  placeholder='Email'
                  value={client.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Address
                <input
                  name='address'
                  placeholder='Address'
                  value={client.address}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              <Button onClick={handleOrder}>Place your order</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
