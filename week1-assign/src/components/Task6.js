import React from "react";
import Product from "./Product";

function Task6() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div>
      <h2>Task 6: Product List</h2>
      <ul>
        {products.map((product) => (
          <Product 
            key={product.id} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </ul>
    </div>
  );
}

export default Task6;