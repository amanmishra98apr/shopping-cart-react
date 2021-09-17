// import logo from './logo.svg';
import "./App.css";
import { Counter } from "./components/Counter";
import { Cart } from "./components/Cart";
import React, { useState } from "react";

function App() {
  let arr = [
    {
      id: 0,
      item: "mango",
      value: 0,
      price: 0,
    },
    {
      id: 1,
      item: "chocolate",
      value: 0,
      price: 0,
    },
    {
      id: 2,
      item: "banana",
      value: 0,
      price: 0,
    },
    {
      id: 3,
      item: "kurkure",
      value: 0,
      price: 0,
    },
  ];
  const [items, setItems] = useState(arr);
  const [totalCounts, setTotalCounts] = useState(0);

  // delete Item function
  const onDelete = async (item) => {
    setItems(
      items.filter((e) => {
        return e !== item;
      })
    );
    setTotalCounts(totalCounts - item.value);
  };

  // increment function
  const inc = async (item) => {
    setTotalCounts(totalCounts + 1);

    items.find((arrItem) => arrItem === item).value += 1;
  };

  // descrement function
  const desc = async (item) => {
    setTotalCounts(totalCounts - 1);
    items.find((arrItem) => arrItem === item).value -= 1;
    // remove item from cart if item value is 0
    if (!items.find((arrItem) => arrItem === item).value) {
      setItems(
        items.filter((e) => {
          return e !== items.find((arrItem) => arrItem === item);
        })
      );
    }
  };

  // reset function
  const reset = async () => {
    setTotalCounts(0);
    items.find((item) => (item.value = 0));
  };

  return (
    <>
      <Counter totalCounts={totalCounts} />
      <Cart
        inc={inc}
        desc={desc}
        onDelete={onDelete}
        items={items}
        totalCounts={totalCounts}
        reset={reset}
      />
    </>
  );
}

export default App;
