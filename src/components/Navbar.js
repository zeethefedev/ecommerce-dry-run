import React from "react";
import { Link } from "react-router-dom";

const PAGES = ["home", "about", "products", "cart"];

function Navbar() {
  return (
    <div>
      {PAGES.map((page) => (
        <Link to={`/${page}`}>{page}</Link>
      ))}
    </div>
  );
}

export default Navbar;
