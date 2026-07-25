import styles from "./PageHero.module.css";

interface PageHeroProps {
  subtitle: string;
  title: string;
  description?: string;
  image?: string;
}


export default function PageHero({
  subtitle,
  title,
  description,
  image = "/images/hero/about-hero.webp",
}: PageHeroProps) {

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0,35,55,.72),
            rgba(0,35,55,.35),
            rgba(0,35,55,.08)
          ),
          url(${image})
        `,
      }}
    >


      <div className={styles.content}>


        <p className={styles.subtitle}>
          {subtitle}
        </p>



        <h1>

          {title.split("\n").map((line,index)=>(
            
            <span key={index}>

              {line}

              {index !== title.split("\n").length - 1 && (
                <br />
              )}

            </span>

          ))}

        </h1>




        {description && (

          <p className={styles.description}>
            {description}
          </p>

        )}


      </div>


    </section>
  );
}