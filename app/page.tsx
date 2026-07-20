import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <Hero />


      {/* PRODUCTS */}

      <Products />


      {/* ABOUT */}

      <About />


      {/* CTA */}

      <CTA
        tag="LET'S WORK TOGETHER"
        title={"YOUR TRUSTED\nSEAFOOD PARTNER"}
        description="Reliable seafood supply with premium quality, stable sourcing and customized processing for customers worldwide."
      />

    </main>
  );
}