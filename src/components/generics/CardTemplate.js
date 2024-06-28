import React from "react";
import PopUp from "./PopUp";

function CardTemplate({ children, openPopup, popupContent }) {
  return (
    <>
      <div className="flex flex-col border-2 border-black gap-2 min-w-48 max-w-80">
        {children}
      </div>
      {popupContent && <PopUp open={openPopup}>{popupContent}</PopUp>}
    </>
  );
}

export default CardTemplate;
