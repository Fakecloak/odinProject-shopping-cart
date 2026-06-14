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
        <div className="flex flex-col md:flex-row items-center border rounded-lg border-gray-400 p-6 w-full md:w-1/2 gap-10">

            <div className="w-64 h-64 shrink-0 bg-gray-200 p-2">
                <img className="w-full h-full object-contain" src={item.image} alt={item.title} />
            </div>

            <div className="flex flex-col h-64 justify-around">
                <div className="space-y-6">
                    <h2 className="line-clamp-3 text-lg font-bold">{item.title}</h2>
                    <p className="font-medium text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="font-medium  text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="text-red-700 font-medium">Subtotal: ${(item.quantity*item.price).toFixed(2)}</p>
            </div>
            
            <div className="flex items-center gap-3 md:ml-auto">
                <button className="py-2 px-4 border border-slate-200 rounded-lg disabled:text-gray-200 "
                onClick={handleDecrease}
                disabled={item.quantity === 1}
                >
                    -
                </button>
                <span className="text-md font-medium"> {item.quantity} </span>
                <button className="py-2 px-4 border border-slate-200 rounded-lg"
                onClick={handleIncrease}
                >
                    +
                </button>
            </div>

            <button className="py-2 px-4  rounded-lg bg-red-500 text-white text-md md:ml-auto"
                onClick={handleRemove}>Remove</button>

        </div>

    );
};

export default CartItem;