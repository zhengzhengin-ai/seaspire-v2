import styles from "../styles/ProductShowcase.module.css";

interface ProductShowcaseProps {
  name: string;
  image: string;
  forms: string[];
}

export default function ProductShowcase({
  name,
  image,
  forms,
}: ProductShowcaseProps) {
  return (
    <article className={styles.card}>

      <div className={styles.imageWrapper}>

        <img
          src={image}
          alt={name}
          className={styles.image}
        />

        <div className={styles.overlay}></div>

        <div className={styles.overlayContent}>

          <span>
            Available Forms
          </span>

          {forms.map((form) => (
            <p key={form}>
              {form}
            </p>
          ))}

        </div>

      </div>

      <h3>
        {name}
      </h3>

    </article>
  );
}