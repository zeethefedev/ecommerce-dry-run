import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";
import Select from "../generics/Select";
import { addToCart } from "../../store/cart.reducer";
import { useDispatch } from "react-redux";
import Input from "../generics/Input";

const toOptions = (optionsArray) => {
  return optionsArray.map((option) => ({
    name: option.toLowerCase(),
    displayName: option,
  }));
};

function PopupContent({ item }) {
  const { displayName, description, variants, thumbnail } = item;
  const roast = variants.map((variant) => variant.roast);
  const [chosen, setChosen] = useState({ roast: "", quantity: 0 });
  const [current, setCurrent] = useState({});
  const handleChosen = (e) => {
    const newChosen = { ...chosen, [e.target.name]: e.target.value };
    const newCurrent = item.variants.find(
      (variant) => variant.roast === newChosen.roast
    );
    setChosen(newChosen);
    setCurrent(newCurrent);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!chosen.roast) {
    } else {
      dispatch(
        addToCart({ ...item, chosen: { ...chosen, price: current.price } })
      );
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
          onChange={handleChosen}
          error={!chosen.roast}
          errorMessage="Please chose a type"
        />
        {current && (
          <>
            <Input
              label="quantity"
              type="number"
              name="quantity"
              value={chosen.quantity}
              min="0"
              max={current.stock}
              onChange={handleChosen}
              error={!chosen.quantity}
              errorMessage="Please enter quantity"
            />
            <div>{current.stock}</div>
            <div>{current.price}</div>
          </>
        )}
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
      const { roast, price } = variantHighSale;
      dispatch(addToCart({ ...item, chosen: { roast, quantity: 1, price } }));
    } else {
      handleOpenPopup();
    }
  };

  return (
    <CardTemplate
      open={openPopup}
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
