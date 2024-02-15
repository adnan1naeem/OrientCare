import React, { useState } from 'react';
import { Card, Typography, Grid } from '@mui/material';
import styles from '../../styles/product.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Image from 'next/image'

const CardComponent = ({ Array }) => {

    const cardsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = Array?.slice(indexOfFirstCard, indexOfLastCard);
    const pageCount = Math.ceil(Array?.length / cardsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <Grid container spacing={1}>
                {currentCards?.map((card) => (
                    <Grid item key={card.id}>
                        <Link
                            href="/productsDetail"
                            style={{ textDecoration: 'none', }}>
                            <Card
                                sx={{
                                    width: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '190px',
                                        lg: '190px'
                                    },
                                   
                                    marginTop: '3rem',
                                    background: 'none',
                                    boxShadow: 'none',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div className={styles.ImageProducts}>
                                    <Image src={card.img} alt="card img" className={styles.CenteredImage} />
                                </div>
                                <Typography
                                    sx={{
                                        marginTop: '15px',
                                        textAlign: 'center',
                                        color: '#252614',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        '&:hover': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    {card?.description}
                                </Typography>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            {Array?.length >= 20 &&
                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: '4rem',
                        mb: '1rem',
                        justifyContent: 'center',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                    }}
                    spacing={2}
                >
                    <Pagination
                        count={pageCount}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </Stack>
            }

        </>

    );
};

export default CardComponent;
