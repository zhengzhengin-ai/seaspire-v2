import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.left}>

          <h2>SEASPIRE PHUKET</h2>

          <p className={styles.tagline}>
            Premium Seafood Supplier from Phuket, Thailand
          </p>

        </div>

        <div className={styles.right}>

          <div className={styles.contactRow}>

            <p>
              <strong>Email</strong>
              info@seaspirephuket.com
            </p>

            <p>
              <strong>Tel</strong>
              +66 76 222 977
            </p>

          </div>

          <p className={styles.address}>
            <strong>Address</strong>
            64/222 Moo.7 T.Rasada, A. Muang, Phuket 83000, Thailand
          </p>

        </div>

      </div>

      <div className={styles.copyright}>
        © 2026 Seaspire Phuket Co., Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}