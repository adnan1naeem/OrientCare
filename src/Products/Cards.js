import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import AirConditions from '../Assets/AirConditions.webp'
import './styles.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CardComponent = () => {

    const cardData = [
        { id: 1, title: 'Card 1', description: '36000BTU MiniSplit ME SEER18 230V (Works With Alexa)', img: AirConditions },
        { id: 2, title: 'Card 2', description: '24000BTU MiniSplit ME SEER18.5 230V (Works With Alexa)', img: AirConditions },
        { id: 3, title: 'Card 3', description: '18000BTU MiniSplit ME SEER19.5 230V (Works With Alexa)', img: AirConditions },
        { id: 4, title: 'Card 2', description: '12000BTU MiniSplit ME SEER21.4 230V (Works With Alexa)', img: AirConditions },
        { id: 5, title: 'Card 3', description: '12000BTU MiniSplit ME SEER20.8 115V (Works With Alexa)', img: AirConditions },
    ];

    return (
        <>
            <Grid container spacing={1}>
                {cardData.map((card) => (
                    <Grid item key={card.id}>
                        <Card sx={{
                            width: { sx: "160px", sm: '140px', md: '190px', lg: '199px' }, marginLeft: '5px', marginTop: '3rem', background: "none",
                            boxShadow: "none",
                        }}>
                            <div className='ImageProducts'>
                                <img
                                    src={card.img}
                                    alt=""
                                    className='CenteredImage'
                                />
                            </div>
                            <Typography sx={{ marginTop: '15px', textAlign: 'center', color: '#252614', fontSize: '14px', fontWeight: '700' }}>{card?.description}</Typography>
                        </Card>

                    </Grid>
                ))}

            </Grid>

            <Stack spacing={2}>
                <Pagination count={2} variant="outlined" shape="rounded" />
            </Stack>
        </>

    );
};

export default CardComponent;
