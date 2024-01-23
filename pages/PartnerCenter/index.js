import React from 'react'
import Footer from '../footer/index';
import styles from '../../styles/partnercenter.module.css'
import Header from '../../components/Header/index'
import ReCAPTCHA from "react-google-recaptcha";

const index = () => {
    return (
        <>
            <Header />
            <div>
                <div className={styles.div_one} style={{ paddingTop: 50, paddingBottom: 20 }}>
                    <img
                        src={'/images/logo.avif'}
                        alt="orient_logo"
                        style={{ width: 160, paddingTop: "50px" }}
                    />
                    <h4 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px' }}>PARTNER CENTER</h4>
                </div>
                <div className={styles.partnercenter_element}>
                    <form className={styles.partnercenter_form}>
                        <div className={styles.partnercenter_input}>
                            <input type='text' name='username' placeholder='USER NAME' />
                            <input type='password' name='password' placeholder='PASSWORD' />
                        </div>
                        <div className={styles.partnercenter_submit}>
                            <input type='submit' name='submit' value='LOGIN' />
                        </div>
                        <div className={styles.captcha}>
                            <ReCAPTCHA
                                sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
                                onChange={(value) => console.log("Captcha value:", value)}
                            />
                        </div>
                    </form>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default index