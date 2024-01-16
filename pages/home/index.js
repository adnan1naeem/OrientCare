import React from "react";
import styles from "../../styles/home.module.css";
import Slider from "../../components/Slider/Slider";
import ImageContainer from "../../components/ImageContainer/Image_Container";
import smart_image from "../../public/smart_1.webp";
import image_one from "../../public/img_one.webp";
import image_two from "../../public/img_two.webp";
import image_three from "../../public/img_three.webp";
import image_four from "../../public/img_four.webp";
import image_five from "../../public/img_five.webp";
import image_six from "../../public/img_six.webp";
import air_handler from "../../public/Air_handler.webp";
import smart_image2 from "../../public/smart_2.webp";
import smart_image3 from "../../public/smart_3.webp";
import orient_logo from "../../public/why.png";
import logo_one from "../../public/why.png";
import last_image from "../../public/last_img.webp";
import Footer from "../footer/index";
import { Box, Typography } from "@mui/material";
import CardsRow from './CardsRow'
import BannerImage from "./BannerImage";
import Header from '../../components/Header/index'

const Index = () => {
  return (
    <>

      <Header />
      <div className={styles.main_div}>
        <div>
          <Slider />
        </div>

        <div className={styles.logo_home}>
          <ImageContainer containerImage={logo_one} width="52%" />
        </div>
        <div className={styles.para_div}>
          <p>
            OrientCare is committed to provide its valued customers the ultimate
            care and comfort through its range of technologically advanced and
            innovative consumer electronics. The core of our product development
            philosophy is based on detailed research and consumer insights to
            offer enhanced lifestyle and peace of mind at every aspect of product
            usage.
            <br /> OrientCare having a global perspective, offers durable, cost
            effective and energy efficient products to a range of audiences and
            markets. These products are duly certified and tested conforming to
            quality standards as required in every region and market.
          </p>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

          }}>
          <Typography
            sx={{
              fontSize: '34px',
              fontWeight: '600',
              color: '#343538',
              textAlign: 'center',
            }}>
            MINI SPLIT INVERTER HEAT PUMP
          </Typography>
        </Box>
        <BannerImage containerImage={smart_image} />
        <CardsRow containerImage1={image_one} containerImage2={image_two} />
        <CardsRow containerImage1={image_three} containerImage2={image_four} />
        <div className={styles.heading_one}>
          <h2>MULTIZONE INVERTER HEAT PUMPS</h2>
        </div>
        <BannerImage containerImage={smart_image2} />
        <div className={styles.heading_two}>
          <h2>AIR HANDLER UNIT INVERTER HEAT PUMP</h2>
        </div>
        <BannerImage containerImage={air_handler} />
        <CardsRow containerImage1={image_five} containerImage2={image_six} />
        <div className={styles.heading_one}>
          <h2>SPARE PARTS</h2>
        </div>
        <BannerImage containerImage={smart_image3} />
        <div className={styles.logo_home}>
          <div className={styles.WhyLogo}>
            <ImageContainer containerImage={orient_logo} width="60%" />
          </div>

        </div>
        <BannerImage containerImage={last_image} />

        <div className={styles.para_div}>
          <p className={styles.paragraphHome}>
            OrientCare is synonymous with technologically advanced products which
            are duly certified and tested adhering to quality and performance
            parameters defined by respective markets.
            <br />
            Technologically advanced products are meticulously designed to offer a
            perfect blend of performance and intelligence. Its smart app control
            ensures a new and innovative level of convenience, making life easier.
            <br />
            OrientCare offers three types of air-conditioning solutions; Mini
            Split Inverter Heat Pumps, Air Handler Units inverter Heat Pumps, and
            Multi-zone Inverter Heat Pumps, offering a range of innovative
            features and technologies.
            <br />
            With OrientCare, you can trust your choice that not only aligns with
            your needs, but is also backed by a reliable and efficient aftersales
            services and availability of parts required.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
