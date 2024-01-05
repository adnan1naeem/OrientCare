import React from 'react';
import pdf1 from './../../../Assets/pdf/Remote_Controller_User_Manual.pdf'
import pdf2 from './../../../Assets/pdf/Smart_Kit_User_manual.pdf'
import pdf3 from './../../../Assets/pdf/Installation_Care_Manual.pdf'
import { ImageText } from '../../components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import logo from './../../../Assets/care-logo.png';

const ProductManuals = () => {
  const location = useLocation();
  const item = location.state;

  const pdfFiles = [
    { file: pdf1, image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/002.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Remote Controller Manual" },
    { file: pdf2, image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/003.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Smart Kit Manual" },
    { file: pdf3, image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/001.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Installation & Care Manual" },
  ];

  return (
    <div className='container'>
       <div className="header">
        <img className='img' src={logo} alt="Logo" />
      </div>
      <ImageText image={item?.image} text={item?.name} />
      <div className="pdf-container">
        {pdfFiles?.map((item, index) => (
          <div key={index} className="pdf-wrapper">
            <a href={item?.file} target="_blank">
              <img
                src={item?.image}
                alt="PDF Image"
                className="pdf-image"
              />
            </a>
            <p className='pdf-name'>{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManuals;
