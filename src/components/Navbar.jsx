import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <nav>
      <h1>Odin Shop Cart</h1>

      <div>
        <NavLink to='/' className={
            ({isActive}) => isActive ? 'font-bold' : ''
        }>
        Home
        </NavLink>
        <NavLink to='/shop' className={
            ({isActive}) => isActive ? 'font-bold' : ''
        }>
        Shop
        </NavLink> 
        <NavLink to='/cart' className={
            ({isActive}) => isActive ? 'font-bold' : ''
        }>
        Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;