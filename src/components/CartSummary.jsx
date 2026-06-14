function CartSummary({cart}) {
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0 
    );

    return(
        <div>
            {cart.length === 0 ? 
                (<h1>Your Cart is Empty</h1>) : (<h2>Cart Total: ${totalPrice.toFixed(2)}</h2>)
            }
      </div>
    );
};

export default CartSummary;