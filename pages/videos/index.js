import React from 'react';
import ImageText from '../downloads/components/imageText';
import Footer from '../footer/index';
import styles from '../../styles/videos.module.css'
import video from '../../public/images/videos.WEBP'
import videoBanner from '../../public/videoBanner.webp'
import Image from 'next/image';
import Header from '../../components/Header/index'
import Link from 'next/link'
import Layout from '../../components/layout';

const Index = () => {

  return (

    <div>
      <Layout title={"Videos"} />
      <Header />
      <div className={styles.fullimagecontainer}>
        <Image
          className={styles.fullimage}
          src={videoBanner}
          alt="Banner Image"
        />
      </div>
      <ImageText mb={'3.5rem'} top={"-2rem"} image={video} text={"Video"} />
      <div className={styles.Youtube}>
        <div className={styles.banner}>
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/uETDhITHQJ0?si=No7VDfbGqdD8RmXo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h4 className={styles.texth4}>OrientCare Launch Event in Los Angeles, California</h4>
          <Link href="https://www.youtube.com/watch?v=uETDhITHQJ0">
            <button className={styles.button}>
              View More
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
