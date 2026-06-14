import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx"

function Cart() {
  const { cart} = useContext(CartContext);
  // console.log(cart) 

  return (
    <div className="p-10 mx-auto">

      <div className="flex flex-col gap-3 items-center justify-center">
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