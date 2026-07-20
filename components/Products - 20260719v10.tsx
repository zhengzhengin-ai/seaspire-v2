import styles from "../styles/Products.module.css";

const products = [
  {
    title: "Fresh Seafood",
    description:
      "Premium fresh seafood supply from reliable fishing sources.",
    image: "/images/products/fresh.webp",
  },
  {
    title: "Frozen Seafood",
    description:
      "High-quality frozen seafood with controlled processing.",
    image: "/images/products/frozen.webp",
  },
  {
    title: "Processed Seafood",
    description:
      "Customized seafood products meeting customer requirements.",
    image: "/images/products/processed.webp",
  },
  {
    title: "Thai Seafood",
    description:
      "Selected seafood products from Thailand.",
    image: "/images/products/thai.webp",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className={styles.products}
    >

      <h2 className={styles.title}>
        Featured Products
      </h2>


      <div className={styles.grid}>

        {products.map((product) => (

          <div
            className={styles.card}
            key={product.title}
          >

            <img
              className={styles.image}
              src={product.image}
              alt={product.title}
            />

            <div className={styles.content}>

              <h3>
                {product.title}
              </h3>

              <p>
                {product.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}