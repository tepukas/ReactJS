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