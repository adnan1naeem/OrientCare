import React from 'react';
import './style.css';

export const ImageText = ({image, text}) => {

  return (
    <div className='container'>
      <div className="top-section">
        <img
          src={image}
          alt="Top Image"
          className="top-image-component"
        />
        <p className='text-component'>{text}</p>
      </div>
    </div>
  );
};