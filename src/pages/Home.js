import React from "react";
import { POSTS, PRODUCTS } from "../utils/testdata";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart.reducer";
import PostCard from "../components/home/PostCard";
import ProductCard from "../components/products/ProductCard";
import SVGIcon from "../components/generics/SVGIcon";

function Home() {
  return (
    <div>
      {/* landing */}
      <div className="h-screen">
        <h1>Welcome to Ecommerce Dry Run</h1>
        {/* button scroll to the value session */}
        <button className="flex items-end justify-center gap-2">
          Get to know us
          <SVGIcon icon="arrow-right" fill="#40372a" viewBox="0 0 24 24" />
        </button>
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
    <>
      <div className="flex justify-center gap-4 flex-wrap">
        {POSTS.map((post) => (
          <PostCard item={post} />
        ))}
      </div>
    </>
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
        <ProductCard
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
