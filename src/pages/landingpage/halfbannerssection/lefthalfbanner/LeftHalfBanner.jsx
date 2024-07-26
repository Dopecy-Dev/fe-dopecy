import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import CustomTypography from '../../../../components/typography/CustomTypography';
import leftbannerimage from '../../../../assets/images/leftbannerimage.svg';

const banner = {
    title: 'New Apple Homepod Mini',
    detail: 'Jam-packed with innovation, HomePod mini delivers unexpectedly.',
    image: leftbannerimage
};

function LeftHalfBanner() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ width: '100%', p: '1rem', bgcolor: 'common.leftbannerbg' }}>
            <Grid container sx={{ flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mb: isSmallScreen ? '1rem' : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                        <CustomTypography
                            text='Introducing'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '0.75rem' : '0.875rem', // 12px and 14px to rem
                                lineHeight: '1.25rem', // 20px to rem
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                my: '0.125rem', // 2px to rem
                                px: '0.125rem', // 2px to rem
                                py: '0.0625rem', // 1px to rem
                                bgcolor: 'common.bennerdiscountbg',
                                width: 'max-content'
                            }}
                        />

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '1.5rem' : '2rem', // 24px and 32px to rem
                                lineHeight: '2.5rem', // 40px to rem
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: '0.125rem' // 2px to rem
                            }}
                        />

                        <CustomTypography
                            text={banner.detail}
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '0.875rem' : '1rem', // 14px and 16px to rem
                                lineHeight: '1.5rem', // 24px to rem
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: '0.125rem' // 2px to rem
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '10.0625rem', height: '3rem', borderRadius: '0.1875rem' }} // 161px to rem, 48px to rem, 3px to rem
                            text='SHOP NOW'
                            icon={ArrowForwardIcon}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component={'img'}
                        src={banner.image}
                        alt='LeftBannerImage'
                        sx={{ width: isSmallScreen ? '80%' : '100%', maxWidth: '31.25rem' }} // 500px to rem
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LeftHalfBanner;
