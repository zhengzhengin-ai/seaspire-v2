import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import { products } from "@/data";
import styles from "@/styles/Products.module.css";

export default function Products() {
  return (
    <section
      id="products"
      className={styles.products}
    >
      <div className={styles.container}>

        <SectionHeading
          tag="FEATURED PRODUCTS"
          title="Representative Seafood Products"
        />

        <div className={styles.grid}>

          {products.slice(0, 5).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              variant="landing"
            />
          ))}

        </div>

      </div>
    </section>
  );
}