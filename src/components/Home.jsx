import React from "react";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

function Home() {
    const products = useSelector(state => state.products)
    return (
        <div>
            <h2 className="font-bold text-3xl text-center mb-8 mt-4">Список товаров</h2>
            <ProductList products={products} />
        </div>
    );
}

export default Home;