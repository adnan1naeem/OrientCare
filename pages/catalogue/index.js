import React from 'react';
import ImageText from '../Downloads/components/imageText.js';
// import pdf from './../../../Assets/pdf/Mini_Splits_Inverter_Heat_Pump.pdf'
import catalogueImage from '../../public/Catalogue.webp'
import Footer from '../footer/index.js';
import styles from "../../styles/catalogue.module.css"
import { Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image.js';
import catalouge from '../../public/images/catalouge.WEBP'
import Header from "../../components/Header/index.js"


const Catalogue = () => {

  const pdfFiles = [
    {
      // file: pdf, 
      image: catalogueImage, name: "Mini Split Inverter Heat Pumps Catalogue"
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'/images/logo.avif'} alt="Logo" />
        </div>
        <ImageText image={catalouge} text={"Catalogue"} top={'-2.5rem'} />
        <div className={styles.pdfcontainer}>
          {pdfFiles?.map((item, index) => (
            <div key={index} className={styles.pdfwrapper}>
              <Link href={`${item?.file}`} target="_blank">
                <Image
                  src={item?.image}
                  alt="PDF Image"
                  className={styles.pdfimage}
                />
              </Link>
              <Typography className={styles.pdfname}>{item?.name}</Typography>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
