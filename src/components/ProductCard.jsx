import {useState} from "react";

function ProductCard( {product} ) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            {/* <h4>{product.description}</h4> */}
            {/* <h4>{product.category}</h4> */}
            {/* <h4> { product.rating.rate} ( {product.rating.count} reviews )</h4> */}
            <div className="quantity-controls">
                <button
                onClick={ () => setQuantity(prev => prev - 1)}
                disabled={quantity === 1}
                >
                    -
                </button>
                <span> {quantity} </span>
                <button
                onClick={ () => setQuantity(prev => prev + 1)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default ProductCard;