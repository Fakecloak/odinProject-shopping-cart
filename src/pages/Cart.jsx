import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx"

function Cart() {
  const { cart} = useContext(CartContext);
  // console.log(cart) 

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
        <CartSummary
        cart={cart}
        />
      </div>
    </div>
  );
}

export default Cart;