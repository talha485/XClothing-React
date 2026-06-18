import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
function SeasonSalePage({ products }) {
  return (
    <div>
      <SectionTitle title="Season Sale" />
      <ProductGrid products={products} />
    </div>
  );
}

export default SeasonSalePage;
