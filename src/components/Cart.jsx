import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/actions";

function Cart() {
    const cartItems = useSelector((state) => {
        console.log('cart state:', state.cart);
        return state.cart;
      });
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-wrap flex-row justify-center">
            <div className="flex flex-col items-center mb-4 text-lg">
                <div className="my-3 text-3xl font-semibold">
                    <h2>Корзина</h2>
                </div>
                <div className="my-8">
                    {cartItems.length === 0 ? (
                                    <p>Ваша корзина пуста.</p>
                                ) : (
                                    <ul>
                                        {cartItems.map((item) => (
                                            <li key={item.id}>
                                                {item.name} - {item.price} руб.
                                            </li>
                                        ))}
                                    </ul>
                                )}
                </div>
                <div className="my-2 px-4 py-1 border-2 border-red-500 bg-red-500 rounded text-white hover:bg-red-300">
                    <button onClick={handleClearCart}>Очистить корзину</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;