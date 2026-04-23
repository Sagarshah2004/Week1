import React from "react";

function Product({ name, price }) {
  return (
    <li>
      {name} - ₹{price}
    </li>
  );
}

export default Product;