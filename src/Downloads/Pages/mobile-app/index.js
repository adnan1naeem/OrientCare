import React from 'react';
import { ImageText } from '../../components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import playstore from './../../../Assets/play.webp'
import appstore from './../../../Assets/App.webp'
import logo from './../../../Assets/care-logo.png';

const MobileApp = () => {
  const location = useLocation();
  const item = location.state;

  const Images = [
    { image: playstore , link:""},
    { image: appstore , link:""}
  ];

  return (
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
  );
};

export default MobileApp;
