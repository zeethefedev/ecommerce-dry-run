import React, { useEffect } from "react";
import {
  CONTACTS,
  POSTS,
  POST_MAIN,
  PRODUCTS,
  SAMPLE_TEXT,
} from "../utils/testdata";
import PostCard from "../components/home/PostCard";
import ProductCard from "../components/products/ProductCard";
import SVGIcon from "../components/generics/SVGIcon";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/generics/Button";
import ContactCard from "../components/home/ContactCard";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      {/* landing */}
      <div className="min-h-screen">
        <h1 className="text-left max-w-3xl">Welcome to Ecommerce Dry Run</h1>
        {/* button scroll to the value session */}
        <Button variant="primary" className="icon-button">
          Get to know us
          <SVGIcon icon="arrow-right" />
        </Button>
      </div>
      {/* about */}
      <div id="about" className="min-h-screen">
        <AboutSession />
      </div>
      {/* menu */}
      <div id="products" className="min-h-screen">
        <ProductSession />
      </div>
      {/* contact */}
      <ContactSession />
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
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <h1 className="text-left">Our best sellers</h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {featureProducts.map((prod) => (
          <ProductCard item={prod} featureProducts />
        ))}
      </div>
      <Button onClick={handleNavigate}>See all products</Button>
    </>
  );
}

function ContactSession() {
  return (
    <div>
      <h1>Contact us</h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {CONTACTS.map((contact) => (
          <ContactCard item={contact} />
        ))}
      </div>
    </div>
  );
}

export default Home;
