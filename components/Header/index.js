import React, { useState } from "react";
import Link from 'next/link'
import styles from '../../styles/header.module.css';
// import logo from "./../Assets/care-logo.png";
import { HamburgetMenuClose, HamburgetMenuOpen } from './Icons';
import { IoIosArrowForward } from 'react-icons/io';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleButtonClick = () => {
    router.push('/aboutus');
  };

  const handleDownloads = () => {
    setClick(!click);
    navigate("/downloads");
  };

  const productArray = [
    {
      productKey: "products",
      productNamme: "MINI SPLIT INVERTER HEAT PUMPS",
    },
    { productKey: "", productNamme: "MULTIZONE INVERTER HEAT PUMPS" },
    {
      productKey: "",
      productNamme: "AIR HANDLER UNIT INVERTER HEAT PUMPS",
    },
    { productKey: "spareParts", productNamme: "SPARE PARTS" },
  ];

  const partnerArray = [
    {
      partnerKey: "PartnerSubPage",
      partnerNamme: "Become A Partner",
    },
    {
      partnerKey: "partnercenter",
      partnerNamme: "Partner Center",
    },
  ];

  const warrantyArray = [
    {
      warrantyKey: 'miniSplit',
      warrantyNamme: "Mini Split Inverter Heat Pumps",
      warrantyList: [
        { name: "Mini Split InDoor", key: "indoor" },
        { name: "Mini Split OutDoor", key: "outdoor" },
      ],
    },
    {
      warrantyKey: "miniSplit",
      warrantyNamme: "Multi-Zone Inverter Heat Pumps",
      warrantyList: [{ name: "Multi Zone OutDoor", key: "outdoor" }],
    },
    {
      warrantyKey: "",
      warrantyNamme: "Air Handler Unit Inverter Heat Pumps",
      warrantyList: [
        { name: "Air Handler InDoor", key: "indoor" },
        { name: "Air Handler OutDoor", key: "outdoor" },
      ],
    },
    {
      warrantyKey: "warrantyRegistration",
      warrantyNamme: "Warranty Registration",
      warrantyList: [],
    },
  ];

  return (
    <div>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/care-logo.png" alt="Logo" className={styles.mainLogo} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>

          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItem}>
              <Link className={styles.navLinks}
                onClick={handleClick} href="/">
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLinks} onClick={handleButtonClick} href="/aboutus">
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link className={styles.navLinks}
                  onClick={handleClick} href="/products">
                  Products
                </Link>
                {productArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {productArray?.map((product) => (
                      <Link className={styles.navLinksDropDown}
                        onClick={handleClick} key={product?.productKey} href={`/${product.productKey}`}>
                        {product?.productNamme}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link className={styles.navLinks}
                  onClick={handleClick} href="/BecomeaPartner">
                  Partners
                </Link>
                {partnerArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {partnerArray?.map((partner) => (
                      <Link
                        key={partner?.partnerKey}
                        href={`/${partner.partnerKey}`}
                        className={styles.navLinksDropDown}
                        onClick={handleClick}
                      >

                        {partner?.partnerNamme}

                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link href="/warrantyRegistration"
                  className={styles.navLinks}
                  onClick={handleClick}>

                  Warranty

                </Link>
                {warrantyArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {warrantyArray?.map((warranty) => (
                      <Link
                        key={warranty?.warrantyKey}
                        href={`/${warranty.warrantyKey}`}
                        className={styles.navLinksDropDown}
                        onClick={handleClick}
                      >

                        <div className={styles.warrantyArrow}>
                          {warranty?.warrantyNamme}
                          {warranty?.warrantyList &&
                            warranty?.warrantyList.length > 0 && (
                              <IoIosArrowForward style={{ marginTop: '3%' }} />
                            )}
                        </div>

                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/downloads"
                className={styles.navLinks}
                onClick={handleDownloads}>

                Downloads

              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLinks}
                onClick={handleClick}>

                Contact Us

              </Link>
            </li>
          </ul>

          <div className={styles.navIcon} onClick={handleClick}>
            {!click ? (
              <span className={styles.icon}>
                <HamburgetMenuOpen />
              </span>
            ) : (
              <span className={styles.icon}>
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
