import React from "react";
import "./home.css";
import Slider from "../../src/Downloads/components/Slider/Slider";
import ImageContainer from "../../src/Downloads/components/ImageContainer/Image_Container";
import smart_image from "../../src/Assets/smart_1.webp";
import image_one from "../../src/Assets/img_one.webp";
import image_two from "../../src/Assets/img_two.webp";
import image_three from "../../src/Assets/img_three.webp";
import image_four from "../../src/Assets/img_four.webp";
import image_five from "../../src/Assets/img_five.webp";
import image_six from "../../src/Assets/img_six.webp";
import air_handler from "../../src/Assets/Air_handler.webp";
import smart_image2 from "../../src/Assets/smart_2.webp";
import smart_image3 from "../../src/Assets/smart_3.webp";
import orient_logo from "../../src/Assets/why.png";
import logo_one from "../../src/Assets/logo_one.avif";
import last_image from "../../src/Assets/last_img.webp";
import Footer from "../Footer/index";
const Index = () => {
  return (
    <div className="main_div">
      <div>
        <Slider />
      </div>

      <div className="logo_home">
        <ImageContainer containerImage={logo_one} width="50%" />
      </div>
      <div className="para_div">
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
      <div className="heading">
        <h2>MINI SPLIT INVERTER HEAT PUMP</h2>
      </div>

      <div className="first_block">
        <ImageContainer containerImage={smart_image} width="100%" />
      </div>

      <div className="block">
        <ImageContainer containerImage={image_one} width="100%" />

        <ImageContainer containerImage={image_two} width={"100%"} />
      </div>
      <div className="block">
        <ImageContainer containerImage={image_three} width={"100%"} />

        <ImageContainer containerImage={image_four} width={"100%"} />
      </div>

      <div className="heading_one">
        <h2>MULTIZONE INVERTER HEAT PUMPS</h2>
      </div>

      <div className="first_block">
        <ImageContainer containerImage={smart_image2} width="100%" />
      </div>

      <div className="heading_two">
        <h2>AIR HANDLER UNIT INVERTER HEAT PUMP</h2>
      </div>

      <div className="first_block">
        <ImageContainer containerImage={air_handler} width="100%" />
      </div>

      <div className="block">
        <ImageContainer containerImage={image_five} width="100%" />
        <ImageContainer containerImage={image_six} width="100%" />
      </div>

      <div className="heading_one">
        <h2>SPARE PARTS</h2>
      </div>

      <div className="first_block">
        <ImageContainer containerImage={smart_image3} width="100%" />
      </div>

      <div className="logo_home">
        <ImageContainer containerImage={orient_logo} width="60%" />
      </div>

      <div className="last_block">
        <ImageContainer containerImage={last_image} width="100%" />
      </div>

      <div className="para_div">
        <p style={{ maxWidth: "90%" }}>
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
  );
};

export default Index;