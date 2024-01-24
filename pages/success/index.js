import { Typography, Card, Grid } from '@mui/material'
import React from 'react'
import Link from "next/link";
import Layout from '../../components/layout';


function index() {
    return (
        <>
            <Layout title={"Thanks - orient care"} />
            <Grid sx={{
                justifyContent: 'center',
                display: 'flex'
            }}>
                <Card
                    sx={{
                        width: '60%',
                        background: "#f2f2f2",
                        boxShadow: "none",
                        mt: '10rem',
                        padding: '15px',
                        pl: '2.5rem',
                        pt: '2rem',
                        overflow: 'hidden'


                    }}
                >
                    <Typography variant='h3' sx={{ fontWeight: '700' }}>Thanks!</Typography>
                    <Typography sx={{ fontSize: '17px', pt: '1.4rem', fontFamily: 'Work Sans', }}>The form was submitted successfully. Return to original site:</Typography>

                    <Link href="/">
                        <Typography sx={{ pb: '3rem', color: '#3c96dc', fontFamily: 'Work Sans', }}>https://orientcare.us/</Typography>
                    </Link>
                </Card>
            </Grid>
        </>
    )
}

export default index