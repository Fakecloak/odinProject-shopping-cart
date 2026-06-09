import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart } = useContext(CartContext);
  // console.log(cart)

  return (
    <div className="cart">
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;