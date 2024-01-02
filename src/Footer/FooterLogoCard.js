import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import logo from '../Assets/Care-logo.avif'

function FooterLogoCard() {
    return (
        <Box>
            <Card
                sx={{
                    width: { sx: "20rem", sm: '29rem', md: '12rem', lg: '17rem' },
                    height: "17rem",
                    background: "none",
                    boxShadow: "none",
                    marginLeft: '5rem'
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <img
                        src={logo}
                        alt=""
                        style={{ width: '10rem', paddingBottom: '10%' }}
                    />
                    <Typography
                        sx={{
                            color: "#153A5F",
                            fontSize: '17px'
                        }}
                    >
                        FOLLOW US
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterLogoCard;