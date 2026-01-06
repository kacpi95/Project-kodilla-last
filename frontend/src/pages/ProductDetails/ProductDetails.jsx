import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { api } from '../../api/axios';
import { addToCart } from '../../app/cartSlice';
import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        const first = res.data?.image || res.data?.images?.[0]?.url || '';
        setActiveImage(first);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const gallery = useMemo(() => {
    const arr = [];

    if (product?.image) {
      arr.push({ id: 'main', url: product.image });
    }

    if (Array.isArray(product?.images)) {
      product.images.forEach((img) => {
        if (img?.url) {
          arr.push({ id: img.id ?? img.url, url: img.url });
        }
      });
    }

    return arr;
  }, [product]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!product) return <p className={styles.error}>Not found product</p>;

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
    <div className={styles.wrap}>
      <div className={styles.breadcrumbs}>
        <Link to='/' className={styles.crumb}>
          Home
        </Link>
        <span className={styles.sep}>/</span>
        <span className={styles.current}>{product.title}</span>
      </div>

      <div className={styles.layout}>
        <section className={styles.media}>
          <div className={styles.mainImage}>
            <img src={activeImage} alt={product.title} />
          </div>

          {gallery.length > 1 && (
            <div className={styles.gallery}>
              {gallery.map((img) => (
                <button
                  key={img.id}
                  type='button'
                  className={`${styles.thumb} ${
                    img.url === activeImage ? styles.active : ''
                  }`}
                  onClick={() => setActiveImage(img.url)}
                >
                  <img src={img.url} alt={product.title} loading='lazy' />
                </button>
              ))}
            </div>
          )}
        </section>
        <div className={styles.info}>
          <div className={styles.panel}>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.priceRow}>
              <div className={styles.price}>
                {product.price} <span className={styles.currency}>zł</span>
              </div>
              <div className={styles.meta}>brutto</div>
            </div>
            <p className={styles.desc}>{product.description}</p>
            {product.detailedDescription && (
              <div className={styles.detailsBox}>
                <h3>Details</h3>
                <p>{product.detailedDescription}</p>
              </div>
            )}
            <div className={styles.actions}>
              <input
                className={styles.input}
                type='number'
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className={styles.btn} onClick={handleAdd}>
                Add to bag
              </button>
            </div>
            <div className={styles.hints}>
              <div className={styles.hintItem}>
                <span className={styles.dot} />
                Fast shipping
              </div>
              <div className={styles.hintItem}>
                <span className={styles.dot} />
                Safe payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
