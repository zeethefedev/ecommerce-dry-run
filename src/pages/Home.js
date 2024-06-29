import React from "react";
import { POSTS, POST_MAIN, PRODUCTS, SAMPLE_TEXT } from "../utils/testdata";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart.reducer";
import PostCard from "../components/home/PostCard";
import ProductCard from "../components/products/ProductCard";
import SVGIcon from "../components/generics/SVGIcon";
import { useNavigate } from "react-router-dom";
import Button from "../components/generics/Button";

function Home() {
  return (
    <div>
      {/* landing */}
      <div className="min-h-screen">
        <h1 className="text-left max-w-3xl">Welcome to Ecommerce Dry Run</h1>
        {/* button scroll to the value session */}
        <Button variant="primary" className="icon-button">
          Get to know us
          <SVGIcon icon="arrow-right" viewBox="0 0 24 24" />
        </Button>
      </div>
      {/* about */}
      <div className="min-h-screen">
        <AboutSession />
      </div>
      {/* menu */}
      <div className="min-h-screen">
        <ProductSession />
      </div>
      {/* contact */}
    </div>
  );
}

function AboutSession() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <img src={POST_MAIN} alt="" />
        <div>
          <h2 className="text-right">Ecommerce Dry Run</h2>
          <div className="text-justify">{SAMPLE_TEXT}</div>
        </div>
      </div>
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
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <h1 className="text-left">Our best sellers</h1>
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
      <Button onClick={handleNavigate}>See all products</Button>
    </>
  );
}

export default Home;
