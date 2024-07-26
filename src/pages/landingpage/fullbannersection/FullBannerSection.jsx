import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import LaptopImage from '../../../assets/images/LaptopImage.svg';
import CustomTypography from '../../../components/typography/CustomTypography';
import ContainedButton from '../../../components/buttons/ContainedButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const banner = {
    title: 'Macbook Pro',
    detail: 'Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage',
    discount: 200.00,
    price: 1999,
    image: LaptopImage
}

function FullBannerSection() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const discountedamount = "$" + banner.discount;
    const price = "$" + banner.price;

    return (
        <Box sx={{ width: '100%', p: '1rem', bgcolor: 'common.pinkbg' }}>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CustomTypography
                                text='Save Up To'
                                style={{
                                    fontWeight: '400',
                                    fontSize: isSmallScreen ? '0.75rem' : '0.875rem', // 12px and 14px to rem
                                    lineHeight: '1.25rem', // 20px to rem
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: '0.0625rem', // 1px to rem
                                    px: '0.125rem', // 2px to rem
                                    py: '0.0625rem', // 1px to rem
                                    bgcolor: 'common.bennerdiscountbg',
                                    width: 'max-content'
                                }}
                            />
                            <CustomTypography
                                text={discountedamount}
                                style={{
                                    fontWeight: '700',
                                    fontSize: isSmallScreen ? '0.75rem' : '0.875rem', // 12px and 14px to rem
                                    lineHeight: '1.25rem', // 20px to rem
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: '0.0625rem', // 1px to rem
                                    pr: '0.125rem', // 2px to rem
                                    ml: '-0.0625rem', // -1px to rem
                                    py: '0.0625rem', // 1px to rem
                                    bgcolor: 'common.bennerdiscountbg',
                                    width: 'max-content'
                                }}
                            />
                        </Box>

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '2rem' : '3rem', // 32px and 48px to rem
                                lineHeight: '3.5rem', // 56px to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                my: '0.125rem' // 2px to rem
                            }}
                        />
                        <CustomTypography
                            text={banner.detail}
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '1rem' : '1.125rem', // 16px and 18px to rem
                                lineHeight: '2rem', // 32px to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                my: '0.125rem' // 2px to rem
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '11.9375rem', height: '3.5rem', borderRadius: '0.1875rem' }} // 191px to rem, 56px to rem, 3px to rem
                            text='SHOP NOW'
                            icon={ArrowForwardIcon}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Box
                        component={'img'}
                        src={banner.image}
                        alt='LaptopImage'
                        sx={{ width: isSmallScreen ? '100%' : 'auto', maxWidth: isSmallScreen ? '18.75rem' : 'none' }} // 300px to rem
                    />
                    <Box
                        sx={{
                            width: isSmallScreen ? '3.75rem' : '7rem', // 60px and 112px to rem
                            height: isSmallScreen ? '3.75rem' : '7rem', // 60px and 112px to rem
                            bgcolor: 'primary.main',
                            border: '0.3125rem solid', // 5px to rem
                            borderColor: 'text.white',
                            borderRadius: '100px',
                            p: '0.125rem', // 2px to rem
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: isSmallScreen ? '70%' : isLargeScreen ? '70%' : '0',
                            right: isSmallScreen ? '90%' : isLargeScreen ? '75%' : '0',
                            transform: isSmallScreen ? 'translateX(50%)' : 'none'
                        }}>
                        <CustomTypography
                            text={price}
                            style={{
                                fontWeight: '700',
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

export default FullBannerSection;
