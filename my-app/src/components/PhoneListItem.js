import React from "react";

const PhoneListItem = ({
  id,
  name,
  description,
  price,
  addPhoneToCart,
  text,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <p>
        <span className="small"> {text} </span> {price}
      </p>
      <button onClick={() => addPhoneToCart(price)}>Buy</button>
    </>
  );
};

export default PhoneListItem;
