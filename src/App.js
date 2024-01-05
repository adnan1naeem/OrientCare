import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header/header';
import Downloads from './Downloads';
import AboutUs from './Aboutus';
import ContactUs from './ContactUs';
import './App.css';
import ProductManuals from './Downloads/Pages/product-manuals';
import Catalogue from './Downloads/Pages/catalogue';
import MobileApp from './Downloads/Pages/mobile-app';
import Certifications from './Downloads/Pages/certifications';
import Videos from './Downloads/Pages/videos';
import Warranty from './Warranty/warranty';
import Home from './Home';

const Products = () => <div>Products Page Content</div>;
const Partners = () => <div>Partners Page Content</div>;

const App = () => {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/productManuals" element={<ProductManuals />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/mobileApp" element={<MobileApp />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
