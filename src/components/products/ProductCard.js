import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";

function PopupContent({ item, onCTAButtonClick }) {
  const { displayName, description, roast, thumbnail } = item;
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={thumbnail} alt="" />
      <div>
        <h3>{displayName}</h3>
        <div>{description}</div>
        <Button onClick={onCTAButtonClick} className="icon-button">
          <SVGIcon icon="plus" />
          Add to cart
        </Button>
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
          <Button className="w-auto" onClick={onClickButton}>
            <SVGIcon icon="plus" />
          </Button>
        </div>
      </div>
    </CardTemplate>
  );
}

export default ProductCard;
