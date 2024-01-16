import React from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, Button } from '@mui/material';
import logo from './../Assets/Care-logo.avif';
import Box from '@mui/material/Box';
import InputFields from './inputFields';
import phone_logo from '../../src/Assets/phone-1.webp'
import Email_logo from '../../src/Assets/Email.webp'
import Footer from '../Footer';


function Index() {
    return (
        <>
            <div>
                <Grid item sx={{ marginTop: '80px', textAlign: "center" }}>
                    <img src={logo} alt="Logo" style={{ maxWidth: '160px' }} />
                    <Typography variant='h6'
                        sx={{
                            fontWeight: 700,
                            color: '#343538',
                            fontFamily:'Montserrat',
                            fontSize:'18px'
                        }}>
                        CONTACT US
                    </Typography>
                </Grid>
                <Box sx={{
                    background: '#f2f2f2',
                    marginTop: 10,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20%',
                    flexWrap: 'wrap'
                }} >
                    <Box item sx={{
                        paddingTop: '4%'
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
                            sx={{ paddingTop: '4rem' }}>
                            <InputFields title={"Your Name"} />
                            <InputFields title={"Your email"} />
                            <InputFields title={"Subject"} />
                            <InputFields multi title={"Your Message"} />
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: '700',
                                            color: '#8a8a8a',
                                            fontSize: '10px',
                                            lineHeight: '1.5',
                                            paddingLeft: { xs: '6px', sm: '5px', md: '2px', lg: '0px' },
                                            paddingTop: '2px',
                                            textAlign: 'left'
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
                        </Box>
                        <Button sx={{
                            marginY: '10px',
                            background: '#5cd6d6',
                            width: '300px',
                            height: '48px',
                            mt: '20px',
                            fontWeight: '600',
                            textTransform: 'none',
                            marginBottom: '3rem'
                        }}
                            variant="contained">
                            Send
                        </Button>
                    </Box>
                    <Box sx={{mr:"60px",mb:"9%"}}>
                        <Typography sx={{
                            fontWeight: '200',
                            fontSize: '15px',
                            textAlign: 'center',
                            color: '#8a8a8a',
                            marginLeft: '6rem',
                            // background: 'red'
                        }}>
                            OR<br />
                            REACH US
                        </Typography>
                        <Typography
                            sx={{
                                marginX: 12,
                                textAlign: 'center',
                                color: '#8a8a8a',
                                mt: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                            }}
                        >
                            <img src={phone_logo} style={{width:'23px', marginRight:"4px"}}/>
                            <Typography sx={{
                                color: '#8a8a8a',
                                fontSize: '20px',

                            }}>
                                Phone
                            </Typography>

                        </Typography>
                        <Typography sx={{
                            marginLeft: '30%',
                            marginRight: '10px',
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily:'Arial, sans-serif',
                            color:'#8a8a8a',
                            fontWeight: '100' 
                        }}>
                            +1 424 466 7757
                        </Typography>
                        <Typography
                            sx={{
                                marginX: 9,
                                textAlign: 'center',
                                color: '#8a8a8a',
                                mt: '40px',
                                display: 'flex',
                                alignItems: 'center',

                            }}
                        >
                            <img src={Email_logo} style={{width: '25px', marginRight:'px'}}/>
                            <Typography sx={{
                                color: '#8a8a8a',
                                fontSize: '20px',
                                fontFamily: 'Arial, sans-serif'
                            }}>
                                Email Address
                            </Typography>
                        </Typography>
                        <Typography sx={{
                            marginLeft: '32%',
                            marginRight: '10px',
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            fontFamily:'Arial, sans-serif',
                            color:'#8a8a8a',
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
