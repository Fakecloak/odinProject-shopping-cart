import { NavLink } from "react-router";
function CartSummary({cart}) {
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0 
    );

    return(
        <div>
            {cart.length === 0 ? 
                (<div className="mx-auto my-40 gap-10 flex flex-col justify-center font-bold text-4xl items-center">
                <h1 className="">Your Cart is Empty</h1>
                <NavLink to='/shop'>
                    <button className="flex px-6 py-5 font-medium bg-indigo-600 hover:bg-indigo-400 hover:shadow-2xl text-white rounded-full">Go Shopping</button>
                </NavLink>
                </div>) //if cart empty
                : 
                (<div className="flex justify-center font-bold text-2xl">
                    <h2><span className="text-gray-600">Cart Total: </span>${totalPrice.toFixed(2)}</h2>
                 </div>) //if cart not empty
            }
      </div>
    );
};

export default CartSummary;