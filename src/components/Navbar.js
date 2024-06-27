import React from "react";
import { Link } from "react-router-dom";

const PAGES = ["home", "about", "products", "cart"];

function Navbar() {
  return (
    <div className="flex justify-end">
      {PAGES.map((page) => (
        <div className="mx-4 uppercase">
          <Link className="button-text" to={`/${page}`}>
            {page}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
