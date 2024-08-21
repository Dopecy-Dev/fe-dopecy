import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import PackageIcon from '../../../assets/images/PackageICon.svg';
import { useTranslation } from 'react-i18next';

function DeliverySection() {
    const theme = useTheme();

    const getTypographyStyles = () => ({
        fontSize: '1rem', // 16px to rem
        lineHeight: '1.1875rem', // 19px to rem
        fontWeight: '600',
        textAlign: 'left',
        color: 'text.primary',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.125rem', // 18px to rem
            lineHeight: '1.375rem', // 22px to rem
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // 20px to rem
            lineHeight: '1.5rem', // 24px to rem
        },
    });

    const getSubTypographyStyles = () => ({
        fontSize: '0.875rem', // 14px to rem
        lineHeight: '1.3125rem', // 21px to rem
        fontWeight: '400',
        textAlign: 'left',
        color: 'text.footerlinks',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem', // 16px to rem
            lineHeight: '1.5rem', // 24px to rem
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // 18px to rem
            lineHeight: '1.6875rem', // 27px to rem
        },
    });
    const { t } = useTranslation();

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: 8,
                        bgcolor: 'common.deliverybg',
                        p: '1rem', // 16px to rem
                    }}
                >
                    <Box sx={{ mr: '1.5rem' }}> {/* 24px to rem */}
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text={t('cannabisDelivery')}
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
                        bgcolor: 'common.deliverybg',
                        p: '1rem', // 16px to rem
                    }}
                >
                    <Box sx={{ mr: '1.5rem' }}> {/* 24px to rem */}
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text={t('liquorDelivery')}
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
                        bgcolor: 'common.deliverybg',
                        p: '1rem', // 16px to rem
                    }}
                >
                    <Box sx={{ mr: '1.5rem' }}> {/* 24px to rem */}
                        <Box component={'img'} src={PackageIcon} alt='PackageIcon' />
                    </Box>
                    <Box>
                        <CustomTypography
                            text={t('foodDelivery')}
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
