import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Link from 'next/link'
import styles from '../../styles/footer.module.css';

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
                    <Link
                        exact
                        href={to1}
                        activeClassName="active"
                        className={styles.footer_nav}>
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
                    </Link>
                    <Link
                        exact
                        href={to2}
                        activeClassName="active"
                        className={styles.footer_nav}>
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
                    </Link>
                    <Link
                        exact
                        href={to3}
                        activeClassName="active"
                        className={styles.footer_nav}>
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
                    </Link>
                    <Link
                        exact
                        href={to4}
                        activeClassName="active"
                        className={styles.footer_nav}>
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
                    </Link>

                </CardContent>
            </Card>
        </Box>
    );
}

export default FooterCard;