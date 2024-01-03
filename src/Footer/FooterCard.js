import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
function FooterCard({ title, text1, text2, text3, text4, text5 }) {
    return (
        <Box>
            <Card
                sx={{

                    height: { sx: "17rem", sm: '21rem', md: '19rem', lg: '17rem' },
                    width: { sx: "5rem", sm: '10rem', md: '16rem', lg: '20rem' },
                    background: "none",
                    boxShadow: "none",
                    textAlign: 'left',
                    marginLeft: '2rem',

                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column", }}>

                    <Typography
                        sx={{
                            color: "#8a8a8a",
                            fontSize: "12px",
                        }}
                    >
                        {text1}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#8a8a8a",
                            marginTop: "10px",

                            fontSize: "12px",
                        }}
                    >
                        {text2}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#8a8a8a",
                            marginTop: "10px",

                            fontSize: "12px",
                        }}
                    >
                        {text3}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#8a8a8a",
                            marginTop: "10px",
                            fontSize: "12px",
                        }}
                    >
                        {text4}
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterCard;