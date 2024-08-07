import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";
import Select from "../generics/Select";
import { addToCart } from "../../store/cart.reducer";
import { useDispatch } from "react-redux";
import Input from "../generics/Input";

function PopupContent({ item }) {
  const { displayName, description, origin, variants, thumbnail } = item;
  const roast = variants.map((variant) => variant.roast);
  const [chosen, setChosen] = useState({ roast: "", quantity: 0 });
  const [current, setCurrent] = useState();
  const [message, setMessage] = useState("");

  const handleChosen = (e) => {
    setMessage("");
    const newChosen = { ...chosen, [e.target.name]: e.target.value };
    const newCurrent = item.variants.find(
      (variant) => variant.roast === newChosen.roast
    );
    setChosen(newChosen);
    setCurrent(newCurrent);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!chosen.roast || !chosen.quantity || chosen.quantity > current.stock) {
      setMessage("Please try again");
    } else {
      dispatch(
        addToCart({ ...item, chosen: { ...chosen, price: current.price } })
      );
      setMessage("Item added successfully");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={thumbnail} alt="" />
      <div className="text-left">
        <h3>{displayName}</h3>
        <div>{description}</div>
        <div>Origin: {origin}</div>
        {current && (
          <>
            <div>Stock: {current.stock}</div>
            <div>Price: {current.price}</div>
          </>
        )}
        <Select
          label="roast"
          name="roast"
          options={roast}
          onChange={handleChosen}
          error={!chosen.roast}
          errorMessage="Please chose a type"
        />
        {current && (
          <Input
            label="quantity"
            type="number"
            name="quantity"
            value={chosen.quantity}
            min="0"
            max={current.stock}
            onChange={handleChosen}
            error={!chosen.quantity || chosen.quantity > current.stock}
            errorMessage="Please enter quantity"
          />
        )}
        <div>{message}</div>
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

  const minItem = item.variants.reduce((min, currentItem) => {
    return currentItem.price < min.price ? currentItem : min;
  }, item.variants[0]);

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
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div>{item.displayName}</div>
            <div>Price: {minItem.price}</div>
            {featureProducts && <div>Roast: {variantHighSale.roast}</div>}
            {featureProducts && <div>Annual Sale: {variantHighSale.sale}</div>}
          </div>
          <Button className="w-auto" onClick={handleAddClick}>
            <SVGIcon icon="plus" />
          </Button>
        </div>
      </div>
    </CardTemplate>
  );
}

export default ProductCard;
