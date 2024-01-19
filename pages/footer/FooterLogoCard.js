import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
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
                    width: { sx: "27rem", sm: '22rem', md: '16rem', lg: '19rem' },
                    background: "none",
                    boxShadow: "none",

                }}
            >
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: '14px',
                    justifyContent: 'center'
                }}>
                    <img
                        src={"/images/logo.avif"}
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

                    <Box sx={{ display: 'flex', gap: '5%', paddingTop: '1rem', marginLeft: '2rem', width: { sx: "27rem", sm: '17rem', md: '19rem', lg: '23rem' } }}>
                        <FaFacebookF className="icon" />
                        <FaTwitter className="icon" />
                        <ImYoutube2 className="icon" />
                        <LiaLinkedinIn className="icon" />
                        <TiSocialInstagram className="icon" />

                        <style>
                            {`
            .icon {
                color: #8a8a8a;
                font-size: 20px;
            }

            .icon:hover {
                color: #000000;  
            }
        `}
                        </style>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterLogoCard;