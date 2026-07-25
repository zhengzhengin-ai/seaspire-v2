import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>SEASPIRE PHUKET</h2>

          <p>
            The Freshness from Phuket, Thailand
          </p>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>

          <p>info@seaspirephuket.com</p>

          <p>64/222 Moo.7 T.Rasada</p>

          <p>A. Muang, Phuket 83000, Thailand</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2026 Seaspirephuket. All Rights Reserved.
      </div>
    </footer>
  );
}