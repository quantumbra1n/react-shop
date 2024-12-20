import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="flex flex-wrap flex-row justify-center">
      <div className="flex flex-col items-center border-2 border-green-300 mb-4 text-lg">
        <div className="">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="my-1 text-xl font-semibold underline">
          <h3>{product.name}</h3>
        </div>
        <div className="my-1 italic">
          <p>Цена: {product.price} руб.</p>
        </div>
        <div className="my-2 px-3 border-2 border-yellow-500 bg-yellow-500 rounded hover:bg-yellow-300">
          <Link to={`/product/${product.id}`}>Посмотреть</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;