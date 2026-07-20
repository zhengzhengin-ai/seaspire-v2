import Link from "next/link";
import styles from "./CTA.module.css";

interface CTAProps {
  tag?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}


export default function CTA({
  tag = "LET'S WORK TOGETHER",
  title,
  description,
  buttonText = "Contact Us",
  buttonLink = "/contact",
}: CTAProps) {

  const titleLines = title.split("\n");


  return (
    <section className={styles.cta}>


      <div className={styles.container}>


        <p className={styles.tag}>
          {tag}
        </p>



        <h2>

          {titleLines.map((line, index) => (

            <span key={line}>

              {line}

              {index !== titleLines.length - 1 && (
                <br />
              )}

            </span>

          ))}

        </h2>



        <p className={styles.description}>
          {description}
        </p>



        <Link
          href={buttonLink}
          className={styles.button}
        >
          {buttonText}
        </Link>


      </div>


    </section>
  );
}