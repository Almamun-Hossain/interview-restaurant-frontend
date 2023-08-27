import React from "react";

const Input = ({ required = true, ...props }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...props}
      required={required}
    />
  );
};

export default Input;
