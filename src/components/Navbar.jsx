import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../context/CartContext.jsx";

const NavLinkClass = ({isActive}) => isActive ? 'font-bold' : '';

function Navbar () {
    const {cart} = useContext(CartContext);
    console.log(cart);
  return (
    <nav>
      <h1>Odin Shop Cart</h1>
      <div>
        <NavLink to='/' className={NavLinkClass}>
        Home
        </NavLink>
        <NavLink to='/shop' className={NavLinkClass}>
        Shop
        </NavLink> 
        <NavLink to='/cart' className={NavLinkClass}>
        Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;