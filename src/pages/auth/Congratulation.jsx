import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import loginbg from '../../assets/images/loginbg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import LogoLoginScreen from '../../components/logos/LogoLoginScreen';
import congratimage from '../../assets/images/congratimage.svg'

function Congratulation() {
    const bonusPoints = 200
    const bonusText = 'Your Account is successfully created & you earn' + ' ' + bonusPoints + ' ' + 'bonus points as a new user.'

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
                                p: 8,
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
                                            fontSize: '26px',
                                            lineHeight: '36px',
                                            color: 'text.white',
                                            textAlign: 'left',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 } }}>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Box component="img" src={congratimage} alt="congratimage" />
                        <CustomTypography
                            text='congratulation'
                            style={{
                                fontWeight: '600',
                                fontSize: '35px',
                                lineHeight: '28px',
                                color: 'text.primary',
                            }}
                        />
                        <CustomTypography
                            text={bonusText}
                            style={{
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '28px',
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
