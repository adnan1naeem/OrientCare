import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/system/Box';

const CardsRow = ({ containerImage1, containerImage2 }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1%'
            }}
        >
            <Card sx={{
                width: {
                    xs: "95%",
                    sm: '80%',
                    md: '39%',
                    lg: '39.5%',
                },
                borderRadius: 0,
                height: {
                    xs: "20%",
                    sm: '30%',
                    md: '29%',
                    lg: '30%',
                },
                background: "none",
                boxShadow: "none",
            }}>
                <img
                    src={containerImage1}
                    className="img"
                    alt="image"
                    style={{ width: "100%", }}
                />
            </Card>
            <Card sx={{
                width: {
                    xs: "95%",
                    sm: '80%',
                    md: '39%',
                    lg: '39.5%',

                },
                borderRadius: 0,
                height: {
                    xs: "20%",
                    sm: '30%',
                    md: '29%',
                    lg: '30%',
                },
                background: "none",
                boxShadow: "none",
            }}>
                <img
                    src={containerImage2}
                    className="img"
                    alt="image"
                    style={{ width: "100%", }}
                />
            </Card>
        </Box>
    );
};

export default CardsRow;
