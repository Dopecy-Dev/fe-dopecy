import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginbg from '../../assets/images/loginbg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import LogoLoginScreen from '../../components/logos/LogoLoginScreen';
import congratimage from '../../assets/images/congratimage.svg';

function Congratulation() {
    const navigate = useNavigate();
    const bonusPoints = 200;
    const bonusText = `Your Account is successfully created & you earn ${bonusPoints} bonus points as a new user.`;

    useEffect(() => {
        // Set a timer to redirect after 10 seconds
        const timer = setTimeout(() => {
            navigate('/login'); // Redirect to the home screen
        }, 5000); // 10000 milliseconds = 10 seconds

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Grid container sx={{ flex: 1 }}>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${loginbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(0deg, #D1D1D1 20%, #093E11 100%)',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 0.7,
                                p: '2rem', // 32px
                            }}
                        >
                            <Grid container spacing={4} sx={{ flexDirection: 'column', alignItems: 'start' }}>
                                <Grid item>
                                    <LogoLoginScreen />
                                </Grid>
                                <Grid item xs={8}>
                                    <CustomTypography
                                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '1.625rem', // 26px
                                            lineHeight: '2.25rem', // 36px
                                            color: 'text.white',
                                            textAlign: 'left',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '1.25rem', md: '2.5rem' }, bgcolor: 'text.white' }}>
                    <Box sx={{ width: '100%', maxWidth: '25rem' }}> {/* 400px */}
                        <Box component="img" src={congratimage} alt="congratimage" />
                        <CustomTypography
                            text='congratulation'
                            style={{
                                fontWeight: '600',
                                fontSize: '2.1875rem', // 35px
                                lineHeight: '1.75rem', // 28px
                                color: 'text.primary',
                            }}
                        />
                        <CustomTypography
                            text={bonusText}
                            style={{
                                fontWeight: '400',
                                fontSize: '1rem', // 16px
                                lineHeight: '1.75rem', // 28px
                                color: 'text.primary',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Congratulation;
