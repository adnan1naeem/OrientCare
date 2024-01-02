import { Box, Typography } from "@mui/material";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterLogoCard from "./FooterLogoCard";
import FooterCard from "./FooterCard";

function Footer() {
    return (
        <Box sx={{ background: "#F8F8F8", paddingTop: "1%", marginTop: "4%" }}>
            <Box
                sx={{
                    display: "flex",
                    gap: "6%",
                    justifyContent: "center",
                    flexWrap: "wrap",

                }}
            >
                <FooterLogoCard />
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <FooterCard
                        text1="Mini Split Inverter Heat Pumps"
                        text2="Multizone Inverter Heat Pumps"
                        text3="Air Handler Unit Inverter Heat pumps"
                        text4="Spare Parts"
                    />
                    <FooterCard
                        text1="Partners Center"
                        text2="Become a Partner"
                        text3="Downloads"
                        text4="Contact Us"
                    />
                    <FooterCard text1="Term & Condition" text2="Privacy Policy" text3="Return & Exchange Policy" text4="Warrtany & Claims Policy" />

                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "2%",
                    borderTop: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    paddingLeft: "10%",
                    paddingRight: "10%",
                }}
            >
                <Box>
                    <Typography sx={{ color: "#8a8a8a", fontWeight: "100", marginBottom: '2rem', marginTop: '1rem' }}>
                        © 2023 - OrientCare Inc. All rights reserved. This Website Uses Cookies to Improve Your Experience. By Using This Website, You Agree To Our Use Of Cookies, Privacy Policy, Terms Of Use, Return & Exchange Policy, Warranty & Claims Policy And Terms & Conditions Applied.
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
}

export default Footer;