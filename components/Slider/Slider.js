import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrPrevious, GrNext } from "react-icons/gr";
import slider_1 from "../../public/main-banner_1.webp";
import slider_2 from "../../public/main-banner_2.webp";
import Image from 'next/image'
import "swiper/css";

function Slider() {
  const slider = [slider_1, slider_2];
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // State to track desktop view
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the threshold as per your needs
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const { isEnd } = swiperRef.current.swiper;
        if (isEnd) {
          swiperRef.current.swiper.slideTo();
        } else {
          swiperRef.current.swiper.slideNext();
        }
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && isDesktop && (
        <>
          <div
            style={{
              position: "absolute",
              top: "45%",
              right: "3%",
              zIndex: 99,
              fontSize: 40,
              cursor: "pointer",
              color: "blue",
            }}
            onClick={goNext}
          >
            <GrNext />
          </div>
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "1%",
              zIndex: 99,
              fontSize: 40,
              cursor: "pointer",
              color: "blue",
            }}
            onClick={goPrev}
          >
            <GrPrevious style={{ color: "blue" }} />
          </div>
        </>
      )}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        ref={swiperRef}
      >
        {slider?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              style={{ width: "100%" }}
              src={item}
              alt={`Slider ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
