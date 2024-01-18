import React from 'react'
import Footer from '../footer/index';
import styles from '../../styles/becomeapartner.module.css'
import { Typography } from '@mui/material';
import Header from '../../components/Header/index'

const index = () => {
    return (
        <>
            <Header />
            <div>
                <div className={styles.div_one} style={{ paddingTop: 50 }}>
                    <img
                        src={'/images/logo.avif'}
                        alt="orient_logo"
                        style={{ width: 160, paddingTop: "50px" }}
                    />
                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px', paddingTop: '10px', textAlign: 'center' }} >
                        WANT TO BE OUR PARTNER<br />
                        <per style={{ fontSize: "15px", }}>
                            Intrested in doing business with OrientCare?<br />
                            Tell us more about your company
                        </per>
                    </Typography>


                </div>



                <div className={styles.element1}>
                    <form method="POST" className={styles.becomeapartner_form}>
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
                                <input type="number" className={styles.form_control_1} id="Email" name="Email" required />
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

                        <div className={styles.form_checkbox_1}>
                            <input type='checkbox' className={styles.form_check_input} id='acceptCheckbox' />
                            <label className={styles.form_check_label} for='acceptCheckbox'>I consent to having this website store my submitted information so they can respond to my inquiry.See our privacy policy to learn more how we use data.</label>
                        </div>


                        <div className={styles.form_submit}>
                            <input type='submit' className={styles.becomeapartner_btn} />
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default index