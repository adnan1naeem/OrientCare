import React, { useRef, useState } from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, Button, Box } from '@mui/material';
import InputFields from './TextField';
import Footer from '../footer/index';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';
import { useRouter } from "next/router";


function Index() {
    const form = useRef();
    const router = useRouter();

    const sendEmail = (e) => {
        e.preventDefault();
        router.push("/Sucess");
    };


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

                <Box
                    component="form"
                    name="warrentyform"
                    onSubmit={sendEmail}
                    ref={form}
                    sx={{
                        marginTop: 11,
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    <Grid item sx={{
                        pl: { xs: '', sm: '5rem', md: '5rem', lg: '5rem' },
                        width: { xs: '22rem', sm: "35rem", md: '40rem', lg: '40rem' },

                    }}>
                        <Box>
                            <InputFields type={"text"} name={"name"} title={"Your Name"} />
                            <InputFields type={"number"} name={"number"} title={"Your Phone Number"} />
                            <InputFields type={"email"} name={'email'} title={"Your Email"} />
                            <InputFields type={"text"} name={'postal'} title={"Your Postal Address"} />
                            <InputFields type={"text"} name={'adress'} title={"Your Postal Address"} />
                        </Box>
                    </Grid>
                    <Grid item sx={{
                        pl: { xs: '', sm: '5rem', md: '5rem', lg: '5rem' },
                        width: { xs: '22rem', sm: "35rem", md: '40rem', lg: '40rem' },
                    }}>
                        <Box sx={{}}>
                            <InputFields type={"date"} name={"date"} title={"Date of Purchase"} />
                            <InputFields type={"text"} name={"installer"} title={"Name of Registered Installer"} />
                            <InputFields type={"date"} name={"purchase"} title={"Date of Purchase"} />
                            <InputFields type={"text"} name={"dealer"} title={"Name of Shop / Dealer from whom the unit is purchased"} />

                        </Box>
                    </Grid>

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
                            type='submit'
                        >
                            Send
                        </Button>
                    </div>

                </Box>


            </div >
            <Footer />
        </>
    );
}

export default Index;


