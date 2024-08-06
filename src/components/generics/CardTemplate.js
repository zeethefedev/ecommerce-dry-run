import React from "react";
import PopUp from "./PopUp";
import "../../style/generics.css";

function CardTemplate(props) {
  const {
    children,
    cardClass,
    direction = "col",
    open,
    popupContent,
    handleClosePopup,
  } = props;
  return (
    <>
      <div
        className={`${cardClass} card flex flex-${direction} items-center gap-2 min-w-48 max-w-80 px-5 py-6`}
      >
        {children}
      </div>
      {popupContent && (
        <PopUp open={open} handleClosePopup={handleClosePopup}>
          {popupContent}
        </PopUp>
      )}
    </>
  );
}

export default CardTemplate;
