import React, { useState } from 'react';
import { Typography, Grid, Checkbox, FormControlLabel, TextField, Button } from '@mui/material';
import logo from './../assests/Care-logo.avif';
import Box from '@mui/material/Box';
import InputFields from './inputFields';



function Index() {
    const [newsletter, setNewsletter] = useState(false);

    return (
        <div>
            <Grid item textAlign="center" sx={{ marginTop: '40px' }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '160px' }} />
                <Typography variant='h6' sx={{ fontWeight: 700, color: '#343538' }}>CONTACT US</Typography>
            </Grid>
            <Grid container spacing={2} sx={{ background: '#f2f2f2', marginTop: 12 }} justifyContent="space-between" flexWrap='wrap' alignItems="center">
                <Grid item sx={{ marginX: 10, marginBottom: '5%', }}>
                    <Typography sx={{
                        color: '#595959',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginTop: '5%',
                        marginX: 1.5
                    }}>
                        <p style={{ marginBottom: '10%' }}>  Email Us</p>
                    </Typography>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
                        <InputFields title={"Your Name"} />
                        <InputFields title={"Your email"} />
                        <InputFields title={"Subject"} />
                        <InputFields multi title={"Your Message"} />
                        <FormControlLabel sx={{
                            width: '40em',
                            fontWeight: 200,
                            color: '#8a8a8a',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                        }} control={<Checkbox />} label="I consent to having this website store my submitted information so they can respond to 
                                my inquiry.See our privacy policy to learn more how we use data." />
                    </Box>
                    <Button sx={{ marginY: '10px' }} variant="contained" color="success">
                        Success
                    </Button>
                </Grid>
                <Grid item sx={{ marginX: 10 }}>
                    <Typography>
                        dsfvsdf
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Index;
