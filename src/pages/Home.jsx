import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Home() {

  const { addToCart } = useContext(CartContext);

  const fakeProduct = {
    id: 1,
    title: "Test Product",
    price: 100,
    quantity: 3,
  };

  return (
    <>
      <h1>Home Page</h1>

      <button
        onClick={() => addToCart(fakeProduct)}
      >
        Add Test Product
      </button>
    </>
  );
}

export default Home;