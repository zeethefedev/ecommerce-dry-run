import React, { useState } from "react";
import PopUp from "./PopUp";

function PopupContent({ item, mode, onCloseButtonClick, onCTAButtonClick }) {
  return (
    <div>
      <div>{item.displayName}</div>
      <button onClick={onCloseButtonClick}>Close</button>
      <button onClick={onCTAButtonClick}>Add to cart</button>
    </div>
  );
}

function Card({ item, onClickButton, mode }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [current, setCurrent] = useState();
  const handleOpenPopup = () => {
    setOpenPopup(true);
    setCurrent(item);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <div className="flex flex-col border-2 border-black gap-2 min-w-48 max-w-80">
        {/* <div>{item.displayName}</div> */}
        {mode === "product" ? (
          <>
            <div>
              <img
                className="object-cover aspect-square clickable"
                src={item.thumbnail}
                alt=""
                onClick={handleOpenPopup}
              />
              <div>{item.price}</div>
              <div>{item.roast}</div>
              <div>{item.name}</div>
            </div>
            <button onClick={onClickButton}>Add to cart</button>
          </>
        ) : (
          <>
            <div>{item.title}</div>
            <div>{item.preview}</div>
            <button onClick={handleOpenPopup}>Learn more</button>
          </>
        )}
      </div>
      <PopUp open={openPopup}>
        <PopupContent
          mode={mode}
          item={current}
          onCloseButtonClick={handleClosePopup}
          onCTAButtonClick={onClickButton}
        />
      </PopUp>
    </>
  );
}

export default Card;
