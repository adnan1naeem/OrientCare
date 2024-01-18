import React from 'react';
import { ImageText } from '../Downloads/components/image-text.js';
import playstore from '../../public/play.webp'
import appstore from '../../public/App.webp'
import Footer from '../footer/index.js';
import styles from '../../styles/mobileapp.module.css'
import Link from 'next/link';
import Image from 'next/image';
import App from '../../public/images/productmanual.WEBP'
import Header from '../../components/Header/index.js'


const Index = () => {

  const Images = [
    { image: playstore, link: "https://play.google.com/store/apps/details?id=com.midea.aircondition&hl=en&gl=US" },
    { image: appstore, link: "https://apps.apple.com/ca/app/nethome-plus/id1008001920" }
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={'/images/logo.avif'} alt="Logo" />
        </div>
        <ImageText image={App} text={"Mobile App"} />
        <div className={styles.imagecontainer}>
          {Images?.map((item, index) => (
            <div key={index} className={styles.imagewrapper}>
              <Link href={item?.link} target="_blank">
                <Image
                  src={item?.image}
                  alt="Image"
                  className={styles.image}
                />
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
