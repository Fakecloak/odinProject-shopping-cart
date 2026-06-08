import { NavLink } from "react-router-dom";

const NavLinkClass = ({isActive}) => isActive ? 'font-bold' : '';

function Navbar () {
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