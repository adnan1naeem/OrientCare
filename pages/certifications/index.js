import React, { useEffect, useState } from 'react';
import certificate from "../../public/images/certificate.WEBP";
import ImageText from '../downloads/components/imageText';
import ahriCertified from '../../public/ahri-certified.webp';
import culusCertified from '../../public/culus-certified.webp';
import Footer from '../footer/index';
import styles from '../../styles/certificates.module.css'
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';

const Index = () => {

  const [viewMore, setVewMore] = useState([]);

  const pdfFiles = [
    {
      image: ahriCertified, certifiedList: [{
        image: ahriCertified,
        file: '/pdf/12000_BTU.pdf',
        name: "12000 BTU"
      }, {
        image: ahriCertified,
        file: '/pdf/12000_BTU_115_V.pdf',
        name: "12000 BTU 115 V"
      }, {
        image: ahriCertified,
        file: '/pdf/18000_BTU.pdf',
        name: "18000 BTU"
      }, {
        image: ahriCertified,
        file: '/pdf/24000_BTU.pdf',
        name: "24000 BTU"
      }, {
        image: ahriCertified,
        file: '/pdf/36000_BTU.pdf',
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
      <Layout title={"Certificates"} />
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'images/logo.avif'} alt="Logo" />
        </div>
        <ImageText mb={'3.5rem'} top={"-2rem"} image={certificate} text={"Certificates"} />
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

export default Index;
