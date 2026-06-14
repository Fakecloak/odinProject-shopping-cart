import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const NavLinkClass = ({isActive}) => isActive ? 'font-bold' : '';

function Navbar () {
    const {cart} = useContext(CartContext);

    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
    // console.log(cart);
    
  return (
    <nav className="flex flex-row bg-red-200">
      <div className="">
        <h1>Odin Shop Cart</h1>
        <div>
          <NavLink to='/' className={NavLinkClass}>
          Home
          </NavLink>
          <NavLink to='/shop' className={NavLinkClass}>
          Shop
          </NavLink> 
          <NavLink to='/cart' className={NavLinkClass}>
          Cart ({totalItems})
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;