import React from "react";
import CardTemplate from "../generics/CardTemplate";
import SVGIcon from "../generics/SVGIcon";
import { Link } from "react-router-dom";

function ContactIcon({ icon, link }) {
  return (
    <Link
      className="icon rounded-full bg-[#d9ae71] p-3 flex justify-center items-center"
      to={link}
    >
      <SVGIcon icon={icon} width="24px" height="24px" />
    </Link>
  );
}

function ContactCard({ item }) {
  const { name, description, link } = item;
  return (
    <CardTemplate>
      <ContactIcon icon={name.toLowerCase()} link={link} />
      <div className="button-text uppercase">{name}</div>
      <div>{description}</div>
    </CardTemplate>
  );
}

export default ContactCard;
