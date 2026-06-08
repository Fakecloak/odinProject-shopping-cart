import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <nav>
      <h1>Odin Shop Cart</h1>

      <div>
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/shop'>Shop</Navlink> 
        <Navlink to='/cart'>Cart</Navlink>
      </div>
    </nav>
  )
}

export default Navbar;