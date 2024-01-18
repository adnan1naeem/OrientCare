import React from 'react';
import { ImageText } from '../../Downloads/components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import pdf from './../../../Assets/pdf/Mini_Splits_Inverter_Heat_Pump.pdf'
import catalogueImage from './../../../Assets/Catalogue.webp'
import logo from './../../../Assets/care-logo.png';
import Footer from '../../Footer/index';

const Catalogue = () => {
  const location = useLocation();
  const item = location.state;

  const pdfFiles = [
    { file: pdf, image: catalogueImage, name: "Mini Split Inverter Heat Pumps Catalogue" },
  ];

  return (
    <>

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
      <Footer />
    </>
  );
};

export default Catalogue;
