import React from 'react';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';

const BannerImage = ({ containerImage }) => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Card
                sx={{
                    width: { xs: '100%', sm: '85%', md: '84%', lg: '100vw' },
                    background: 'none',
                    boxShadow: 'none',
                    borderRadius: 0,
                    height: { xs: '83%', sm: '83%', md: '83%', lg: '48vh%' }
                }}>

                <img
                    src={containerImage}
                    className="img"
                    alt="image"
                    style={{ width: "100%", }}

                />
            </Card>
        </Container>
    );
};

export default BannerImage;
