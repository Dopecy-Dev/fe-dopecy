import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import CustomTypography from '../../../../components/typography/CustomTypography';
import rightbannerImage from '../../../../assets/images/rightbannerImage.svg';

const banner = {
    title: 'Xiaomi Mi 11 Ultra 12GB',
    detail: '*Data provided by internal laboratories. Industry measurement.',
    price: 590,
    image: rightbannerImage
};

function RightHalfBanner() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLight = theme.palette.mode === 'light'

    const price = "$" + banner.price;

    return (
        <Box sx={{ width: '100%', bgcolor: 'common.rightbannerbg', p: '1rem' }}>
            <Grid container sx={{ flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mb: isSmallScreen ? '1rem' : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isSmallScreen ? 'center' : 'baseline' }}>
                        <CustomTypography
                            text='Introducing New'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '0.75rem' : '0.875rem', // 12px and 14px to rem
                                lineHeight: '1.25rem', // 20px to rem
                                color: isLight ? 'text.primary' : 'text.black',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                my: '0.0625rem', // 1px to rem
                                px: '0.125rem', // 2px to rem
                                py: '0.0625rem', // 1px to rem
                                bgcolor: 'common.rightbannerintrobg',
                                width: 'max-content'
                            }}
                        />

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '1.5rem' : '2rem', // 24px and 32px to rem
                                lineHeight: '2.5rem', // 40px to rem
                                color: 'text.white',
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
                                color: 'text.white',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: '0.125rem' // 2px to rem
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '11.9375rem', height: '3rem', borderRadius: '0.1875rem' }} // 191px to rem, 48px to rem, 3px to rem
                            text='SHOP NOW'
                            icon={ArrowForwardIcon}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Box
                        component={'img'}
                        src={banner.image}
                        alt='RightBannerImage'
                        sx={{ width: isSmallScreen ? '80%' : '100%', maxWidth: '25rem' }} // 400px to rem
                    />
                    <Box
                        sx={{
                            width: isSmallScreen ? '3.125rem' : '5.625rem', // 50px and 90px to rem
                            height: isSmallScreen ? '3.125rem' : '5.625rem', // 50px and 90px to rem
                            bgcolor: 'text.main',
                            borderRadius: '100px',
                            p: '0.125rem', // 2px to rem
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: isSmallScreen ? '75%' : '70%',
                            right: isSmallScreen ? '25%' : '15%'
                        }}>
                        <CustomTypography
                            text={price}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '1rem' : '1.25rem', // 16px and 20px to rem
                                lineHeight: '1.75rem', // 28px to rem
                                color: 'text.white',
                                textAlign: 'center'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RightHalfBanner;
