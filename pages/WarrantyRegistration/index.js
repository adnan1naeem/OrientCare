import React from 'react';
import Footer from '../footer/index';
import styles from '../../styles/warrantyregistration.module.css'
import Header from '../../components/Header/index'
import { Typography } from '@mui/material';
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Header />
      <div>
        <div className={styles.div_one} style={{ paddingBottom: 20 }}>
          <img
            src={'/images/logo.avif'}
            alt="orient_logo"
            style={{ width: 160, paddingTop: "30px" }}
          />
          <h4 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px' }}>WARRANTY REGISTRATION</h4>
          <Typography style={{ fontSize: "12px", fontFamily: 'Helvetica,Arial,sans-serif,arial,serif', color: "#8A8A8A" }}>
            Register your warranty here.
          </Typography>
        </div>
        <div className={styles.WarrantyRegsec2}>


          <div className={styles.partleft}>
            <form id="Warranty-form">
              <Typography className={styles.warrantyformheading}>IDENTIFY YOUR PRODUCT</Typography>
              <div className={styles.Regformgroup}>
                <label for='producttype'>Product Type</label>
                <select className={styles.prodtype} id="prod-type" name="producttype" required>
                  <option value="">Select Product Type</option>
                  <option value="Mini Split Innverter Heat Pumps">Mini Split Innverter Heat Pumps</option>
                </select>
              </div>
              <div className={styles.Regformgroup}>
                <label for='unittype'>Unit Type</label>
                <select className={styles.unittype} id="unit-type" name="unittype" required>
                  <option value="">Select One</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Compressor">Compressor</option>
                  <option value="Outdoor Fan Motor">Outdoor Fan Motor</option>
                  <option value="Indoor Fan Motor">Indoor Fan Motor</option>
                  <option value="Louver">Louver</option>
                </select>
              </div>
              <div className={styles.Regformgroup}>
                <label for='modelnumber'>Model Number</label>
                <input type='text' id='model-num' className={styles.modelnum} />
              </div>
              <div className={styles.Regformgroup}>
                <label for='serialnumber'>Serial Number</label>
                <input type='text' id='serial-num' className={styles.serialnum} />
              </div>
              <div className={styles.Regformgroup}>
                <Link href={"WarrantyRegistrationForm"}>
                  <input type='submit' value={'Next'} />
                </Link>

              </div>
            </form>
          </div>
          <div className={styles.partright}>
            <img src={'/images/WarrantyRegistration.webp'} alt='logo' />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index