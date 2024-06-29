import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";

function PopupContent({ item, onCTAButtonClick }) {
  const { displayName, description, roast, thumbnail } = item;
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={thumbnail} alt="" />
      <div>
        <h3>{displayName}</h3>
        <div>{description}</div>
        <button onClick={onCTAButtonClick}>
          <SVGIcon icon="plus" />
          Add to cart
        </button>
      </div>
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
      handleClosePopup={handleClosePopup}
      popupContent={
        <PopupContent item={current} onCTAButtonClick={onClickButton} />
      }
    >
      <div>
        <img
          className="object-cover aspect-square clickable"
          src={item.thumbnail}
          alt=""
          onClick={handleOpenPopup}
        />
        <div className="flex justify-between">
          <div>{item.displayName}</div>
          {/* <div>{item.price}</div> */}
          {/* <div>{item.roast}</div> */}
          <button className="w-auto" onClick={onClickButton}>
            <SVGIcon icon="plus" />
          </button>
        </div>
      </div>
    </CardTemplate>
  );
}

export default ProductCard;
