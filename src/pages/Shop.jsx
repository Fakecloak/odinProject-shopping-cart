import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";

function Shop() {
  const { products, error, isLoading } = useProducts();
  console.log(products);

  if(isLoading) return <h1> Loading Store...</h1>;

  if(error) return <h1> Something went wrong</h1>;

  return (
    <div className="shop">
      <h1>Shop</h1>

      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Shop;