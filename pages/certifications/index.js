import React, { useEffect, useState } from 'react';
// import pdf1 from './../../../Assets/pdf/12000_BTU.pdf'
// import pdf2 from './../../../Assets/pdf/12000_BTU_115_V.pdf'
// import pdf3 from './../../../Assets/pdf/18000_BTU.pdf'
// import pdf4 from './../../../Assets/pdf/24000_BTU.pdf'
// import pdf5 from './../../../Assets/pdf/36000_BTU.pdf'
import certificate from "../../public/images/certificate.WEBP";
import { ImageText } from '../Downloads/components/image-text';
import ahriCertified from '../../public/ahri-certified.webp';
import culusCertified from '../../public/culus-certified.webp';
import Footer from '../footer/index';
import styles from '../../styles/certificates.module.css'
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Header from '../../components/Header/index'

const Certifications = () => {

  const [viewMore, setVewMore] = useState([]);

  const pdfFiles = [
    {
      image: ahriCertified, certifiedList: [{
        image: ahriCertified,
        // file: pdf1,
        name: "12000 BTU"
      }, {
        image: ahriCertified,
        // file: pdf2,
        name: "12000 BTU 115 V"
      }, {
        image: ahriCertified,
        // file: pdf3,
        name: "18000 BTU"
      }, {
        image: ahriCertified,
        // file: pdf4,
        name: "24000 BTU"
      }, {
        image: ahriCertified,
        // file: pdf5,
        name: "36000 BTU"
      }]
    },
    { image: culusCertified, certifiedList: [] },
  ];

  useEffect(() => {
    const handlePopState = () => {
      if (viewMore?.length > 0) {
        window.history.forward();
      }
      setVewMore([]);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleViewMoreClick = (item) => {
    setVewMore([...item.certifiedList]);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'images/logo.avif'} alt="Logo" />
        </div>
        <ImageText image={certificate} text={"Certificates"} />
        <div className={styles.cercontainer}>
          {viewMore?.length <= 0 ?
            <>
              {pdfFiles?.map((item, index) => (
                <div key={index} className={styles.cerwrapper}>
                  <Link href={`${item?.file}`} target="_blank">
                    <Image
                      src={item?.image}
                      alt="cer Image"
                      className={styles.cerimage}
                    />
                  </Link>
                  <Typography className={styles.cername}>{item?.name}</Typography>
                  <button className={styles.viewmorebutton} onClick={() => handleViewMoreClick(item)}>
                    View More
                  </button>
                </div>
              ))}
            </>
            : <>
              {viewMore?.map((item, index) => (
                <div key={index} className={styles.cerwrapper}>
                  <Link href={`${item?.file}`} target="_blank">
                    <Image
                      src={item?.image}
                      alt="cer Image"
                      className={styles.cerimage}
                    />
                  </Link>
                  <Typography className={styles.cername}>{item?.name}</Typography>
                  <Link href={`${item?.file}`} target="_blank">
                    <button className={styles.viewmorebutton}>
                      View More
                    </button>
                  </Link>
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
