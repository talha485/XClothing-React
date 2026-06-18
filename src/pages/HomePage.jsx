import React from "react";
import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
import ViewMoreBtn from "../components/ViewMoreBtn";

function HomePage({ seasonProducts, newProducts }) {
  return (
    <div>
      <HeroSlider />

      <section>
        <SectionTitle title="Season Sale" />
        <ProductGrid products={seasonProducts} />
        <ViewMoreBtn path="/season-sale" />
      </section>

      <section>
        <SectionTitle title="New Arrival" />
        <ProductGrid products={newProducts} />
        <ViewMoreBtn path="/new-arrival" />
      </section>
    </div>
  );
}

export default HomePage;
