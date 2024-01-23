import { Card, Divider, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'


function Filters({ pageName }) {
    return (

        <Card sx={{
            width: { xs: '15rem', sm: '15rem', md: '15rem', lg: '25%', xl: "25%" },
            textAlign: 'left',
            background: "none",
            boxShadow: "none",
            marginTop: '10px',
            borderRadius: 0,
        }}>
            <div>
                <Link
                    href='/'
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#000'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                    <Typography variant="h6" style={{ display: 'inline', color: '#B5B7C4', fontSize: '11px' }}>
                        HOME
                    </Typography>
                </Link>

                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    {' / '}
                </Typography>
                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    {pageName}
                </Typography>
            </div>
            <Typography sx={{
                fontSize: '22px', lineHeight: 1.35, fontWeight: '500', color: '#343538', marginTop: '1em', marginBottom: '1.1rem',
            }}>
                {pageName}
            </Typography>
            <Typography sx={{ textAlign: 'left', color: "#252634", fontSize: '15px', fontWeight: '700', pb: '0.2rem' }}>
                FILTERS
            </Typography>
            <Divider inset="none" />
            <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', lineHeight: '19.6px', color: "#252634", paddingTop: '8px' }}>
                CATEGORIES
            </Typography>

            <Link
                href='/'
                activeStyle={{ color: '#4b6ee1' }}
                onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem', color: "#8A8A8A" }}>
                    MINI SPLIT INVERTER HEAT PUMPS
                </Typography>
            </Link>
            <Link href='/'
                activeStyle={{ color: '#4b6ee1' }}
                onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem', color: "#8A8A8A" }}>
                    MULTIZONE INVERTER HEAT PUMPS
                </Typography>
            </Link>
            <Link href='/'
                activeStyle={{ color: '#4b6ee1' }}
                onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem', color: "#8A8A8A" }}>
                    AIR HANDLER UNIT INVERTER HEAT PUMPS
                </Typography>
            </Link>
            <Link href='/spareparts'
                activeStyle={{ color: '#4b6ee1' }}
                onMouseOver={(e) => { e.target.style.color = '#4b6ee1'; }}
                onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '400', marginTop: '1rem', color: "#8A8A8A" }}>
                    SPARE PARTS
                </Typography>
            </Link>
        </Card>
    )
}

export default Filters