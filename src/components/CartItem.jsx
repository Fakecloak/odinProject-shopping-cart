import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

function CartItem({item}) {
    const {removeFromCart,        
          incrementQty,
          decrementQty } = useContext(CartContext);
    
    function handleRemove() {
        removeFromCart(item.id);
    }

    function handleIncrease(){
        incrementQty(item.id)
    }

    function handleDecrease(){
        decrementQty(item.id)
    }

    return(
        <div>
            <div className="product-image">
                <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>Qty: {item.quantity}</p>
            <p>$ {item.price.toFixed(2)}</p>
            <div className="quantity-controls">
                <button
                onClick={handleDecrease}
                disabled={item.quantity === 1}
                >
                    -
                </button>
                <span> {item.quantity} </span>
                <button
                onClick={handleIncrease}
                >
                    +
                </button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>

    );
};

export default CartItem;