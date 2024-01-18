import React from "react";
import "./Image_Container.css";

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
      <img
        src={containerImage}
        className="img"
        alt="image"
        style={{ width: width, height: height }}

      />
    </div>
  );
};

export default ImageContainer;
