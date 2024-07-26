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

    const price = "$" + banner.price;

    return (
        <Box sx={{ width: '100%', bgcolor: 'common.rightbannerbg', p: 4 }}>
            <Grid container sx={{ flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mb: isSmallScreen ? 4 : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isSmallScreen ? 'center' : 'baseline' }}>
                        <CustomTypography
                            text='Introducing New'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '12px' : '14px',
                                lineHeight: '20px',
                                color: 'text.primary',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                my: 1,
                                px: 2,
                                py: 1,
                                bgcolor: 'common.rightbannerintrobg',
                                width: 'max-content'
                            }}
                        />

                        <CustomTypography
                            text={banner.title}
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '24px' : '32px',
                                lineHeight: '40px',
                                color: 'text.white',
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
                                color: 'text.white',
                                textAlign: isSmallScreen ? 'center' : 'left',
                                mb: 2
                            }}
                        />

                        <ContainedButton
                            style={{ width: isSmallScreen ? '100%' : '191px', height: '48px', borderRadius: '3px' }}
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
                        sx={{ width: isSmallScreen ? '80%' : '100%', maxWidth: '400px' }}
                    />
                    <Box
                        sx={{
                            width: isSmallScreen ? '50px' : '90px',
                            height: isSmallScreen ? '50px' : '90px',
                            bgcolor: 'primary.main',
                            borderRadius: '100px',
                            p: 2,
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

export default RightHalfBanner;
