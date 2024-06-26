import React, { useEffect } from "react";
import "../../style/generics.css";

function PopUp(props) {
  const { open, children } = props;
  const body = document.getElementsByTagName("body");

  useEffect(() => {
    if (body) {
      if (open) body[0].style.overflow = "hidden";
      else body[0].style.overflow = "visible";
    }
  }, [open]);

  return (
    <div>
      {open && (
        <div className="overlay-wrapper" style={{ top: window.scrollY }}>
          <div className="overlay">
            <div className="overlay-content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
