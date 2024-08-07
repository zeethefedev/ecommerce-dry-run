import React, { useEffect } from "react";
import "../../style/generics.css";
import SVGIcon from "./SVGIcon";
import Button from "./Button";

function PopUp(props) {
  const { open, children, handleClosePopup } = props;
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
        <div className="overlay-wrapper">
          <div className="overlay max-h-[80vh] overflow-scroll hide-scrollbar">
            <Button
              className="w-auto absolute top-11 right-11"
              onClick={handleClosePopup}
            >
              <SVGIcon icon="close" />
            </Button>
            <div className="overlay-content mt-12">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
