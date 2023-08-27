import React from "react";

const Price = ({ value }) => {
  return <p className="text-green-600">${value.toFixed(2)}</p>;
};

export default Price;
