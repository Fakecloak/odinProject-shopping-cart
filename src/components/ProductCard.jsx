import {useState} from "react";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

function ProductCard( {product} ) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(CartContext);

    function handleAddToCart() {
        addToCart({...product, quantity});
        setQuantity(1);
    }

    return (
        <div className="mx-auto flex flex-col gap-3 border rounded-lg border-gray-400 p-5 w-80 h-full">
            <div className="mx-auto w-64 h-64 bg-gray-200 p-2">
                <img className="w-full h-full object-contain" src={product.image} alt={product.title} />
            </div>

            <div className="flex flex-col  gap-3 w-full">
                <h2 className="line-clamp-3 text-lg font-bold">{product.title}</h2>
                <h3 className="font-medium text-gray-600">$ {product.price.toFixed(2)}</h3>
                {/* <h4>{product.description}</h4> */}
                {/* <h4>{product.category}</h4> */}
                {/* <h4> { product.rating.rate} ( {product.rating.count} reviews )</h4> */}
            </div>
            <div className="flex items-center justify-center gap-3">
                <button
                className="py-2 px-4 border border-slate-200 rounded-lg disabled:text-gray-200"
                onClick={ () => setQuantity(prev => prev - 1)}
                disabled={quantity === 1}
                >
                    -
                </button>
                <span> {quantity} </span>
                <button
                className="py-2 px-4 border border-slate-200 rounded-lg"
                onClick={ () => setQuantity(prev => prev + 1)}
                >
                    +
                </button>
            </div>

            <button 
                className="py-2 px-4  rounded-lg bg-blue-500 text-white text-md mt-auto hover:shadow-2xl"
                onClick={handleAddToCart}>
                    Add to Cart
            </button>
            
        </div>
    )
}

export default ProductCard;