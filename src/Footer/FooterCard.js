import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css'



function FooterCard({ title, text1, text2, text3, text4, text5, to1, to2, to3, to4 }) {
    return (
        <Box>
            <Card
                sx={{
                    height: { sx: "17rem", sm: '13rem', md: '13rem', lg: '10rem' },
                    width: { sx: "10rem", sm: '15rem', md: '12rem', lg: '17rem' },
                    background: "none",
                    boxShadow: "none",
                    textAlign: 'left',
                    marginLeft: '2rem',
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column", }}>
                    <NavLink
                        exact
                        to={to1}
                        activeClassName="active"
                        className="footer_nav">
                        <Typography
                            sx={{
                                textAlign: 'left',
                                color: "#8a8a8a",
                                fontSize: "12px",
                                lineHeight: '2rem',
                                '&:hover': {
                                    color: 'black',
                                    cursor: 'pointer',
                                },
                            }}>
                            {text1}
                        </Typography>
                    </NavLink>
                    <NavLink
                        exact
                        to={to2}
                        activeClassName="active"
                        className="footer_nav">
                        <Typography
                            sx={{
                                textAlign: 'left',
                                color: "#8a8a8a",
                                fontSize: "12px",
                                lineHeight: '2rem',
                                '&:hover': {
                                    color: 'black',
                                    cursor: 'pointer',
                                },
                            }}>
                            {text2}
                        </Typography>
                    </NavLink>
                    <NavLink
                        exact
                        to={to3}
                        activeClassName="active"
                        className="footer_nav">
                        <Typography
                            sx={{
                                textAlign: 'left',
                                color: "#8a8a8a",
                                fontSize: "12px",
                                lineHeight: '2rem',
                                '&:hover': {
                                    color: 'black',
                                    cursor: 'pointer',
                                },
                            }}>
                            {text3}
                        </Typography>
                    </NavLink>
                    <NavLink
                        exact
                        to={to4}
                        activeClassName="active"
                        className="footer_nav">
                        <Typography
                            sx={{
                                textAlign: 'left',
                                color: "#8a8a8a",
                                fontSize: "12px",
                                lineHeight: '2rem',
                                '&:hover': {
                                    color: 'black',
                                    cursor: 'pointer',
                                },
                            }}>
                            {text4}
                        </Typography>
                    </NavLink>

                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterCard;