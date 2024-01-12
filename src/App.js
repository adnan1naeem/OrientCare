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
import Products from './Products/index';
import SpareParts from "./SpareParts/index";
import ProductsDetail from './Products/ProductsDetail';
import BecomeaPartner from './Partners/BecomeaPartner';
import PartnerSubPage from './PartnerSubpage/Become/index';
import PartnerCenter from './PartnerSubpage/PartnerCenter/index';
import WarrantyRegistration from './Warranty/WarrantyRegistration/index';
import MiniSplit from './Warranty/MiniSplitIndor/index';
import ScrollToTop from 'react-scroll-to-top';
import TermsConditions from './TermsAndConditions/index'
import PrivacyPolicy from './PrivacyPolicy/index'


// const Products = () => <div>Products Page Content</div>;
// const Partners = () r=> <div>Partners Page Content</div>;

const App = () => {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/BecomeaPartner" element={<BecomeaPartner />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/productManuals" element={<ProductManuals />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/mobileApp" element={<MobileApp />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/spareParts" element={<SpareParts />} />
          <Route path="/productsDetail" element={<ProductsDetail />} />
          <Route path="/PartnerSubPage" element={<PartnerSubPage />} />
          <Route path="/partnercenter" element={<PartnerCenter />} />
          <Route path="/warrantyRegistration" element={<WarrantyRegistration />} />
          <Route path="/miniSplit" element={<MiniSplit />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />




        </Routes>
        <ScrollToTop smooth color={"white"} height={20} style={{ background: "#404040", borderRadius: '0px', height: '45px', width: '45px' }} />
      </Router>
    </div>
  );
};

export default App;
