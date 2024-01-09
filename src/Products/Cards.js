import React, { useState } from 'react';
import { Card, Typography, Grid } from '@mui/material';

import './styles.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

const CardComponent = ({ Array }) => {
    const cardsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = Array?.slice(indexOfFirstCard, indexOfLastCard);

    const pageCount = Math.ceil(Array.length / cardsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <Grid container spacing={1}>
                {currentCards?.map((card) => (
                    <Grid item key={card.id}>
                        <NavLink
                            exact
                            to="/productsDetail"
                            style={{ textDecoration: 'none', }}
                        >
                            <Card
                                sx={{
                                    width: { sx: '160px', sm: '140px', md: '190px', lg: '199px' },
                                    marginLeft: '5px',
                                    marginTop: '3rem',
                                    background: 'none',
                                    boxShadow: 'none',
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div className="ImageProducts">
                                    <img src={card.img} alt="" className="CenteredImage" />
                                </div>
                                <Typography
                                    sx={{
                                        marginTop: '15px',
                                        textAlign: 'center',
                                        color: '#252614',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                    }}
                                >
                                    {card?.description}
                                </Typography>
                            </Card>
                        </NavLink>
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
