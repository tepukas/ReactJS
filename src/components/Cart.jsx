function Cart({ cart }) {
    return (
        <div>
            <h2>Krepšelis</h2>

            {cart.length === 0 ? (
                <p>Krepšelis tuščias.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <p>
                                {item.name} - {item.price.toFixed(2)} Eur
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;