import React from "react";
// components

import ProductCards from "../../components/Products/ProductCards.js";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <ProductCards />
          </div>
      </div>
    </>
  );
}
