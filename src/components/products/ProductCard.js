import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";
import Select from "../generics/Select";
import { addToCart } from "../../store/cart.reducer";
import { useDispatch } from "react-redux";

const toOptions = (optionsArray) => {
  return optionsArray.map((option) => ({
    name: option.toLowerCase(),
    displayName: option,
  }));
};

function PopupContent({ item }) {
  const { displayName, description, variants, thumbnail } = item;
  const roast = variants.map((variant) => variant.roast);
  const [chosenRoast, setChosenRoast] = useState("");
  const handleChosenRoast = (e) => {
    setChosenRoast(e.target.value);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!chosenRoast) {
    } else {
      dispatch(addToCart({ ...item, chosenRoast }));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={thumbnail} alt="" />
      <div>
        <h3>{displayName}</h3>
        <div>{description}</div>
        <Select
          label="roast"
          name="roast"
          options={toOptions(roast)}
          onChange={handleChosenRoast}
          error={!chosenRoast}
          errorMessage="Please chose a type"
        />
        <Button onClick={handleAddToCart} className="icon-button">
          <SVGIcon icon="plus" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}

function ProductCard({ item, featureProducts }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [current, setCurrent] = useState();
  const highSale = Math.max(...item.variants.map((variant) => variant.sale));
  const variantHighSale = item.variants.find(
    (variant) => variant.sale === highSale
  );
  const handleOpenPopup = () => {
    setOpenPopup(true);
    setCurrent(item);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const dispatch = useDispatch();
  const handleAddClick = () => {
    if (featureProducts) {
      dispatch(addToCart({ ...item, chosenRoast: variantHighSale }));
    } else {
      handleOpenPopup();
    }
  };

  return (
    <CardTemplate
      openPopup={openPopup}
      handleClosePopup={handleClosePopup}
      popupContent={<PopupContent item={current} />}
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
          {featureProducts && <div>{variantHighSale.roast}</div>}
          {/* <div>{item.price}</div> */}
          <Button className="w-auto" onClick={handleAddClick}>
            <SVGIcon icon="plus" />
          </Button>
        </div>
      </div>
    </CardTemplate>
  );
}

export default ProductCard;
