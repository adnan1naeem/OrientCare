import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import styles from "../../styles/Image-container.module.css";
import Image from "next/image";

const CardsRow = ({ containerImage1, containerImage2 }) => {
    return (
        <Grid container spacing={{ sx: 2, sm: 2, md: 2, lg: 2 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card
                    sx={{
                        borderRadius: 0,
                        background: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <Image
                        src={containerImage1}
                        className={styles.img}
                        alt="image"
                        style={{ width: '100%', height:"auto" }}
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
                    <Image
                        src={containerImage2}
                        className={styles.img}
                        alt="image"
                        style={{ width: '100%', height:"auto" }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default CardsRow;
