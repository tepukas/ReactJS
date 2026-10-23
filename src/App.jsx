import { useState } from "react";
import TaskList from "./components/TaskList";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import GuessGame from "./components/GuessGame";

function App() {
    const [products] = useState([
        {
            id: 1,
            name: "Klaviatūra",
            price: 29.99,
        },
        {
            id: 2,
            name: "Pelė",
            price: 19.99,
        },
        {
            id: 3,
            name: "Ausinės",
            price: 39.99,
        },
    ]);

    const [cart, setCart] = useState([]);

    function handleAddToCart(product) {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                )
            );
        } else {
            const cartItem = {
                ...product,
                quantity: 1,
            };

            setCart([...cart, cartItem]);
        }
    }

    function handleRemoveFromCart(productId) {
        setCart(
            cart.filter((item) => item.id !== productId)
        );
    }

    return (
        <div>
            <h1>A dalis – Užduočių sąrašas</h1>
            <TaskList />

            <hr />

            <h1>B dalis – Krepšelio sistema</h1>

            <ProductList
                products={products}
                onAdd={handleAddToCart}
            />

            <Cart
                cart={cart}
                onRemove={handleRemoveFromCart}
            />

            <hr />

            <h1>C dalis – Skaičių spėjimo žaidimas</h1>
            <GuessGame />
        </div>
    );
}

export default App;