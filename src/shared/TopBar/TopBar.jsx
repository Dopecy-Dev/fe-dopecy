import { Box, Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import DopecyDealsIcon from '../../assets/images/DopecyDealsIcon.svg';
import BirdCouponIcon from '../../assets/images/BirdCouponIcon.svg';
import Buy1Get1Icon from '../../assets/images/Buy1Get1Icon.svg';
import FreeGiveawayIcon from '../../assets/images/FreeGiveawayIcon.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { useTranslation } from 'react-i18next';

import './TopBar.css'

function TopBar() {
    const { t } = useTranslation();

    const muiTheme = useTheme();
    const isMdUp = useMediaQuery(muiTheme.breakpoints.up('md'));

    return (
        <><Link to='/marketing-offers'>
            {isMdUp ?
                <Box className="scroll-container" sx={{ backgroundColor: 'common.topbarbg', cursor: 'pointer' }}>
                    <Box className="scroll-text">
                        <Grid container spacing={6}
                            sx={{
                                backgroundColor: 'transparent',
                                padding: {
                                    xs: '0.5rem 1rem',   // small devices, 8px 16px
                                    sm: '0.625rem 2rem',  // medium devices, 10px 32px
                                    md: '0.75rem 3rem',   // large devices, 12px 48px
                                    lg: '0.75rem 6.25rem',// extra large devices, 12px 100px
                                },
                                justifyContent: { xs: 'center', md: 'flex-end' },
                                alignItems: 'center',
                                flexWrap: 'nowrap'
                            }}>
                            <Grid item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Box component={'img'} src={DopecyDealsIcon} alt='DopecyDealsIcon' />
                                    <CustomTypography
                                        text={t('dopecyDeals')}
                                        style={{
                                            color: 'text.cstmwhite',
                                            marginLeft: { xs: '0.5rem', sm: '1rem' },
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Box component={'img'} src={BirdCouponIcon} alt='BirdCouponIcon' />
                                    <CustomTypography
                                        text={t('earlyBirdDeals')}
                                        style={{
                                            color: 'text.cstmwhite',
                                            marginLeft: { xs: '0.5rem', sm: '1rem' },
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Box component={'img'} src={Buy1Get1Icon} alt='Buy1Get1Icon' />
                                    <CustomTypography
                                        text={t('buy1Get1')}
                                        style={{
                                            color: 'text.cstmwhite',
                                            marginLeft: { xs: '0.5rem', sm: '1rem' },
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Box component={'img'} src={FreeGiveawayIcon} alt='FreeGiveawayIcon' />
                                    <CustomTypography
                                        text={t('freeGiveaway')}
                                        style={{
                                            color: 'text.cstmwhite',
                                            marginLeft: { xs: '0.5rem', sm: '1rem' },
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                :
                <Grid container spacing={0.5}
                    sx={{
                        backgroundColor: 'common.topbarbg',
                        padding: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Box sx={{ width: '10%', mr: 0.5 }} component={'img'} src={DopecyDealsIcon} alt='DopecyDealsIcon' />
                            <CustomTypography
                                text={t('dopecyDeals')}
                                style={{
                                    color: 'text.cstmwhite',
                                    cursor: 'pointer',
                                    fontWeight: '400',
                                    fontSize: '0.7rem',
                                    lineHeight: '0.8rem'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Box sx={{ width: '10%', mr: 0.5 }} component={'img'} src={BirdCouponIcon} alt='BirdCouponIcon' />
                            <CustomTypography
                                text={t('earlyBirdDeals')}
                                style={{
                                    color: 'text.cstmwhite',
                                    cursor: 'pointer',
                                    fontWeight: '400',
                                    fontSize: '0.7rem',
                                    lineHeight: '0.8rem'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Box sx={{ width: '10%', mr: 0.5 }} component={'img'} src={Buy1Get1Icon} alt='Buy1Get1Icon' />
                            <CustomTypography
                                text={t('buy1Get1')}
                                style={{
                                    color: 'text.cstmwhite',
                                    cursor: 'pointer',
                                    fontWeight: '400',
                                    fontSize: '0.7rem',
                                    lineHeight: '0.8rem'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Box sx={{ width: '10%', mr: 0.5 }} component={'img'} src={FreeGiveawayIcon} alt='FreeGiveawayIcon' />
                            <CustomTypography
                                text={t('freeGiveaway')}
                                style={{
                                    color: 'text.cstmwhite',
                                    cursor: 'pointer',
                                    fontWeight: '400',
                                    fontSize: '0.7rem',
                                    lineHeight: '0.8rem'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            }
        </Link>
        </>
    );
}

export default TopBar;
