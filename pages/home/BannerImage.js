import React from 'react';
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import Image from 'next/image'

const BannerImage = ({ containerImage }) => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%"
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

                <Image
                    src={containerImage}
                    alt="image"
                    style={{ width: "100%", height: "50%" }}

                />
            </Card>
        </Container>
    );
};

export default BannerImage;
