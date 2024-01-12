import React from 'react';
import { ImageText } from '../../components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import playstore from './../../../Assets/play.webp'
import appstore from './../../../Assets/App.webp'
import logo from './../../../Assets/care-logo.png';
import Footer from '../../../Footer/index';

const MobileApp = () => {
  const location = useLocation();
  const item = location.state;

  const Images = [
    { image: playstore, link: "https://play.google.com/store/apps/details?id=com.midea.aircondition&hl=en&gl=US" },
    { image: appstore, link: "https://apps.apple.com/ca/app/nethome-plus/id1008001920" }
  ];

  return (
    <>

      <div className='container'>
        <div className="header">
          <img className='img' src={logo} alt="Logo" />
        </div>
        <ImageText image={item?.image} text={item?.name} />
        <div className="image-container">
          {Images?.map((item, index) => (
            <div key={index} className="image-wrapper">
              <a href={item?.link} target="_blank">
                <img
                  src={item?.image}
                  alt="Image"
                  className="image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileApp;
