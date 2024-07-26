import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import PackageIcon from '../../../assets/images/PackageICon.svg';

function DeliverySection() {
    const theme = useTheme();

    const getTypographyStyles = () => ({
        fontSize: '16px',
        lineHeight: '19px',
        fontWeight: '600',
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px',
            lineHeight: '22px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            lineHeight: '24px',
        },
    });

    const getSubTypographyStyles = () => ({
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '400',
        textAlign: 'left',
        color: 'text.footerlinks',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            lineHeight: '27px',
        },
    });

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: 8,
                        bgcolor: 'text.white',
                        p: 2
                    }}
                >
                    <Box sx={{ mr: 3 }}>
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text='Cannabis Delivery'
                            style={getTypographyStyles()}
                        />
                        <CustomTypography
                            text='Lorem Ipsum is the dummy text'
                            style={getSubTypographyStyles()}
                        />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: 8,
                        bgcolor: 'text.white',
                        p: 2
                    }}
                >
                    <Box sx={{ mr: 3 }}>
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text='Liquor Delivery'
                            style={getTypographyStyles()}
                        />
                        <CustomTypography
                            text='Lorem Ipsum is the dummy text'
                            style={getSubTypographyStyles()}
                        />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: 8,
                        bgcolor: 'text.white',
                        p: 2
                    }}
                >
                    <Box sx={{ mr: 3 }}>
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text='Food Delivery'
                            style={getTypographyStyles()}
                        />
                        <CustomTypography
                            text='Lorem Ipsum is the dummy text'
                            style={getSubTypographyStyles()}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default DeliverySection;
