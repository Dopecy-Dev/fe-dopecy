import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';

const Coins = () => {
    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    backgroundColor: '#FDCB58',
                    padding: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid container spacing={4} maxWidth="lg">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px 20px',
                                    backgroundColor: '#fff',
                                    borderRadius: '10px',
                                }}
                            >
                                <MonetizationOnIcon sx={{ fontSize: '40px', color: '#FDBF50' }} />
                                <Box sx={{ marginLeft: '10px' }}>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>50</Typography>
                                    <Typography sx={{ fontSize: '14px', color: '#555' }}>Saves $0.18</Typography>
                                </Box>
                            </Paper>
                        </Box>

                        <Typography
                            variant="h4"
                            sx={{ marginTop: '20px', fontWeight: 'bold', color: '#000' }}
                        >
                            Coins
                        </Typography>
                        <Typography sx={{ marginTop: '10px', color: '#666' }}>
                            Welcome to Dopecy, Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#FF5F5F',
                                borderRadius: '15px',
                                padding: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                border: '1px solid #FF5F5F',
                                position: 'relative',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '-8px',
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#FDCB58',
                                    borderRadius: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1,
                                },
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-8px',
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#FDCB58',
                                    borderRadius: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1,
                                },
                            }}
                        >
                            <Box>
                                <Button
                                    sx={{
                                        backgroundColor: '#D80027',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Today
                                </Button>
                                <Box
                                    sx={{
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <MonetizationOnIcon sx={{ fontSize: '40px', color: '#FDBF50' }} />
                                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#D80027' }}>
                                        +30
                                    </Typography>
                                </Box>
                                <Typography sx={{ marginTop: '10px', color: '#fff', textAlign: 'center' }}>
                                    Keep Coming Back For Bigger Win Or Coins
                                </Typography>
                                <Button
                                    sx={{
                                        backgroundColor: '#fff',
                                        color: '#D80027',
                                        borderRadius: '10px',
                                        padding: '10px 20px',
                                        marginTop: '10px',
                                        width: '100%',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Collect
                                </Button>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    sx={{ color: '#fff', fontSize: '16px', marginBottom: '10px' }}
                                >
                                    Daily Check-In
                                </Typography>
                                <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>
                                    Your Streak Record
                                </Typography>
                                <Typography sx={{ color: '#fff', fontSize: '30px', fontWeight: 'bold' }}>
                                    3 Days
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer></Footer>
        </>


    );
};

export default Coins;
