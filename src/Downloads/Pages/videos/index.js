import React from 'react';
import { ImageText } from '../../components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import videoBanner from './../../../Assets/videoBanner.webp';

const Videos = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <div>
      <div className="full-image-container">
        <img
          className="full-image"
          src={videoBanner}
          alt="Banner Image"
        />
      </div>
      <ImageText image={item?.image} text={item?.name} />
      <div className="Youtube">
        <div className="banner">
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/uETDhITHQJ0?si=No7VDfbGqdD8RmXo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h4 className="text-h4">OrientCare Launch Event in Los Angeles, California</h4>
          <a href="https://www.youtube.com/watch?v=uETDhITHQJ0">
            <button className="button">
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
