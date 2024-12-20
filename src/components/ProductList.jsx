import React from "react";
import Card from "./Card";

function ProductList({ products }) {
  return (
    <div className="">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;