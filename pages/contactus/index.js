import React, { useRef, useState } from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, Button, Box, CircularProgress } from '@mui/material';
import InputFields from './inputFields';
import Footer from '../footer/index';
import Header from '../../components/Header/index'
import emailjs from "@emailjs/browser";
import Layout from '../../components/layout';

function Index() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const formFields = form.current.elements;
        let isValid = true;

        for (let i = 0; i < formFields?.length - 1; i++) {
            if (formFields[i]?.value?.trim() === '') {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            alert("Please fill all the fields value.")
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                "service_m7iviec",
                "template_8ikyhiq",
                form.current,
                "VP_sXIW8hpiqoXG--"
            )
            .then(
                (result) => {
                    if (result?.text === "OK") {
                        alert("Your action was completed successfully.")
                    }
                },
                (error) => {
                    alert(error.text)
                    console.log("Error::: ", error.text);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };





    return (
        <>
            <Layout title={"Contact Us"} />
            <Header />
            <div>
                <Grid item sx={{ marginTop: '73px', textAlign: "center" }}>
                    <img src={'images/logo.avif'} alt="Logo" style={{ maxWidth: '160px' }} />
                    <Typography variant='h6'
                        sx={{
                            fontWeight: 700,
                            color: '#343538',
                            fontFamily: 'Montserrat',
                            fontSize: '18px',
                            lineHeight: '1.4'
                        }}>
                        CONTACT US
                    </Typography>
                </Grid>
                <Box sx={{
                    background: '#f2f2f2',
                    marginTop: 11,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '24%',
                    flexWrap: 'wrap'
                }}>
                    <Box item sx={{
                        paddingTop: '4.3%'
                    }}>
                        <Typography sx={{
                            color: '#595959',
                            fontSize: '20px',
                            fontWeight: '600',
                        }}>
                            EMAIL US
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={sendEmail}
                            ref={form}
                            name="contactForm"
                            sx={{ paddingTop: '3.5rem' }}>


                            <InputFields required={true} name="to_name" title={"Your Name"} />
                            <InputFields required={true} name="from_email" title={"Your email"} />
                            <InputFields required={true} name="subject" title={"Subject"} />
                            <InputFields required={true} name="message" multi title={"Your Message"} />
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: '700',
                                            color: '#8a8a8a',
                                            fontSize: '12px',
                                            lineHeight: '1.4',
                                            paddingLeft: { xs: '6px', sm: '5px', md: '2px' },
                                            textAlign: 'left',
                                            fontFamily: 'Arial, sans-serif',
                                            pt: '1%'

                                        }}
                                    >
                                        I consent to having this website store my submitted information so they can respond to my inquiry. See our privacy policy to learn more how we use data.
                                    </Typography>
                                }
                                sx={{
                                    display: 'flex',
                                    flexDirection: {
                                        xs: 'column',
                                        sm: 'column',
                                        md: 'column',
                                        lg: 'row',
                                    },
                                    alignItems: 'flex-start',
                                    width: {
                                        xs: '19rem',
                                        sm: '21rem',
                                        md: '20rem',
                                        lg: '31rem'
                                    },
                                    marginTop: '1rem',


                                }}
                            />
                            <Button
                                sx={{
                                    marginY: '10px',
                                    background: '#5cd6d6',
                                    width: '300px',
                                    height: '48px',
                                    mt: '20px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginBottom: '3rem',
                                    position: 'relative',
                                }}
                                onClick={sendEmail}
                                variant="contained"
                                disabled={loading}
                            >
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: 'white', position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px' }} />
                                ) : (
                                    'Send'
                                )}
                            </Button>
                        </Box>

                    </Box>
                    <Box sx={{ marginRight: "60px", marginBottom: "9%" }}>
                        <Grid
                            sx={{
                                mt: '48px',
                            }}>
                            <Typography sx={{
                                color: '#8A8A8A',
                                fontSize: '13px',
                                textAlign: "center",
                                fontWeight: '600',
                                marginRight: '8.3rem'
                            }}>
                                OR <br /> REACH US
                            </Typography>
                        </Grid>
                        <Grid
                            sx={{
                                marginX: 8,
                                textAlign: 'center',
                                color: '#8A8A8A',
                                mt: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                            }}
                        >
                            <img src={'/images/phone-1.webp'} style={{ width: '23px', marginRight: "6px" }} />
                            <Typography sx={{
                                color: '#8A8A8A',
                                fontSize: '20px',
                            }}>
                                Phone
                            </Typography>
                        </Grid>
                        <Typography sx={{
                            marginLeft: '20%',
                            marginRight: '10px',
                            color: '#8A8A8A',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '100'
                        }}>
                            +1 424 466 7757
                        </Typography>
                        <Grid
                            sx={{
                                marginRight: '10rem',
                                textAlign: 'center',
                                color: '#8A8A8A',
                                mt: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '50px'

                            }}
                        >
                            <img src={'/images/Email.webp'} style={{ width: '25px', marginRight: '3px' }} />
                            <Typography sx={{
                                color: '#8A8A8A',
                                fontSize: '20px',
                                fontFamily: 'Arial, sans-serif'
                            }}>
                                Email Address
                            </Typography>
                        </Grid>
                        <Typography sx={{
                            marginLeft: '5rem',
                            color: '#8A8A8A',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '100'

                        }}>Info@orientcare.us</Typography>
                    </Box>
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default Index;

