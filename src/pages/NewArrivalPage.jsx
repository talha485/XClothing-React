import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";

function NewArrivalPage({ products }) {
  return (
    <div>
      <SectionTitle title="New Arrival" />
      <ProductGrid products={products} />
    </div>
  );
}

export default NewArrivalPage;
