import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const CardsRow = ({ containerImage1, containerImage2 }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card
                    sx={{
                        borderRadius: 0,
                        background: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <img
                        src={containerImage1}
                        className="img"
                        alt="image"
                        style={{ width: '100%' }}
                    />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card
                    sx={{
                        borderRadius: 0,
                        background: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <img
                        src={containerImage2}
                        className="img"
                        alt="image"
                        style={{ width: '100%' }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default CardsRow;
