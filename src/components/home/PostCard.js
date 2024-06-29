import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";
import Button from "../generics/Button";

function PopupContent({ item }) {
  const { heading, content, thumbnail } = item;
  return (
    <div className="grid grid-cols-2">
      <img src={thumbnail} alt="" />
      <div>
        <h2>{heading}</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}

function PostCard({ item }) {
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
      popupContent={<PopupContent item={current} />}
      cardClass="flex flex-col justify-between"
    >
      <h3 className="text-left">{item.title}</h3>
      <div className="text-left">{item.preview}</div>
      <Button onClick={handleOpenPopup}>Learn more</Button>
    </CardTemplate>
  );
}

export default PostCard;
