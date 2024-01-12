import React from "react";
import "./style.css";
import logo_one from "../../Assets/logo_one.avif";
import logo_two from "../../Assets/one-year.webp";
import { Box, Card, Typography } from "@mui/material";
import { notInclude, warrantyDetails } from "./dummyData";
import Footer from "../../Footer";

const warranty = () => {

    return (
        <div>
            <div className="div_one">
                <img
                    src={logo_one}
                    alt="orient_logo"
                    style={{ width: "160px" }}
                />
                <Typography variant="h6" sx={{ fontWeight: '700',fontFamily:'Montserrat', fontSize:'18px' }}>LIMITED WARRANTY</Typography>
                <Typography sx={{ fontSize: "15px", color: "#8A8A8A", }}>
                    Mini Split Inverter Heat Pump InDoor Unit
                </Typography>
            </div>

            <div style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography sx={{
                    marginBottom: '4%',
                    textAlign: 'center',
                }} className="div_second">
                    <img src={logo_two} width={"160px"} alt="Logo" />
                    <p style={{ fontSize: "12px", fontFamily: "Helvetica,Arial,sans-serif,arial,serif", fontWeight:'100'}}>
                        One(1)year on all parts
                    </p>
                </Typography>
            </div>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1%',

            }}>
                <Card sx={{
                    width: {
                        xs: "100%",
                        sm: '100%',
                        md: '50%',
                        lg: '48%'
                    },
                    background: "none",
                    boxShadow: "none",
                }}>

                    <Typography
                        component="div"
                        sx={{
                            fontSize: '14px',
                            lineHeight: 1.6,
                            fontWeight: '500',
                            color:'#8A8A8A',
                            marginBottom: '1.1rem',
                            textAlign: 'left',
                            paddingLeft: '10px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '12px',
                            lineHeight: '1.5',
                            margin: '0 0 15px',
                            textAlign: 'left',
                            paddingLeft: '1rem',
                            paddingRight: '10px',
                            fontFamily:'Helvetica,Arial,sans-serif,arial,serif',
                            paddingBottom:'15px'

                        }}>
                            OrientCare Mini Split Inverter Heat Pump Indoor Unit is manufactured
                            according to quality standards and certifications. Please read
                            carefully all warranty details as given below, these are against
                            failure due to defect in materials or workmanship under normal use and
                            maintenance of this product.<br />
                        </Typography>

                        <ol  style={{fontFamily:'Helvetica,Arial,sans-serif,arial,serif', fontSize:'12px', lineHeight:'1.4'}}>
                            {warrantyDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ol>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        width: {
                            xs: "95%",
                            sm: '95%',
                            md: '40%',
                            lg: '40%'
                        },

                        background: "#e6e6e6",
                        boxShadow: "none",
                        borderRadius: 0,
                        paddingBottom: '1rem',
                        height: {
                            xs: "95%",
                            sm: '95%',
                            md: '40%',
                            lg: '50%'
                        },
                    }}>
                    <Typography sx={{
                        textAlign: 'left',
                        fontSize: '12px',
                        lineHeight: '16.8px',
                        fontWeight: '500',
                        color: '#8A8A8A',
                        paddingLeft: '1rem',
                        paddingRight: '3.5rem',

                    }}>
                        <Typography sx={{
                            color: '#33CCCC',
                            fontSize: '24px',
                            lineHeight: '32.4px',
                            fontWeight: '700',
                            paddingLeft: '1rem',
                            paddingRight: '3rem',
                            textAlign: 'left',
                            paddingTop: '20px',
                            paddingBottom: '2rem'
                        }}>
                            This Warranty Does Not cover:
                        </Typography>
                        <ol>
                            {notInclude.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ol>
                    </Typography>

                </Card>
            </Box>
            <Footer />
        </div >
    );
};

export default warranty;
