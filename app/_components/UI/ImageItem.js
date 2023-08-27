import Image from "next/image";
import React from "react";

const ImageItem = ({ src, title }) => {
  return (
    <Image
      src={src}
      alt={title}
      height={100}
      width={400}
      className="mb-2 h-52 w-full object-cover"
    />
  );
};

export default ImageItem;
