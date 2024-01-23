import React from 'react'
import styles from '../../styles/product.module.css'
import { Box, Card, Divider, Typography, Grid } from '@mui/material'
import SortBy from './SortBy'
import Cards from './Cards'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { miniSplit } from '../../constants/ArrayValues'
import Filters from './Filters'
import Footer from '../footer/index'
import Dropdown from '../products/Dropdown';
import Header from '../../components/Header/index'
import Layout from '../../components/layout';

function Index() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            <Layout title={"Mini Split"} />
            <Header />
            <div className={styles.ContainerProduct}>
                <img src={'/images/ProductBanner.webp'} className={styles.ProductBannerImage} alt="logo" />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '1.3rem',
                        flexWrap: 'wrap'
                    }}>

                    {isLargeScreen && (
                        <>
                            <Filters pageName={"MINI SPLITS"} />
                        </>
                    )}
                    <Card
                        sx={{
                            width: { xs: "100%", sm: '100%', md: '85%', lg: '70%' }, background: "none",
                            boxShadow: "none", marginTop: '5rem',
                        }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ paddingRight: '5px', color: '#8A8A8A', fontSize: '12px' }}>Sort by:</Typography>
                                <SortBy />
                            </Grid>
                            {!isLargeScreen && (
                                <div style={{ zIndex: 1 }}>
                                    <Dropdown />
                                </div>
                            )}
                        </div>
                        <Divider inset="none" sx={{ mt: '5px' }} />
                        <Cards Array={miniSplit} />
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mt: '4rem',
                            mb: '1rem',
                            justifyContent: 'center',
                            flexDirection:
                            {
                                xs: "column",
                                sm: 'row',
                                md: 'row',
                                lg: 'row'
                            },
                        }}>
                            <img src={'/images/logo.webp'} className={styles.LogoImageOrient} alt="logo" />
                            <Typography variant='h1' sx={{ fontSize: '45px', color: '#343538', }}>Wall Mounted Mini Split</Typography>
                        </Grid>
                        <Typography sx={{ mb: '2rem', textAlign: 'center', color: '#8A8A8A', fontSize: '17px', lineHeight: '25.5px' }}>
                            Intelligent & Smart OrientCare Ductless Wall Mounted Mini Split with a SEER Value 18 ~ 20.8 also works with Alexa and Google Home besides the remote control. Its innovative Sprint Activation feature provides powerful cooling in the split of the seconds as soon as it gets started. The outdoor fan speed increases from 2nd grade to 9th grade which makes it more comfortable and energy efficient. Eco Gear Control function can adjust its energy consumption by 50% or 75% or 100%.<br /><br />
                            OrientCare wall mounted mini split inverter heat pumps are easy to install and are available in capacities ranging from 12000 BTUs to 36000 BTUs. Heat & Cool function, Intelligent Dusting Switch, i-Clean, Golden Fin, Refrigerant Leakage Alert, and 4-D Air-Throw are some of the key features to increase its life and enhanced performance.
                        </Typography>
                    </Card>
                </Box>

            </div>
            <Footer />
        </>
    )
}

export default Index


