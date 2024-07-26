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
        <Box sx={{ width: '100%', p: 4, bgcolor: 'common.leftbannerbg' }}>
            <Grid container sx={{ flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mb: isSmallScreen ? 4 : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                        <CustomTypography
                            text='Introducing'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '12px' : '14px',
                                lineHeight: '20px',
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                my: 2,
                                px: 2,
                                py: 1,
                                bgcolor: 'common.bennerdiscountbg',
                                width: 'max-content'
                            }}
                        />

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '24px' : '32px',
                                lineHeight: '40px',
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: 2
                            }}
                        />

                        <CustomTypography
                            text={banner.detail}
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '14px' : '16px',
                                lineHeight: '24px',
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: 2
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '161px', height: '48px', borderRadius: '3px' }}
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
                        sx={{ width: isSmallScreen ? '80%' : '100%', maxWidth: '500px' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LeftHalfBanner;
