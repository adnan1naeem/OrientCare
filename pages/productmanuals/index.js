import React from 'react';
import { ImageText } from '../Downloads/components/image-text';
import Footer from '../footer/index';
import styles from '../../styles/productmanuals.module.css';
import mobile from "../../public/images/mobile-app.WEBP";
import Link from 'next/link';

const ProductManuals = () => {

  const pdfFiles = [
    { image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/002.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Remote Controller Manual" },
    { image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/003.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Smart Kit Manual" },
    { image: 'https://cdn.shopify.com/s/files/1/0767/9832/9113/files/001.jpg?v=1692279950', name: "Mini Split Inverter Heat Pump Installation & Care Manual" },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'/images/logo.avif'} alt="Logo" />
        </div>
        <ImageText image={mobile} text={"Product Manuals"} />
        <div className={styles.pdfcontainer}>

          {pdfFiles?.map((item, index) => (
            <div key={index} className={styles.pdfwrapper}>
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/uETDhITHQJ0?si=No7VDfbGqdD8RmXo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              {/* <Link href={`${item?.file}`} rel="noopener noreferrer">
                <img
                  src={item?.image}
                  alt="PDF Image"
                  className={styles.pdfimage}
                />
                <Typography className={styles.pdfname}>{item?.name}</Typography>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductManuals;
