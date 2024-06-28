import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";

function PopupContent({ item, onCloseButtonClick, onCTAButtonClick }) {
  return (
    <div>
      <div>{item.displayName}</div>
      <button onClick={onCloseButtonClick}>Close</button>
      <button onClick={onCTAButtonClick}>Add to cart</button>
    </div>
  );
}

function ProductCard({ item, onClickButton }) {
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
    <CardTemplate
      openPopup={openPopup}
      popupContent={
        <PopupContent
          item={current}
          onCloseButtonClick={handleClosePopup}
          onCTAButtonClick={onClickButton}
        />
      }
    >
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
    </CardTemplate>
  );
}

export default ProductCard;
