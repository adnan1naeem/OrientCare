import Image from 'next/image';
import Footer from '../footer/index';
import styles from '../../styles/about.module.css';
// import banner from '../../public/Banner_orient.webp';
// import logo from '../../public/why.avif';

function Index() {
    return (

        <div className={styles.app}>
            {/* <Image src={`/public/Banner_orient.webp`} alt="something" height={150} width={200} /> */}

            {/* <img src={logo} className={styles.Applogo} /> */}
            <div className={styles.logoContainer}>
                {/* <img src={'/public/why.avif'} className={styles.logo} alt="logo" /> */}
            </div>
            <div className={styles.descriptionContainer} style={{ marginTop: '1.5%' }}>
                <p className={styles.description}>
                    OrientCare is committed to provide its valued customers the ultimate care and comfort through its range of technologically advanced and innovative consumer electronics. The core of our product development philosophy is based on detailed research and consumer insights to offer enhanced lifestyle and peace of mind at every aspect of product usage.
                    <br /><br />
                    OrientCare having a global perspective, offers durable, cost effective and energy efficient products to a range of audiences and markets. These products are duly certified and tested conforming to quality & performance standards as required in every region where these are being marketed.
                    <br /><br />
                    Our ultimate goal is to maintain the highest quality standards and uphold our brand’s core essence of care and innovation in terms of technology, research, and development. OrientCare offers three types of air-conditioning solutions; Mini Split Inverter Heat Pumps, Multi-zone Inverter Heat Pumps and Air Handler Units Inverter Heat Pumps offering a range of innovative features and technologies. With OrientCare, you can trust your choice that not only aligns with your needs, but is also backed by a reliable and efficient aftersales services and availability of parts required.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Index;



