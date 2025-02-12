// /app/week-3/item.js
import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 bg-gray-100 mb-2 rounded-md">
      <p className="font-bold text-xl">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
