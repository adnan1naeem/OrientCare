import { Card, Divider, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Filters() {
    const filterNav = () => {
        return { textDecoration: 'none', color: "#8A8A8A", }
    };

    const LeftviewStyle = () => {
        return {
            textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem'
        };
    };

    return (
        <Card sx={{
            width: '25%',
            textAlign: 'left',
            background: "none",
            boxShadow: "none",
            marginTop: '10px',
        }}>
            <Typography sx={{ fontSize: '22px', lineHeight: 1.35, fontWeight: '500', color: '#343538', marginTop: '1em', marginBottom: '1.1rem' }}>
                Mini Splits
            </Typography>
            <Typography sx={{ textAlign: 'left', color: "#252634", fontSize: '15px', fontWeight: '700', pb: '0.2rem' }}>
                FILTERS
            </Typography>
            <Divider inset="none" />
            <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', lineHeight: '19.6px', color: "#252634", paddingTop: '8px' }}>
                CATEGORIES
            </Typography>
            <Typography href="/" sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/products"
                    style={filterNav}
                >
                    MINI SPLIT INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography href="/" sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/"
                    style={filterNav}
                >
                    MULTIZONE INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography href="/" sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/"
                    style={filterNav}
                >
                    AIR HANDLER UNIT INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/spareParts"
                    style={filterNav}
                >
                    SPARE PARTS
                </NavLink>
            </Typography>
        </Card>
    )
}

export default Filters