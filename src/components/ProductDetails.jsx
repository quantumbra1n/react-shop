import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(productId));
        console.log("Found product:", foundProduct);
        setProduct(foundProduct);
    }, [productId, products]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
        }
    };


    if (!product) {
        return <div>Товар не найден.</div>;
    }

    return (
        <div className="flex flex-wrap flex-row justify-center mb-4 mt-8 mx-56">
            <div className="flex flex-col items-center border-2 border-green-300 text-lg">
                <div className="my-1">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="my-3 text-3xl font-semibold underline">
                    <h2>{product.name}</h2>
                </div>
                <div className="my-2 mx-32 indent-8 text-justify">
                    <p>{product.description}</p>
                </div>
                <div className="my-1 mt-8 italic">
                    <p>Цена: {product.price} руб.</p>
                </div>
                <div className="my-2 px-8 py-1 border-2 border-blue-500 bg-blue-500 rounded text-white hover:bg-blue-300">
                    <button onClick={handleAddToCart}>В корзину</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;