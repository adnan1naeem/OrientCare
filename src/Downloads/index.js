import React from 'react';
import './style.css';
import videos from './../assests/videos.png';
import blog from './../assests/blog.png';
import certificate from './../assests/certificate.png';
import catalouge from './../assests/catalouge.png';
import product from './../assests/product-manual.png';
import mobile from './../assests/mobile-app.png';
import logo from './../assests/care-logo.png';

const products = [
  { id: 1, name: 'Product Manuals', image: product },
  { id: 2, name: 'Videos', image: videos },
  { id: 3, name: 'Blogs', image: blog },
  { id: 4, name: 'Catalouge', image: catalouge },
  { id: 5, name: 'Certificate', image: certificate },
  { id: 6, name: 'Mobile App', image: mobile },
];

const Index = () => {
  return (
    <div>
      <div className="header">
        <img className='img' src={logo} alt="Logo" />
        <h1 className="header-title">Downloads</h1>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <img src={product?.image} alt={product.name} width={100} height={100} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;