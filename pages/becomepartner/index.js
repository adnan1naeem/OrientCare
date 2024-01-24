import React from 'react'
import Footer from '../footer/index';
import styles from '../../styles/becomeapartner.module.css'
import { Typography, Button, Grid, FormControlLabel, Checkbox } from '@mui/material';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';
import { useRouter } from "next/router";


const Index = () => {

    const router = useRouter();
    const sendEmail = (e) => {
        e.preventDefault();
        const isCheckboxChecked = document.getElementsByName("checkbox")[0].checked;
        if (!isCheckboxChecked) {
            alert("Please consent to the privacy policy.");
            return;
        }

        router.push("/success");
    };

    return (
        <>

            <Layout title={"Become A Partner"} />
            <Header />
            <div>
                <div className={styles.div_one} style={{ paddingTop: 50 }}>
                    <img
                        src={'/images/logo.avif'}
                        alt="orient_logo"
                        style={{ width: 160, paddingTop: "50px" }}
                    />
                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px', paddingTop: '10px', textAlign: 'center', color: '#343538' }} >
                        WANT TO BE OUR PARTNER<br />
                    </Typography>
                    <Typography style={{ fontSize: "15px", textAlign: 'center', color: '#8A8A8A' }}>
                        Intrested in doing business with OrientCare?<br /><br />
                        Tell us more about your company
                    </Typography>
                </div>

                <div className={styles.element1}>
                    <form className={styles.becomeapartner_form} onSubmit={sendEmail}>
                        <div className={styles.input_element}>
                            <div className={styles.form_group}>
                                <label for="firstName">First Name</label>
                                <input type="text" className={styles.form_control_1} id="firstName" name="firstName" required />
                            </div>
                            <div className={styles.form_group}>
                                <label for="Email">Email Address</label>
                                <input type="email" className={styles.form_control_1} id="Email" name="Email" required />
                            </div>
                        </div>
                        <div className={styles.input_element}>
                            <div className={styles.form_group}>
                                <label for="lname">Last Name</label>
                                <input type="text" className={styles.form_control_1} id="lname" name="lastname" required />
                            </div>
                            <div className={styles.form_group}>
                                <label for="phonenumber">Phone Number</label>
                                <input type="number" className={styles.form_control_1} id="number" name="number" required />
                            </div>
                        </div>
                        <div className={styles.input_element}>
                            <div className={styles.form_group}>
                                <label for="yourtitle">Your Title</label>
                                <input type="text" className={styles.form_control_1} id="firstName" name="yourtitle" required />
                            </div>
                            <div className={styles.form_group}>
                                <label for="inquiry">Inquiry Type</label>
                                <select className={styles.form_control_1} id="inquiry" name="inquiry" required>
                                    <option value=""></option>
                                    <option value="Want to be a dealer?">Want to be a dealer?</option>
                                    <option value="Want to be a disctibutor?">Want to be a disctibutor?</option>
                                    <option value="Want to be an installer or service Technician?">Want to be an installer or service Technician?</option>
                                </select>
                            </div>
                        </div>
                        <FormControlLabel
                            control={<Checkbox />}
                            name="checkbox"
                            label={
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: '700',
                                        color: '#8a8a8a',
                                        fontSize: '12px',
                                        paddingLeft: { xs: '6px', sm: '5px', md: '2px' },
                                        lineHeight: '1.4', textAlign: 'left', fontFamily: 'Arial, sans-serif', pt: '1.2%', alignItems: 'center'
                                    }}
                                >
                                    I consent to having this website store my submitted information so they can respond to my inquiry.
                                    See our privacy policy to learn more about how we use data.
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                width: '80%',
                                ml: '5.8%',
                            }}
                        />

                        <Grid
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}>
                            <Button
                                sx={{
                                    background: '#5cd6d6',
                                    width: '185px',
                                    height: '50px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginBottom: '3rem',
                                    mt: '3.5rem',
                                }}
                                type='submit'
                                variant="contained"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </form>

                </div>
                <Footer />
            </div>
        </>

    )
}

export default Index
