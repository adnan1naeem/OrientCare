import React from 'react';
import ImageText from '../downloads/components/imageText';
import Footer from '../footer/index';
import styles from '../../styles/productmanuals.module.css';
import mobile from "../../public/images/mobile-app.WEBP";
import Link from 'next/link';
import { Typography } from '@mui/material';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';
const Index = () => {

  const pdfFiles = [
    { file: '/pdf/Remote_Controller_User_Manual.pdf', image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/002.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Remote Controller Manual" },
    { file: '/pdf/Smart_Kit_User_manual.pdf', image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/003.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Smart Kit Manual" },
    { file: '/pdf/Installation_Care_Manual.pdf', image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/001.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Installation & Care Manual" },
  ];

  return (
    <>
      <Layout title={"Product manuals"} />
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'/images/logo.avif'} alt="Logo" />
        </div>
        <ImageText image={mobile} text={"Product Manuals"} />
        <div className={styles.pdfcontainer}>

          {pdfFiles?.map((item, index) => (
            <div key={index} className={styles.pdfwrapper}>
              <Link href={`${item?.file}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={item?.image}
                  alt="PDF Image"
                  className={styles.pdfimage}
                />
                <Typography className={styles.pdfname}>{item?.name}</Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
