import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <span className={styles.pill}>Mr. Gadget</span>
        <h1>
          O projekcie <span>e-commerce</span>
        </h1>
        <p className={styles.subtitle}>
          Front-endowy projekt sklepu internetowego zbudowany w React.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>Cel projektu</h2>
          <p>
            Celem było stworzenie nowoczesnego interfejsu sklepu internetowego.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Technologie</h2>
          <ul>
            <li>React + React Router</li>
            <li>Redux</li>
            <li>SCSS Modules</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Zakres</h2>
          <p>
            Projekt obejmuje stronę główną z listą produktów, widok pojedynczego
            produktu, koszyk oraz formularz składania zamówienia.
          </p>
        </div>
      </section>
    </div>
  );
}
