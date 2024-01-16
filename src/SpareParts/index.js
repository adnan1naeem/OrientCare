import React from 'react'
import "../Products/styles.css"
import SpareBanner from '../Assets/spareParts-banner.webp'
import { Box, Card, Divider, Typography, Grid } from '@mui/material'
import SortBy from '../Products/SortBy'
import Cards from '../Products/Cards'
import Footer from '../Footer/index'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { spareParts } from '../Products/ArrayValues'
import Filters from '../Products/Filters'
import Dropdown from '../Products/Dropdown';


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
                            width: { xs: "100%", sm: '100%', md: '100%', lg: '70%' }, background: "none",
                            boxShadow: "none", marginTop: '4rem',
                        }}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ paddingRight: '5px', color: '#8A8A8A', fontSize: '12px' }}>Sort by:</Typography>
                                <SortBy />
                            </Grid>
                            {!isLargeScreen && (
                                <div>
                                    <Dropdown/>
                                </div>
                            )}
                        </div>
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




