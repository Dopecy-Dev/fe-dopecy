import { Box, Grid } from '@mui/material';
import React from 'react';
import fbicon from '../../assets/images/fbicon.svg';
import twittericon from '../../assets/images/twittericon.svg';
import pinteresticon from '../../assets/images/pinteresticon.svg';
import instagramicon from '../../assets/images/instagramicon.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import Appleicon from '../../assets/images/Appleicon.svg';
import googleplayicon from '../../assets/images/googleplayicon.svg';
import ApplePay from '../../assets/images/ApplePay.svg';
import visalogo from '../../assets/images/visalogo.svg';
import Discover from '../../assets/images/Discover.svg';
import Mastercard from '../../assets/images/Mastercard.svg';
import lockicon from '../../assets/images/lockicon.svg';
import LogoLight from '../../components/logos/LogoLight';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();


    const myAccountItems = [
        t('myAccountItems.businessLogin'),
        t('myAccountItems.clubLogin'),
        t('myAccountItems.listYourStore'),
        t('myAccountItems.listYourDispensaries'),
        t('myAccountItems.listYourCBDStores'),
        t('myAccountItems.listYourRestaurantCaffeClubHubsTHCCBDLounge'),
        t('myAccountItems.listYourBrand'),
        t('myAccountItems.listYourPractice'),
        t('myAccountItems.listCertifyLab'),
        t('myAccountItems.sellOnDopecy'),
        t('myAccountItems.startPackageDelivery'),
        t('myAccountItems.businessOnDopecy'),
        t('myAccountItems.driveWithDopecy'),
        t('myAccountItems.buildYourBrand')
    ];

    const proxyItems = [
        t('proxyItems.aboutDopecy'),
        t('proxyItems.faq'),
        t('proxyItems.accessibility'),
        t('proxyItems.commercialTermsOfUse'),
        t('proxyItems.investorsInquires'),
        t('proxyItems.contactUs')
    ];

    return (
        <Box sx={{ bgcolor: 'text.titleblack' }}>
            <Box sx={{ borderBottom: '0.0625rem solid', borderColor: 'text.cstmwhite', px: '2rem', pt: '2rem', pb: '1rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ py: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                            <Link to='/'>
                                <Box sx={{ width: '7.75rem' }}>
                                    <LogoLight />
                                </Box>
                            </Link>
                            <CustomTypography
                                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.3125rem',
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    my: '0.5rem'
                                }}
                            />
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box component={'img'} src={fbicon} alt='Facebook icon' />
                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={twittericon} alt='Twitter icon' />
                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={pinteresticon} alt='Pinterest icon' />
                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={instagramicon} alt='Instagram icon' />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ pt: '1rem' }}>
                            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                                <Grid item xs={12} md={9}>
                                    <Grid container sx={{ flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box>
                                                <CustomTypography
                                                    text={t('myAccount')}
                                                    style={{
                                                        fontSize: '1.125rem',
                                                        lineHeight: '1.25rem',
                                                        fontWeight: '600',
                                                        textAlign: 'left',
                                                        color: 'text.white',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '2.5rem', height: '0.25rem', bgcolor: 'text.main', my: '0.5rem' }} />
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                sx={{
                                                    columnCount: 3,
                                                    columnGap: '1.125rem',
                                                    maxHeight: '9.375rem', // 150px
                                                    overflow: 'auto',
                                                }}
                                            >
                                                {myAccountItems.map((item) => (
                                                    <CustomTypography
                                                        key={item}
                                                        text={item}
                                                        style={{
                                                            fontSize: '0.875rem',
                                                            lineHeight: '1.3125rem',
                                                            fontWeight: '400',
                                                            color: 'text.footerlinks',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            breakInside: 'avoid',
                                                            py: '0.125rem',
                                                            '&:hover': {
                                                                color: 'text.white',
                                                            },
                                                        }}
                                                        onClick={() => handleClick(item)}
                                                    />
                                                ))}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Grid container sx={{ flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box>
                                                <CustomTypography
                                                    text={t('proxy')}
                                                    style={{
                                                        fontSize: '1.125rem',
                                                        lineHeight: '1.25rem',
                                                        fontWeight: '600',
                                                        textAlign: 'left',
                                                        color: 'text.white',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '2.5rem', height: '0.25rem', bgcolor: 'text.main', my: '0.5rem' }} />
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                sx={{
                                                    columnCount: 1,
                                                    columnGap: '0.125rem',
                                                    maxHeight: '9.375rem', // 150px
                                                    overflow: 'auto',
                                                }}
                                            >
                                                {proxyItems.map((item) => (
                                                    <CustomTypography
                                                        key={item}
                                                        text={item}
                                                        style={{
                                                            fontSize: '0.875rem',
                                                            lineHeight: '1.3125rem',
                                                            fontWeight: '400',
                                                            color: 'text.footerlinks',
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            breakInside: 'avoid',
                                                            py: '0.125rem',
                                                            '&:hover': {
                                                                color: 'text.white',
                                                            },
                                                        }}
                                                        onClick={() => handleClick(item)}
                                                    />
                                                ))}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ py: '1.5rem' }}>
                            <Grid container sx={{ flexDirection: 'column' }}>
                                <Grid item>
                                    <Box>
                                        <CustomTypography
                                            text={t('downloadMobileApp')}
                                            style={{
                                                fontSize: '1.125rem',
                                                lineHeight: '1.25rem',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                color: 'text.white',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '2.5rem', height: '0.25rem', bgcolor: 'text.main', my: '0.5rem' }} />
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={2}>
                                        <Grid item sx={{ cursor: 'pointer' }}>
                                            <Box sx={{
                                                bgcolor: 'text.graybg3',
                                                p: '0.5rem',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: '0.625rem' // 10px
                                            }}>
                                                <Box sx={{ mr: '0.25rem' }} component={'img'} src={Appleicon} alt='Apple icon' />
                                                <Box>
                                                    <CustomTypography
                                                        text={t('downloadApp.downloadOnThe')}
                                                        style={{
                                                            fontSize: '0.6875rem',
                                                            lineHeight: '0.875rem',
                                                            fontWeight: '400',
                                                            textAlign: 'left',
                                                            color: 'text.graytextB3',
                                                        }}
                                                    />
                                                    <CustomTypography
                                                        text={t('downloadApp.appStore')}
                                                        style={{
                                                            fontSize: '1rem',
                                                            lineHeight: '1.5rem',
                                                            fontWeight: '500',
                                                            textAlign: 'left',
                                                            color: 'text.white',
                                                        }}
                                                    />
                                                </Box>

                                            </Box>
                                        </Grid>
                                        <Grid item sx={{ cursor: 'pointer' }}>
                                            <Box sx={{
                                                bgcolor: 'text.graybg3',
                                                p: '0.5rem',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: '0.625rem' // 10px
                                            }}>
                                                <Box sx={{ mr: '0.25rem' }} component={'img'} src={googleplayicon} alt='Google Play icon' />
                                                <Box>
                                                    <CustomTypography
                                                        text={t('downloadApp.downloadOnThe')}
                                                        style={{
                                                            fontSize: '0.6875rem',
                                                            lineHeight: '0.875rem',
                                                            fontWeight: '400',
                                                            textAlign: 'left',
                                                            color: 'text.graytextB3',
                                                        }}
                                                    />
                                                    <CustomTypography
                                                        text='Google Play'
                                                        style={{
                                                            fontSize: '1rem',
                                                            lineHeight: '1.5rem',
                                                            fontWeight: '500',
                                                            textAlign: 'left',
                                                            color: 'text.white',
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ px: '2rem', py: '1rem' }}>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <CustomTypography
                            text={t('footerText')}
                            style={{
                                fontWeight: '400',
                                fontSize: '0.875rem',
                                lineHeight: '1.3125rem',
                                color: 'text.graytextB3',
                                textAlign: 'left',
                                my: '0.5rem'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2} sx={{ justifyContent: { xs: 'start', md: 'flex-end' } }}>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: '0.3125rem', border: '0.125rem solid', borderColor: 'text.graybg3', borderRadius: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '4rem', height: '1.875rem' }} component={'img'} src={ApplePay} alt='Apple Pay' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: '0.3125rem', border: '0.125rem solid', borderColor: 'text.graybg3', borderRadius: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '4rem', height: '1.875rem' }} component={'img'} src={visalogo} alt='Visa logo' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: '0.3125rem', border: '0.125rem solid', borderColor: 'text.graybg3', borderRadius: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '4rem', height: '1.875rem' }} component={'img'} src={Discover} alt='Discover' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: '0.3125rem', border: '0.125rem solid', borderColor: 'text.graybg3', borderRadius: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '4rem', height: '1.875rem' }} component={'img'} src={Mastercard} alt='Mastercard' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: '0.3125rem', border: '0.125rem solid', borderColor: 'text.graybg3', borderRadius: '0.625rem' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.3125rem' }}>
                                        <Box component={'img'} src={lockicon} alt='Lock icon' />
                                        <CustomTypography
                                            text='Secure'
                                            style={{
                                                fontWeight: '400',
                                                fontSize: '0.6875rem',
                                                lineHeight: '0.6875rem',
                                                color: 'text.white',
                                                textAlign: 'left',
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomTypography
                                            text='Payment'
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '0.75rem',
                                                lineHeight: '0.75rem',
                                                color: 'text.white',
                                                textAlign: 'left',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;
