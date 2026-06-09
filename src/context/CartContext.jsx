import { createContext, useState } from "react";

//for saving the cart state and providing to the whole app when needed using the provider and useContext hook.
export const CartContext = createContext();

function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart (product){

        const existingProduct = cart.find(item => item.id === product.id);

        if(existingProduct){
            setCart(cart.map(item => product.id === item.id ? {...item, quantity: item.quantity + product.quantity}  : item ));

        }else{
            setCart([...cart, product]);
        }

    }
    return (
        <CartContext.Provider value = { {cart, addToCart} }> 
        {children}
        </CartContext.Provider>
    )

}

export default CartProvider;