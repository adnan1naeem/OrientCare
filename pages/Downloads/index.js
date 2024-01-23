import React, { useEffect } from "react";
import videos from "../../public/images/videos.WEBP";
import blog from "../../public/images/blog.WEBP";
import certificate from "../../public/images/certificate.WEBP";
import catalouge from "../../public/images/catalouge.WEBP";
import product from "../../public/images/mobile-app.WEBP";
import mobile from "../../public/images/productmanual.WEBP";
import ImageText from "./components/imageText";
import Footer from '../footer/index'
import styles from '../../styles/downloads.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import Header from '../../components/Header/index'

const products = [
  { id: 1, key: 'Productmanuals', name: "Product Manuals", image: product },
  { id: 2, key: 'Videos', name: "Videos", image: videos },
  { id: 3, key: '', name: "Blogs", image: blog },
  { id: 4, key: 'Catalogue', name: "Catalouge", image: catalouge },
  { id: 5, key: 'Certifications', name: "Certifications", image: certificate },
  { id: 6, key: 'Mobileapp', name: "Mobile", image: mobile },
];

const Index = () => {
  const router = useRouter();

  const hanldeNextClick = (product) => {
    if (product?.id === 1) {
      router.push('/Productmanuals', { state: product })
      return;
    }
    if (product?.id === 2) {
      router.push('/Videos', { state: product })
      return;
    }
    if (product?.id === 4) {
      router.push('/Catalogue', { state: product })
      return;
    }
    if (product?.id === 5) {
      router.push('/Certifications', { state: product })
      return;
    }
    if (product?.id === 6) {
      router.push('/Mobileapp', { state: product })
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.header}>
        <img className={styles.img} src={'/images/logo.avif'} alt="Logo" />
        <h1 className={styles.headertitle}>Downloads</h1>
      </div>
      <div className={styles.gridcontainer}>
        {products.map((product) => (
          <div key={product?.id} className={styles.griditem}>
            <Link href={`${product?.key}`} onClick={() => hanldeNextClick(product)}>
              <ImageText image={product?.image} text={product?.name} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
