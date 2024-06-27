import React from "react";
import { POSTS, PRODUCTS } from "../utils/testdata";
import Card from "../components/generics/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart.reducer";

function Home() {
  return (
    <div>
      {/* landing */}
      <div className="h-screen">
        <h1>Welcome to Ecommerce Dry Run</h1>
        {/* button scroll to the value session */}
        <button>Get to know us</button>
      </div>
      {/* about */}
      <AboutSession />
      {/* menu */}
      <ProductSession />
      {/* contact */}
    </div>
  );
}

function AboutSession() {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {POSTS.map((post) => (
        <Card item={post} />
      ))}
    </div>
  );
}

function ProductSession({ products = PRODUCTS }) {
  const featureProducts = products.filter((prod) => prod.featureProduct);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {featureProducts.map((prod) => (
        <Card
          mode="product"
          item={prod}
          onClickButton={() => {
            handleAddToCart(prod);
          }}
        />
      ))}
    </div>
  );
}

export default Home;
