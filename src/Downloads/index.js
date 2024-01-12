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
import Footer from '../Footer/index'

const products = [
  { id: 1, name: "Product Manuals", image: product },
  { id: 2, name: "Videos", image: videos },
  { id: 3, name: "Blogs", image: blog },
  { id: 4, name: "Catalouge", image: catalouge },
  { id: 5, name: "Certificate", image: certificate },
  { id: 6, name: "Mobile App", image: mobile },
];

const Index = ({ }) => {
  const navigate = useNavigate();

  const hanldeNextClick = (product) => {
    if (product?.id === 1) {
      navigate('/productManuals', { state: product })
      return;
    }
    if (product?.id === 2) {
      navigate('/videos', { state: product })
      return;
    }
    if (product?.id === 4) {
      navigate('/catalogue', { state: product })
      return;
    }
    if (product?.id === 5) {
      navigate('/certifications', { state: product })
      return;
    }
    if (product?.id === 6) {
      navigate('/mobileApp', { state: product })
      return;
    }
  }

  return (
    <div>
      <div style={{paddingTop:'20px'}} className="header">
        <img className="img" src={logo} alt="Logo" />
        <h1 style={{fontWeight:'700', fontFamily:'Montserrat', fontSize:'18px'}} className="header-title">Downloads</h1>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item" onClick={() => hanldeNextClick(product)}>
            <ImageText image={product?.image} text={product?.name} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
