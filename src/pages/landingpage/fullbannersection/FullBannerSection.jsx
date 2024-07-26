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
        <Box sx={{ width: '100%', p: 4, bgcolor: 'common.pinkbg' }}>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 6, display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CustomTypography
                                text='Save Up To'
                                style={{
                                    fontWeight: '400',
                                    fontSize: isSmallScreen ? '12px' : '14px',
                                    lineHeight: '20px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: 1,
                                    px: 2,
                                    py: 1,
                                    bgcolor: 'common.bennerdiscountbg',
                                    width: 'max-content'
                                }}
                            />
                            <CustomTypography
                                text={discountedamount}
                                style={{
                                    fontWeight: '700',
                                    fontSize: isSmallScreen ? '12px' : '14px',
                                    lineHeight: '20px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: 1,
                                    pr: 2,
                                    ml: -1,
                                    py: 1,
                                    bgcolor: 'common.bennerdiscountbg',
                                    width: 'max-content'
                                }}
                            />
                        </Box>

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '32px' : '48px',
                                lineHeight: '56px',
                                color: 'text.primary',
                                textAlign: 'left',
                                my: 2
                            }}
                        />
                        <CustomTypography
                            text={banner.detail}
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '16px' : '18px',
                                lineHeight: '32px',
                                color: 'text.primary',
                                textAlign: 'left',
                                my: 2
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '191px', height: '56px', borderRadius: '3px' }}
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
                        sx={{ width: isSmallScreen ? '100%' : 'auto', maxWidth: isSmallScreen ? '300px' : 'none' }}
                    />
                    <Box
                        sx={{
                            width: isSmallScreen ? '60px' : '112px',
                            height: isSmallScreen ? '60px' : '112px',
                            bgcolor: 'primary.main',
                            border: '5px solid',
                            borderColor: 'text.white',
                            borderRadius: '100px',
                            p: 2,
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
                                fontSize: isSmallScreen ? '16px' : '20px',
                                lineHeight: '28px',
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
