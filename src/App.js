import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header/header';
import Downloads from './Downloads';
import './App.css';

const Home = () => <div>Home Page Content</div>;
const AboutUs = () => <div>About Us Page Content</div>;
const Products = () => <div>Products Page Content</div>;
const Partners = () => <div>Partners Page Content</div>;
const Warranty = () => <div>Warranty Page Content</div>;
const ContactUs = () => <div>Contact Us Page Content</div>;

const App = () => {
  return (
    <div className='main'>
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
