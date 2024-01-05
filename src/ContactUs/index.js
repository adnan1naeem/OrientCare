import React, { useState } from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, TextField, Button } from '@mui/material';
import logo from './../Assets/Care-logo.avif';
import Box from '@mui/material/Box';
import InputFields from './inputFields';
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import Footer from '../Footer';

function Index() {
    return (
        <div>
            <Grid item textAlign="center" sx={{ marginTop: '40px' }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '160px' }} />
                <Typography variant='h6' sx={{ fontWeight: 700, color: '#343538' }}>CONTACT US</Typography>
            </Grid>
            <Box sx={{ background: '#f2f2f2', marginTop: 12, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20%', flexWrap: 'wrap' }} >
                <Box item sx={{ paddingTop: '5%' }}>
                    <Typography sx={{
                        color: '#595959',
                        fontSize: '20px',
                        fontWeight: '600',

                        marginX: 1.5
                    }}>
                        Email Us
                    </Typography>
                    <Box
                        component="form"
                        sx={{ paddingTop: '7%' }}
                    >
                        <InputFields title={"Your Name"} />
                        <InputFields title={"Your email"} />
                        <InputFields title={"Subject"} />
                        <InputFields multi title={"Your Message"} />
                        <FormControlLabel sx={{
                            fontWeight: 200,
                            color: '#8a8a8a',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            width: { xs: '18rem', sm: '20rem', md: '22rem', lg: '30rem' }
                        }} control={<Checkbox />} label="I consent to having this website store my submitted information so they can respond to 
                                my inquiry.See our privacy policy to learn more how we use data." />
                    </Box>
                    <Button sx={{ marginY: '10px', background: '#5cd6d6', width: '300px', height: '48px', mt: '20px', fontWeight: '600', textTransform: 'none', marginBottom: '3rem' }} variant="contained">
                        Send
                    </Button>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: '600', fontSize: '14px', textAlign: 'center', color: '#595959' }}>
                        OR<br />
                        REACH US
                    </Typography>
                    <Typography
                        sx={{
                            marginX: 10,
                            fontSize: '12px',
                            textAlign: 'center',
                            color: '#595959',
                            mt: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '20px',

                        }}
                    >
                        <IoCallOutline style={{ fontSize: '30px', marginRight: '10px' }} />
                        Phone
                    </Typography>
                    <Typography sx={{ marginLeft: '30%', marginRight: '10px', color: '#595959', }}>+1 424 466 7757</Typography>
                    <Typography
                        sx={{
                            marginX: 10,
                            fontSize: '18px',
                            textAlign: 'center',
                            color: '#595959',
                            mt: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '20px'
                        }}
                    >
                        <MdAttachEmail style={{ fontSize: '30px', marginRight: '10px', lineHeight: '40px' }} />
                        Email Adress
                    </Typography>
                    <Typography sx={{ marginLeft: '30%', marginRight: '10px', color: '#595959', }}>Info@orientcare.us</Typography>
                </Box>
            </Box>
            <Footer />
        </div >
    );
}

export default Index;
