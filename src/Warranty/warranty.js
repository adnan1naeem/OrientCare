import React from "react";
import "./warranty.css";
import logo_one from "../Assets/logo_one.avif";
import logo_two from "../Assets/one-year.webp";

const warranty = () => {
  return (
    <div>
      <div className="div_one">
        <img
          src={logo_one}
          alt="orient_logo"
          style={{ width: 160, paddingTop: "50px" }}
        />
        <h4>LIMITED WARRANTY</h4>
        <p style={{ fontSize: "15px" }}>
          Mini Split Inverter Heat Pump InDoor Unit
        </p>
      </div>

      <div className="div_second">
        <img src={logo_two} width={"160px"} alt="warranty_logo"/>
        <p style={{ fontSize: "12px", fontFamily: "sans-serif" }}>
          One(1)year on all parts
        </p>
      </div>
    </div>
  );
};

export default warranty;
