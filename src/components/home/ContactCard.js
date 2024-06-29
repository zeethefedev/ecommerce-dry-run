import React from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";

function ContactIcon({ icon }) {
  return (
    <div className="icon rounded-full bg-[#d9ae71] p-3 flex justify-center items-center">
      <SVGIcon icon={icon} width="24px" height="24px" />
    </div>
  );
}

function ContactCard({ item }) {
  const { name, description } = item;
  return (
    <CardTemplate>
      <ContactIcon icon={name.toLowerCase()} />
      <div className="button-text uppercase">{name}</div>
      <div>{description}</div>
    </CardTemplate>
  );
}

export default ContactCard;
