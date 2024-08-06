import React, { useState } from "react";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";
import CardTemplate from "../generics/CardTemplate";
import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../store/cart.reducer";

function PopupContent({ item, handleNoClick, handleYesClick }) {
  return (
    <div>
      <div>Are you sure you want to remove {item.name} from the cart?</div>
      <Button onClick={handleYesClick}>Yes</Button>
      <Button onClick={handleNoClick}>No</Button>
    </div>
  );
}

function IconButton({ icon, onClick }) {
  return (
    <Button onClick={onClick} variant="tetriary" className="text-[#ebebeb]">
      <SVGIcon icon={icon} />
    </Button>
  );
}

function CartCard({ product }) {
  const { thumbnail, name, chosen } = product;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseProduct(product));
  };
  const handleDecrease = () => {
    if (chosen.quantity > 1) {
      dispatch(decreaseProduct(product));
    } else {
      handleOpenPopup();
    }
  };
  const handleRemove = () => {
    dispatch(removeProduct(product));
  };

  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleYesClick = () => {
    dispatch(decreaseProduct(product));
    handleClosePopup();
  };

  return (
    <CardTemplate
      open={openPopup}
      handleClosePopup={handleClosePopup}
      popupContent={
        <PopupContent
          item={product}
          handleNoClick={handleClosePopup}
          handleYesClick={handleYesClick}
        />
      }
      cardClass="max-w-none justify-between"
      direction="row"
    >
      <img
        className="object-cover aspect-square max-w-16"
        src={thumbnail}
        alt=""
      />
      <div>
        {/* <div>{product.displayName}</div> */}
        <div>{name}</div>
        <div>{chosen.roast}</div>
      </div>
      <div className="flex items-center">
        <IconButton icon="minus" onClick={handleDecrease} />
        <div>{chosen.quantity}</div>
        <IconButton icon="plus" onClick={handleIncrease} />
        {/* <Button onClick={handleRemove}>Remove</Button> */}
      </div>
      <div>VDN {chosen.price}</div>
    </CardTemplate>
  );
}

export default CartCard;
