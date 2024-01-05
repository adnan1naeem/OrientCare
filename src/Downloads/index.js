import React from "react";
import "./style.css";
import videos from "./../Assets/videos.png";
import blog from "./../Assets/blog.png";
import certificate from "./../Assets/certificate.png";
import catalouge from "./../Assets/catalouge.png";
import product from "./../Assets/product-manual.png";
import mobile from "./../Assets/mobile-app.png";
import logo from "./../Assets/care-logo.png";
import { useNavigate } from "react-router-dom";
import { ImageText } from "./components/image-text";

const products = [
  { id: 1, name: "Product Manuals", image: product },
  { id: 2, name: "Videos", image: videos },
  { id: 3, name: "Blogs", image: blog },
  { id: 4, name: "Catalouge", image: catalouge },
  { id: 5, name: "Certificate", image: certificate },
  { id: 6, name: "Mobile App", image: mobile },
];

const Index = ({}) => {
  const navigate = useNavigate();

  const productMunals = (product) => {
    navigate("/productManuals", { state: product });
  };

  return (
    <div>
      <div className="header">
        <img className="img" src={logo} alt="Logo" />
        <h1 className="header-title">Downloads</h1>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid-item"
            onClick={() => productMunals(product)}
          >
            <ImageText image={product?.image} text={product?.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
