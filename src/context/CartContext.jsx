import { createContext, useState } from "react";

//for saving the cart state and providing to the whole app when needed using the provider and useContext hook.
export const CartContext = createContext();

function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value = { {cart, setCart} }> 
        {children}
        </CartContext.Provider>
    )

}

export default CartProvider;