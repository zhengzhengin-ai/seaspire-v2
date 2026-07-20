import { company } from "@/data";
import styles from "@/styles/Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.left}>

          <h2>{company.name}</h2>

          <p className={styles.tagline}>
            {company.tagline}
          </p>

        </div>


        <div className={styles.right}>

          <div className={styles.contactRow}>

            <p>
              <strong>Email</strong>
              {company.contact.email}
            </p>


            <p>
              <strong>Tel</strong>
              {company.contact.phone}
            </p>

          </div>


          <p className={styles.address}>

            <strong>Address</strong>

            {company.address.full}

          </p>

        </div>


      </div>


      <div className={styles.copyright}>

        © 2026 {company.name}. All Rights Reserved.

      </div>


    </footer>
  );
}