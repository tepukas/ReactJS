function Cart({ cart }) {
    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Krepšelis</h2>

            {cart.length === 0 ? (
                <p>Krepšelis tuščias.</p>
            ) : (
                <div>
                    {cart.map((item) => {
                        const linePrice =
                            item.price * item.quantity;

                        return (
                            <div key={item.id}>
                                <p>
                                    <strong>{item.name}</strong>
                                </p>

                                <p>
                                    Vieneto kaina:{" "}
                                    {item.price.toFixed(2)} Eur
                                </p>

                                <p>
                                    Kiekis: {item.quantity}
                                </p>

                                <p>
                                    Suma:{" "}
                                    {linePrice.toFixed(2)} Eur
                                </p>
                            </div>
                        );
                    })}

                    <p>
                        <strong>
                            Bendra kaina:{" "}
                            {totalPrice.toFixed(2)} Eur
                        </strong>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Cart;