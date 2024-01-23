import React, { useRef } from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, Button, Box } from '@mui/material';
import InputFields from './TextField';
import Footer from '../footer/index';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';

function Index() {

    return (
        <>
            <Layout title={"Warranty form - orient"} />
            <Header />
            <div>
                <Grid item sx={{ marginTop: '73px', textAlign: "center" }}>
                    <img
                        src={'/images/logo.avif'}
                        alt="orient_logo"
                        style={{ width: 160, paddingTop: "30px" }}
                    />
                    <Typography variant='h4' style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px' }}>WARRANTY REGISTRATION</Typography>
                    <Typography sx={{ fontSize: "12px", fontFamily: 'Helvetica,Arial,sans-serif,arial,serif', color: "#8A8A8A", pt: '2px' }}>
                        Add Your Personal Info We Will Contact You Shortly
                    </Typography>
                </Grid>

                <Box sx={{
                    marginTop: 11,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    // alignItems: 'center'
                }}>
                    <Grid item sx={{
                        pl: { xs: '', sm: '5rem', md: '5rem', lg: '5rem' },
                        width: { xs: '22rem', sm: "35rem", md: '40rem', lg: '40rem' },

                    }}>
                        <Box
                            component="form"
                            name="contactForm">
                            <InputFields type={"text"} title={"Your Name"} />
                            <InputFields type={"number"} title={"Your Phone Number"} />
                            <InputFields type={"email"} title={"Your Email"} />
                            <InputFields type={"text"} title={"Your Postal Address"} />
                            <InputFields type={"text"} title={"Your Postal Address"} />
                        </Box>
                    </Grid>



                    <Grid item sx={{
                        pl: { xs: '', sm: '5rem', md: '5rem', lg: '5rem' },
                        width: { xs: '22rem', sm: "35rem", md: '40rem', lg: '40rem' },
                    }}>
                        <Box
                            component="form"
                            name="contactForm"
                            sx={{}}>
                            <InputFields type={"date"} title={"Date of Purchase"} />
                            <InputFields type={"text"} title={"Name of Registered Installer (optional)"} />
                            <InputFields type={"date"} title={"Date of Purchase"} />
                            <InputFields type={"text"} title={"Name of Shop / Dealer from whom the unit is purchased"} />

                        </Box>
                    </Grid>



                </Box>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Button
                        sx={{
                            background: '#D9D9D9',
                            width: '220px',
                            height: '70px',
                            fontWeight: '600',
                            textTransform: 'none',
                            marginBottom: '3rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: '3rem'
                        }}
                        variant="contained"
                    >
                        Send
                    </Button>
                </div>

            </div >
            <Footer />
        </>
    );
}

export default Index;


