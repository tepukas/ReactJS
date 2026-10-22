function ProductItem({ product, onAdd }) {
    return (
        <div>
            <h3>{product.name}</h3>

            <p>
                Kaina: {product.price.toFixed(2)} Eur
            </p>

            <button onClick={() => onAdd(product)}>
                Pridėti į krepšelį
            </button>
        </div>
    );
}

export default ProductItem;