import React from "react";
import "./Image_Container.css";

const ImageContainer = ({ containerImage, width }) => {
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
        style={{ width: width }}
      />
    </div>
  );
};

export default ImageContainer;
