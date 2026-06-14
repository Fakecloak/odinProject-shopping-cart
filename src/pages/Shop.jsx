import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";

function Shop() {
  const { products, error, isLoading } = useProducts();
  console.log(products);

  if(isLoading) return <h1> Loading Store...</h1>;

  if(error) return <h1> Something went wrong</h1>;

  return (
    <div className="shop">
        <h2 className=" text-2xl md:text-4xl font-bold p-5 flex justify-center mb-5">Our Products</h2>
      <div className="grid md:grid-cols-4 gap-3">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
        />
      ))}
      </div>
    </div>
  );
}

export default Shop;