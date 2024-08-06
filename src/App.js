import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./store/cart.reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCart());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;
