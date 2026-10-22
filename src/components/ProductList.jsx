import ProductItem from "./ProductItem";

function ProductList({ products, onAdd }) {
    return (
        <div>
            <h2>Prekės</h2>

            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default ProductList;