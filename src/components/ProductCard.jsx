function ProductCard( {product} ) {

    return (
        <div className="product-card">
        <div className="product-image">
            <img src={product.image} alt={product.title} />
        </div>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <h4>{product.description}</h4>
        <h4>{product.category}</h4>
        <h4> { product.rating.rate} ( {product.rating.count} reviews )</h4>
        </div>
    )
}

export default ProductCard;