import React, { useEffect, useState } from 'react';
import pdf1 from './../../../Assets/pdf/12000_BTU.pdf'
import pdf2 from './../../../Assets/pdf/12000_BTU_115_V.pdf'
import pdf3 from './../../../Assets/pdf/18000_BTU.pdf'
import pdf4 from './../../../Assets/pdf/24000_BTU.pdf'
import pdf5 from './../../../Assets/pdf/36000_BTU.pdf'
import { ImageText } from '../../components/image-text';
import './style.css';
import { useLocation } from 'react-router-dom';
import logo from './../../../Assets/care-logo.png';
import ahriCertified from './../../../Assets/ahri-certified.webp';
import culusCertified from './../../../Assets/culus-certified.webp';
import Footer from '../../../Footer/index';

const Certifications = () => {
  const location = useLocation();
  const item = location.state;
  const [viewMore, setVewMore] = useState([]);

  const pdfFiles = [
    { image: ahriCertified, certifiedList: [{ image: ahriCertified, file: pdf1, name: "12000 BTU" }, { image: ahriCertified, file: pdf2, name: "12000 BTU 115 V" }, { image: ahriCertified, file: pdf3, name: "18000 BTU" }, { image: ahriCertified, file: pdf4, name: "24000 BTU" }, { image: ahriCertified, file: pdf5, name: "36000 BTU" }] },
    { image: culusCertified, certifiedList: [] },
  ];

  window.onpopstate = () => {
    if (viewMore?.length > 0) {
      window.history.forward();
    }
    setVewMore([]);
  };

  const handleViewMoreClick = (item) => {
    setVewMore([...item.certifiedList]);
  }

  return (
    <>

      <div className='container'>
        <div className="header">
          <img className='img' src={logo} alt="Logo" />
        </div>
        <ImageText image={item?.image} text={item?.name} />
        <div className="cer-container">
          {viewMore?.length <= 0 ?
            <>
              {pdfFiles?.map((item, index) => (
                <div key={index} className="cer-wrapper">
                  <a href={item?.file} target="_blank">
                    <img
                      src={item?.image}
                      alt="cer Image"
                      className="cer-image"
                    />
                  </a>
                  <p className='cer-name'>{item?.name}</p>
                  <button className="view-more-button" onClick={() => handleViewMoreClick(item)}>
                    View More
                  </button>
                </div>
              ))}
            </>
            : <>
              {viewMore?.map((item, index) => (
                <div key={index} className="cer-wrapper">
                  <a href={item?.file} target="_blank">
                    <img
                      src={item?.image}
                      alt="cer Image"
                      className="cer-image"
                    />
                  </a>
                  <p className='cer-name'>{item?.name}</p>
                  <a href={item?.file} target="_blank">
                    <button className="view-more-button">
                      View More
                    </button>
                  </a>
                </div>
              ))}
            </>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certifications;
