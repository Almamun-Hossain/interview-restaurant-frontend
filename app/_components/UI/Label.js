import React from "react";

const Label = ({ title }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {title}
    </label>
  );
};

export default Label;
