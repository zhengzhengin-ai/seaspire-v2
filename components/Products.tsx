import Image from "next/image";
import styles from "../styles/Products.module.css";

const products = [
  {
    title: "Fresh Seafood",
    description:
      "Premium fresh seafood supplied directly from trusted fishing sources.",
    image: "/images/products/fresh.webp",
  },
  {
    title: "Frozen Seafood",
    description:
      "Professionally processed frozen seafood with reliable quality.",
    image: "/images/products/frozen.webp",
  },
  {
    title: "Processed Seafood",
    description:
      "Customized processing and packing based on customer requirements.",
    image: "/images/products/processed.webp",
  },
  {
    title: "Thai Seafood",
    description:
      "Selected premium seafood products from Thailand.",
    image: "/images/products/thai.webp",
  },
];


export default function Products() {
  return (
    <section
      id="products"
      className={styles.products}
    >

      <div className={styles.container}>


        <p className={styles.sectionTag}>
          FEATURED PRODUCTS
        </p>



        <h2 className={styles.title}>
          Representative Seafood Products
        </h2>



        <div className={styles.grid}>


          {products.map((product) => (

            <div
              className={styles.card}
              key={product.title}
            >


              <div className={styles.imageWrapper}>


                <Image
                  className={styles.image}
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={420}
                />


              </div>



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


      </div>

    </section>
  );
}