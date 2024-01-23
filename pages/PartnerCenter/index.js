import React from 'react'
import Footer from '../footer/index';
import styles from '../../styles/partnercenter.module.css'
import Header from '../../components/Header/index'
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Grid } from '@mui/material';

const Index = () => {
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


                        <Grid style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // mt: '20rem'

                        }}>
                            <Button
                                sx={{
                                    background: '#5cd6d6',
                                    width: '12rem',
                                    height: '3.9rem',
                                    textTransform: 'none',
                                    fontSize: '16px'
                                }}
                                variant="contained"
                            >
                                LOGIN
                            </Button>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 10
                        }}>
                            <ReCAPTCHA
                                sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
                                onChange={(value) => console.log("Captcha value:", value)}
                            />
                        </Grid>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index