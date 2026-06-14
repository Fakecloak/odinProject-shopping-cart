import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import card0 from "../assets/Homepage/card0.jpg"
import card2 from "../assets/Homepage/card2.jpg"
import card3 from "../assets/Homepage/card3.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative mx-auto p-3 bg-white">

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Our Collection
            </h1>
            <button
                onClick={()=> navigate('/shop')} 
                className="px-6 py-4 font-medium bg-indigo-600 hover:bg-indigo-400 hover:shadow-2xl text-white rounded-full">
              Browse Shop
            </button>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-4">
          <img
            src={card0}
            alt="card 1"
            className="w-full h-screen object-cover"
          />

          <img
            src={card3}
            alt="card 2"
            className="w-full h-screen object-cover"
          />

          <img
            src={card2}
            alt="card 3"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Home;