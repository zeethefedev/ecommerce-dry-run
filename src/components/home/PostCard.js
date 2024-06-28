import React, { useState } from "react";
import CardTemplate from "../generics/CardTemplate";

function PopupContent({ item, onCloseButtonClick }) {
  return (
    <div>
      <div>{item.displayName}</div>
      <button onClick={onCloseButtonClick}>Close</button>
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
      popupContent={
        <PopupContent item={current} onCloseButtonClick={handleClosePopup} />
      }
    >
      <div>{item.title}</div>
      <div>{item.preview}</div>
      <button onClick={handleOpenPopup}>Learn more</button>
    </CardTemplate>
  );
}

export default PostCard;
