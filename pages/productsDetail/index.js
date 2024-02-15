import React from 'react'
import styles from '../../styles/product.module.css'
import Banner from '../../public/intelligent-smart.webp'
import { Grid, Box, Typography, Card } from '@mui/material'
import { SubProductsImages } from '../../constants/ArrayValues'
import Footer from '../footer/index'
import ProductSlider from '../products/Products_Slider/index'
import Image from 'next/image'
import Header from '../../components/Header/index'
import Layout from '../../components/layout';


function Index() {

    return (
        <>
            <Layout title={"Orient-Care Product Details"} />
            <Header />
            <div className={styles.Container_Details}>
                <img src={'/images/intelligent-smart.webp'} className={styles.Sub_Product} alt='' />
                <Box
                    sx={{
                        width: '100%',
                        background: '#f3f3f3',
                        mt: '10px'
                    }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <Card sx={{
                            width: {
                                xs: "100%",
                                sm: '100%',
                                md: '44%',
                                lg: '44%'
                            },
                            background: "none",
                            boxShadow: "none",
                            paddingLeft: '50px',
                            paddingRight: '20px',

                        }}>
                            <Typography sx={{
                                textAlign: 'left',
                                fontSize: '14px',
                                lineHeight: '22.4px',
                                fontWeight: '700',
                                color: '#000',
                                marginTop: '6em',
                            }}>
                                Discription
                            </Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                lineHeight: 1.6,
                                fontWeight: '500',
                                color: '#000',
                                marginBottom: '1.1rem',
                                textAlign: 'left',
                            }}>
                                The OrientCare air conditioner exemplifies a contemporary cooling & heating appliance with its elegant and modern outlook. Furthermore, its performance is exceptional, and makes your daily routine a serene experience for you. It not only enhances the aesthetic appeal of any room it occupies but also offers a range of distinctive innovative features and technologies.
                            </Typography>
                        </Card>
                        <Card
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: '100%',
                                    md: '44%',
                                    lg: '44%'
                                },
                                ml: {
                                    xs: "3em",
                                    sm: '3rem',
                                    md: '2.3rem',
                                    lg: '2.3rem'
                                },

                                background: "none",
                                boxShadow: "none",



                            }}>
                            <Typography sx={{
                                textAlign: 'left',
                                fontSize: '14px',
                                lineHeight: '22.4px',
                                fontWeight: '700',
                                color: '#000',
                                marginTop: {
                                    xs: "2em",
                                    sm: '1.5em',
                                    md: '5em',
                                    lg: '6em'
                                },
                                ml: '10px',

                            }}>
                                Features
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '4em',
                                    flexWrap: 'wrap',

                                }}>
                                <Card
                                    sx={{
                                        width: { xs: "100%", sm: '15rem', md: '14rem', lg: '44%' },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",


                                    }}>
                                    ■ Quality & Performance Certified <br />
                                    ■ Sprint Activation <br />
                                    ■ I-Clean <br />
                                    ■ 9 Grades Outdoor Fan Speed <br />
                                    ■ Intelligent Dusting Switch <br />
                                    ■ Golden Fin <br />
                                    ■ Smart WIFI <br />

                                </Card>
                                <Card
                                    sx={{
                                        width: { xs: "100%", sm: '30%', md: '9rem', lg: '44%' },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",

                                    }}>
                                    ■ Gas Leakage Alarm <br />
                                    ■ Eco-Friendly <br />
                                    ■ Family Shared Units <br />
                                    ■ Eco Gear <br />
                                    ■ Heat & Cool <br />
                                    ■ 4D air Throw <br />
                                    ■ Easy Installation <br />
                                </Card>
                            </Box>
                        </Card>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <Card sx={{
                            width: {
                                xs: "100%",
                                sm: '100%',
                                md: '44%',
                                lg: '35%'
                            },


                            paddingRight: '20px',
                            ml: {
                                xs: "3em",
                                sm: '3rem',
                                md: '2.3rem',
                                lg: '2.3rem'
                            },

                            background: 'none',
                            boxShadow: "none",
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                                lineHeight: '22.4px',
                                fontWeight: '700',
                                color: '#000',
                                marginTop: {
                                    xs: "0.1em",
                                    sm: '0.2em',
                                    md: '3.5em',
                                    lg: '3.5em'
                                },
                                paddingLeft: '1em',
                            }}>
                                What's Inside the INDOOR Box
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '4em',
                                    flexWrap: 'wrap',
                                }}>
                                <Card
                                    sx={{
                                        width:
                                        {
                                            xs: "55em",
                                            sm: '30rem',
                                            md: '12rem',
                                            lg: '12rem'
                                        },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",
                                    }}>
                                    ■ Connecting Wire <br />
                                    ■ Remote Control <br />
                                    ■ Battries <br />
                                    ■ Wi-Fi Device (USB) <br />
                                </Card>
                                <Card
                                    sx={{
                                        width: {
                                            xs: "55em",
                                            sm: '30rem',
                                            md: '12rem',
                                            lg: '15rem'
                                        },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",

                                    }}>
                                    ■ Warranty Card <br />
                                    ■ User Manual <br />
                                    ■ Wall Bracket <br />
                                    ■ Anchors & Screws (5 sets) <br />
                                </Card>
                            </Box>
                        </Card>
                        <Card
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: '100%',
                                    md: '44%',
                                    lg: '42%'
                                },
                                ml: {
                                    xs: "2em",
                                    sm: '3rem',
                                    md: '2.3rem',
                                    lg: '2.3rem'
                                },

                                background: "none",
                                boxShadow: "none",
                            }}>
                            <Typography sx={{
                                fontSize: '14px',
                                lineHeight: '22.4px',
                                fontWeight: '700',
                                color: '#000',
                                marginTop: {
                                    xs: "0.1em",
                                    sm: '0em',
                                    md: '4em',
                                    lg: '3.5em'
                                },
                                paddingLeft: {
                                    xs: "2em",
                                    sm: '1em',
                                    md: '3em',
                                    lg: '3em'
                                }
                            }} >
                                What's Inside the OUTDOOR Box
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    marginBottom: '4em',
                                    flexWrap: 'wrap',
                                    ml: {
                                        xs: "1em",
                                        sm: '0rem',
                                        md: '2.3rem',
                                        lg: '2rem'
                                    },
                                }}>
                                <Card
                                    sx={{
                                        width: {
                                            xs: "25em",
                                            sm: '30rem',
                                            md: '12rem',
                                            lg: '14rem'
                                        },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",
                                    }}>
                                    ■ Connecting Pipes <br />
                                    ■ Insulation Tape <br />

                                </Card>
                                <Card
                                    sx={{
                                        width: {
                                            xs: "25em",
                                            sm: '30rem',
                                            md: '12rem',
                                            lg: '15rem'
                                        },
                                        lineHeight: '22.4px',
                                        fontSize: '14px',
                                        color: '#000',
                                        background: "none",
                                        boxShadow: "none",

                                    }}>
                                    ■ Plaster (sealing clay) <br />
                                    ■ Warranty Card <br />

                                </Card>
                            </Box>
                        </Card>
                    </Box>
                </Box>


                {
                    SubProductsImages?.map((card) => (
                        <Grid item key={card.id}>
                            <div>
                                <Image src={card.img}
                                    alt=""
                                    className={styles.Sub_Products_Image}
                                />
                            </div>
                        </Grid>
                    ))
                }

                <Typography variant='h4' sx={{
                    fontWeight: '600',
                    fontSize: '24px',
                    color: "#343538",
                    lineHeight: '32.4px',
                    marginTop: "4%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                    Related Products
                </Typography>


                <ProductSlider />
                <Footer />

            </div>
        </>
    )
}

export default Index