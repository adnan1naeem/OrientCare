import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import logo from '../Assets/Care-logo.avif'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { ImYoutube2 } from "react-icons/im";
import { LiaLinkedinIn } from "react-icons/lia";

function FooterLogoCard() {
    return (
        <Box>
            <Card
                sx={{
                    height: { sx: "27rem", sm: '14rem', md: '13rem', lg: '11rem' },
                    width: { sx: "27rem", sm: '25rem', md: '16rem', lg: '19rem' },
                    background: "none",
                    boxShadow: "none",
                    
                }}
            >
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: '14px',
                    justifyContent:'center'
                }}>
                    <img
                        src={logo}
                        alt=""
                        style={{ width: '12rem', paddingBottom: '16px', marginLeft: '1rem' }}
                    />
                    <Typography
                        sx={{
                            color: "#000000",
                            fontSize: '17px',
                            marginLeft: '2rem',
                            paddingBottom: '5px',
                            fontWeight: 'bold',
                            
                        }}
                    >
                        FOLLOW US
                    </Typography>


                    <Typography sx={{ display: 'flex', gap: '10%', paddingTop: '6px', marginLeft: '2rem', width: { sx: "27rem", sm: '17rem', md: '19rem', lg: '23rem' } }}>
                        <FaFacebookF style={{ color: '#8a8a8a', fontSize: '20px', marginTop: '3px' }} />
                        <FaTwitter style={{ color: '#8a8a8a', fontSize: '30px', }} />
                        <ImYoutube2 style={{ color: '#8a8a8a', fontSize: '35px', }} />
                        <LiaLinkedinIn style={{ color: '#8a8a8a', fontSize: '35px', }} />
                        <TiSocialInstagram style={{ color: '#8a8a8a', fontSize: '35px', }} />
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterLogoCard;