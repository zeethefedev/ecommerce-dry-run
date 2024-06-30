import React from "react";
import { Link, useLocation } from "react-router-dom";

const PAGES = ["home", "about", "products", "cart"];

function NavbarLink({ page }) {
  const location = useLocation();
  const link = () => {
    if (["/", "/home"].includes(location.pathname)) {
      return `/${["about", "products"].includes(page) ? `home#${page}` : page}`;
    } else {
      return `/${page === "about" ? `home#${page}` : page}`;
    }
  };

  return (
    <div className="mx-4 uppercase">
      <Link className="button-text" to={link()}>
        {page}
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-end">
      {PAGES.map((page) => (
        <NavbarLink page={page} />
      ))}
    </div>
  );
}

export default Navbar;
