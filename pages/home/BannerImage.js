import React from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import Image from 'next/image'

const BannerImage = ({ containerImage }) => {
    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Card
                sx={{
                    // width: { xs: '100%', sm: '85%', md: '100%', lg: '100%', },
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
        </Box>
    );
};

export default BannerImage;