import React, { useState } from "react";
import "./App.css";
import PhonesList from "./components/PhoneList";

const App = () => {
  const [cartTotal, setCartTotal] = useState({ price: 0 });

  const addPhoneToCart = (price) => {
    setCartTotal({
      price: cartTotal.price + price,
    });
  };

  const [sum, setSum] = useState({ price: 0, text: "EUR" });

  const currencyChange = (id, price, text) => {
    setSum({
      [id]: sum.id,
      price: price,
      text: text,
    });
  };

  return (
    <div className="app">
      <PhonesList
        price={cartTotal.price}
        addPhoneToCart={addPhoneToCart}
        sum={sum}
        // price={sum.price}
        text={sum.text}
        currencyChange={currencyChange}
      />
    </div>
  );
};

export default App;
