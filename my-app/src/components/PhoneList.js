import React from "react";
import PhoneListItem from "./PhoneListItem";
import phoneArray from "./PhoneArray";

const PhoneList = ({
  id,
  price,
  addPhoneToCart,
  text,
  sum,
  currencyChange,
}) => {
  return (
    <>
      <h1>Our shop page</h1>

      <button
        onClick={() =>
          currencyChange(id, (price = price - price * 0.85), (text = "USD"))
        }
      >
        USD
      </button>
      <button
        onClick={() => currencyChange(id, (price = price * 1), (text = "EUR"))}
      >
        EUR
      </button>
      <button
        onClick={() =>
          currencyChange(id, (price = price * 31 - price), (text = "UAH"))
        }
      >
        UAH
      </button>

      <div className={"column"}>
        {phoneArray.map(({ id, name, description, price }) => (
          <div key={id}>
            <PhoneListItem
              id={id}
              name={name}
              description={description}
              price={price + sum.price}
              addPhoneToCart={addPhoneToCart}
              text={text}
              currencyChange={currencyChange}
            />
          </div>
        ))}
      </div>
      <p>
        total:
        {price} {text}
      </p>
    </>
  );
};

export default PhoneList;
