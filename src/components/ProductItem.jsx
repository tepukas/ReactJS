function ProductItem({ product, onAdd }) {
    const price = product.price.toFixed(2).replace(".", ",");

    return (
        <div>
            <h3>{product.name}</h3>

            <p>
                Kaina: {price} Eur
            </p>

            <button onClick={() => onAdd(product)}>
                Pridėti į krepšelį
            </button>
        </div>
    );
}

export default ProductItem;