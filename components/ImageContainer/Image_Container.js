import React from "react";
import Image from 'next/image'

const ImageContainer = ({ containerImage, width, height }) => {
  return (
    <div
      className="box"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Image
        src={containerImage}
        width={width}
        height={height}
        style={{ marginTop: 10 }}
        alt="image"
      />
    </div>
  );
};

export default ImageContainer;