import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { miniSplit } from "../../../constants/ArrayValues";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#153A8D",
        marginRight: "1%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{ ...style, display: "block", color: "#153A8D", marginLeft: '-3%' }}
      onClick={onClick}
    />
  );
}

function Index() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    marginLeft: 100,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box sx={{}}>


      <Box sx={{
        marginLeft: "9%",
        marginRight: "8%",
        marginBottom: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>

        <Slider {...settings}>
          {miniSplit?.map((item, index) => (
            <>
              <Image
                style={{ width: "80%" }}
                src={item?.img}
                alt={`Slider ${index + 1}`}
              />
              <Typography sx={{
                width: '230px', textAlign: 'center',
                color: '#252614',
                fontSize: '14px',
                fontWeight: '700',
              }}>{item?.description}</Typography>
            </>


          ))}
        </Slider>

      </Box>
    </Box>
  );
}

export default Index;