import React from 'react'
import "../Products/styles.css"
import SpareBanner from '../Assets/spareParts-banner.webp'
import Logo from '../Assets/logo_one.avif'
import { Box, Card, Divider, Typography, Grid } from '@mui/material'
import SortBy from '../Products/SortBy'
import Cards from '../Products/Cards'
import Footer from '../Footer/index'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { spareParts } from '../Products/ArrayValues'
import { NavLink, useNavigate } from "react-router-dom";
import Filters from '../Products/Filters'



function Index() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <>
            <div className='ContainerProduct'>
                <img src={SpareBanner} className='ProductBannerImage' alt="logo" />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '1.3rem',
                        flexWrap: 'wrap'
                    }}>
                    {isLargeScreen && (
                        <Filters />
                    )}
                    <Card
                        sx={{
                            width: { xs: "100%", sm: '100%', md: '85%', lg: '73%' }, background: "none",
                            boxShadow: "none", marginTop: '4rem',
                        }}>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ paddingRight: '5px', color: '#8A8A8A', fontSize: '12px' }}>Sort by:</Typography>
                            <SortBy />
                        </Grid>
                        <Divider inset="none" sx={{ mt: '5px' }} />
                        <Cards Array={spareParts} />
                    </Card>
                </Box>

            </div>
            <Footer />
        </>
    )
}

export default Index




