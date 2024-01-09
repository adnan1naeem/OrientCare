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
                    height: { sx: "27rem", sm: '14rem', md: '13rem', lg: '10rem' },
                    width: { sx: "12rem", sm: '25rem', md: '22rem', lg: '23rem' },
                    background: "none",
                    boxShadow: "none",
                }}
            >
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: '18px'
                }}>
                    <img
                        src={logo}
                        alt=""
                        style={{ width: '12rem', paddingBottom: '16px', marginLeft: '5rem' }}
                    />
                    <Typography
                        sx={{
                            color: "#000000",
                            fontSize: '17px',
                            marginLeft: '6rem',
                            paddingBottom: '5px',
                            fontWeight: 'bold'
                        }}
                    >
                        FOLLOW US
                    </Typography>


                    <Typography sx={{ display: 'flex', gap: '7%', paddingTop: '6px', marginLeft: '6rem', width: { sx: "27rem", sm: '17rem', md: '19rem', lg: '23rem' } }}>
                        <FaFacebookF style={{ color: '#8a8a8a', fontSize: '17px', marginTop: '3px' }} />
                        <FaTwitter style={{ color: '#8a8a8a', fontSize: '25px', }} />
                        <ImYoutube2 style={{ color: '#8a8a8a', fontSize: '25px', }} />
                        <LiaLinkedinIn style={{ color: '#8a8a8a', fontSize: '25px', }} />
                        <TiSocialInstagram style={{ color: '#8a8a8a', fontSize: '25px', }} />
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterLogoCard;