import { company } from "@/data";

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const primaryLocation = company.locations[0];

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

              <a href={`mailto:${company.email}`}>
                {company.email}
              </a>

            </p>

            <p>

              <strong>Tel</strong>

              <a href={`tel:${primaryLocation.phone}`}>
                {primaryLocation.phone}
              </a>

            </p>

          </div>

          <address className={styles.address}>

            <strong>
              {primaryLocation.name}
            </strong>

            {primaryLocation.address}

          </address>

        </div>

      </div>

      <div className={styles.copyright}>

        © 2026 {company.name}. All Rights Reserved.

      </div>

    </footer>
  );
}