import React from "react";
import PopUp from "./PopUp";
import "../../style/generics.css";

function CardTemplate(props) {
  const { children, openPopup, popupContent, cardClass, handleClosePopup } =
    props;
  return (
    <>
      <div
        className={`card flex flex-col items-center gap-2 min-w-48 max-w-80 px-5 py-6 ${cardClass}`}
      >
        {children}
      </div>
      {popupContent && (
        <PopUp open={openPopup} handleClosePopup={handleClosePopup}>
          {popupContent}
        </PopUp>
      )}
    </>
  );
}

export default CardTemplate;
