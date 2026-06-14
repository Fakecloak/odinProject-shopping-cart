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

        <div className="mx-10 absolute top-[30%] md:inset-0 flex flex-col items-center justify-center z-10">
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl text-center">
            <h1 className=" text-2xl md:text-5xl font-bold text-white mb-6">
              Discover Our Collection
            </h1>
            <button
                onClick={()=> navigate('/shop')} 
                className="px-6 py-4 font-medium bg-indigo-600 hover:bg-indigo-400 hover:shadow-2xl text-white rounded-full">
              Browse Shop
            </button>
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-4">
          <img
            src={card0}
            alt="card 1"
            className="w-full h-80 md:h-screen object-cover"
          />

          <img
            src={card3}
            alt="card 2"
            className="w-full h-80 md:h-screen object-cover"
          />

          <img
            src={card2}
            alt="card 3"
            className="w-full h-90 md:h-screen object-cover"
          />
        </div>

        <div className=" mt-2 bg-gray-100 w-full h-64 flex flex-col gap-3 justify-center items-center">
          <div className="text-2xl md:text-5xl font-bold">Fast Delivery</div>
          <div className="text-2xl md:text-5xl text-gray-600">Get your items delivered quickly</div>
        </div>
        
      </div>
    </>
  );
}

export default Home;