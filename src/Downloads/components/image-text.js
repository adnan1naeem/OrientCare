import React from 'react';
import './style.css';

export const ImageText = ({image, text}) => {

  return (
    <div className='container'>
      <div className="top-section">
        <img
          src={image}
          alt="Top Image"
          className="top-image"
        />
        <p className='text'>{text}</p>
      </div>
    </div>
  );
};