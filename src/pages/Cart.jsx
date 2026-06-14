import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cart} = useContext(CartContext);
  // console.log(cart)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0 ) 

  return (
    <div className="cart">
      <h1>Cart</h1>

      <div>
        {cart.map(item => (
          <CartItem 
          key={item.id}
          item={item}
          />
        ))}
      </div>

      <div>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty</h1>
        ): (<h2>Cart Total: {totalPrice.toFixed(2)}</h2>)}
      </div>
    </div>
  );
}

export default Cart;