import React from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, Button } from '@mui/material';
import logo from './../Assets/Care-logo.avif';
import Box from '@mui/material/Box';
import InputFields from './inputFields';
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import Footer from '../Footer';



function Index() {
    return (
        <div>
            <Grid item sx={{ marginTop: '35px', textAlign: "center" }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '160px', paddingTop:'30px' }} />
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
                marginTop: 12,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '28%',
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
                        sx={{ paddingTop: '60px' }}>
                        <InputFields 
                         title={"Your Name"} />
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
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '15px',
                        textAlign: 'center',
                        color: '#8a8a8a',
                        marginLeft: '5rem',
                        // background: 'red'
                    }}>
                        OR<br />
                        REACH US
                    </Typography>
                    <Typography
                        sx={{
                            marginX: 10,
                            textAlign: 'center',
                            color: '#8a8a8a',
                            mt: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '20px',
                        }}
                    >
                        <IoCallOutline style={{
                            fontSize: '20px',
                            marginRight: '10px',
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                        }} />
                        <Typography sx={{
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                            fontSize: '17px'
                        }}>
                            Phone
                        </Typography>

                    </Typography>
                    <Typography sx={{
                        marginLeft: '22%',
                        marginRight: '10px',
                        color: '#8a8a8a',
                        fontWeight: 'bold',
                        fontSize: '15px',
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
                        <MdAttachEmail style={{
                            marginRight: '10px',
                            lineHeight: '40px',
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }} />
                        <Typography sx={{
                            color: '#8a8a8a',
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}>
                            Email Adress
                        </Typography>
                    </Typography>
                    <Typography sx={{
                        marginLeft: '32%',
                        marginRight: '10px',
                        color: '#8a8a8a',
                        fontWeight: 'bold',
                        fontSize: '12px',

                    }}>Info@orientcare.us</Typography>
                </Box>
            </Box>
            <Footer />
        </div >
    );
}

export default Index;
