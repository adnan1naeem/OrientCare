import { Card, Divider, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Filters() {
    const filterNav = () => {
        return {
            textDecoration: 'none', color: "#8A8A8A", '&:hover': {
                color: 'red',
                cursor: 'pointer',
            },
        }
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
            borderRadius: 0,
        }}>

            <div>
                <Typography variant="h6" style={{ display: 'inline', color: '#B5B7C4', fontSize: '11px' }}>
                    <NavLink
                        exact
                        to="/"
                        style={filterNav}
                        activeStyle={{ color: '#4b6ee1' }}
                        onMouseOver={(e) => { e.target.style.color = '#343538'; }}
                        onMouseOut={(e) => { e.target.style.color = '#B5B7C4'; }}
                    >
                        Home
                    </NavLink>
                </Typography>

                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    {' / '}
                </Typography>
                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    MINI SPLITS
                </Typography>
            </div>
            <Typography sx={{
                fontSize: '22px', lineHeight: 1.35, fontWeight: '500', color: '#343538', marginTop: '1em', marginBottom: '1.1rem',
            }}>
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
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}
                >
                    MINI SPLIT INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem' }}>
                <NavLink
                    exact
                    to="/"
                    style={filterNav}
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}

                >
                    MULTIZONE INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/"
                    style={filterNav}
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}
                >
                    AIR HANDLER UNIT INVERTER HEAT PUMPS
                </NavLink>
            </Typography>
            <Typography sx={LeftviewStyle}>
                <NavLink
                    exact
                    to="/spareParts"
                    style={filterNav}
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}
                >
                    SPARE PARTS
                </NavLink>
            </Typography>
        </Card>
    )
}

export default Filters