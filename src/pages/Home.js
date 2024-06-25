import React from "react";
import ProductList from "../components/products/ProductList";

function Home() {
  return (
    <div>
      {/* landing */}
      <div>
        <div>Welcome to Ecommerce Dry Run</div>
        {/* button scroll to the value session */}
        <button>Get to know us</button>
      </div>
      {/* about */}

      {/* menu */}
      <ProductList />
      {/* contact */}
    </div>
  );
}

export default Home;
