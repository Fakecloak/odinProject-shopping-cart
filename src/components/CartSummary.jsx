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
                (<div className="mx-auto bg-gray-100 border border-dashed rounded-xl p-8 mt-3 w-full md:w-1/2">
                    <div className="flex flex-col items-end gap-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-600">Cart Total: <span className="text-orange-500">${totalPrice.toFixed(2)}</span></h2>
                        <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:shadow-2xl">
                            Proceed to Checkout
                        </button>
                    </div>
                 </div>) //if cart not empty
            }
      </div>
    );
};

export default CartSummary;