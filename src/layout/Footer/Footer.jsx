import { Box, Grid } from '@mui/material'
import React from 'react';
import fbicon from '../../assets/images/fbicon.svg'
import twittericon from '../../assets/images/twittericon.svg'
import pinteresticon from '../../assets/images/pinteresticon.svg'
import instagramicon from '../../assets/images/instagramicon.svg'
import CustomTypography from '../../components/typography/CustomTypography'
import Appleicon from '../../assets/images/Appleicon.svg'
import googleplayicon from '../../assets/images/googleplayicon.svg'
import ApplePay from '../../assets/images/ApplePay.svg'
import visalogo from '../../assets/images/visalogo.svg'
import Discover from '../../assets/images/Discover.svg'
import Mastercard from '../../assets/images/Mastercard.svg'
import lockicon from '../../assets/images/lockicon.svg'
import LogoLight from '../../components/logos/LogoLight';
import { Link } from 'react-router-dom';

function Footer() {
    const myAccountItems = ['Business Login', 'Club Login', 'List your Store', 'List your Dispensaries', 'List your CBD Stores', 'List your Restaurant, Caffe , Club, Hubs , THC/CBD Lounge', 'List Your Brand', 'List your Practice', 'List Certify Lab', 'Sell on Dopecy', 'Start Package Delivery', 'Business on Dopecy', 'Drive with Dopecy', 'Build Your Brand'];
    const helpsItems = ['Contact', 'FAQs', 'Terms & Condition', 'Privacy Policy'];
    const proxyItems = ['About Dopecy', 'FAQ', 'Accessibility', 'Commercial Terms of Use', 'Privacy policy & Terms', 'Terms of Use'];


    return (
        <Box sx={{ bgcolor: 'text.titleblack' }}>
            <Box sx={{ borderBottom: '1px solid', borderColor: 'text.cstmwhite', px: 8, pt: 8, pb: 4 }}>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <Box sx={{ py: 4, display: 'flex', flexDirection: 'column' }}>
                            <Link to='/'>
                                <Box sx={{ width: '124px' }} >
                                    <LogoLight />
                                </Box>
                            </Link>
                            <CustomTypography
                                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box component={'img'} src={fbicon} alt='fbicon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={twittericon} alt='twittericon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={pinteresticon} alt='pinteresticon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={instagramicon} alt='instagramicon' />

                                </Grid>

                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{ pt: 4 }}>
                            <Grid container spacing={12}>
                                <Grid item xs={6}>
                                    <Grid container sx={{ flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box>
                                                <CustomTypography
                                                    text='My Account'
                                                    style={{
                                                        fontSize: '18px',
                                                        lineHeight: '20px',
                                                        fontWeight: '600',
                                                        textAlign: 'left',
                                                        color: 'text.white',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '40px', height: '4px', bgcolor: 'primary.main', my: 2 }}>

                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid sx={{ flexDirection: 'column' }} container spacing={2}>
                                                {myAccountItems.map((item) => (
                                                    <Grid item key={item} onClick={() => handleClick(item)}>
                                                        <CustomTypography
                                                            text={item}
                                                            style={{
                                                                fontSize: '14px',
                                                                lineHeight: '21px',
                                                                fontWeight: '400',
                                                                color: 'text.footerlinks',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    color: 'text.white',
                                                                }

                                                            }}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                {/* <Grid item>
                                    <Grid container sx={{ flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box>
                                                <CustomTypography
                                                    text='Helps'
                                                    style={{
                                                        fontSize: '18px',
                                                        lineHeight: '20px',
                                                        fontWeight: '600',
                                                        textAlign: 'left',
                                                        color: 'text.white',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '40px', height: '4px', bgcolor: 'primary.main', my: 2 }}>

                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid sx={{ flexDirection: 'column' }} container spacing={2}>
                                                {helpsItems.map((item) => (
                                                    <Grid item key={item} onClick={() => handleClick(item)}>
                                                        <CustomTypography
                                                            text={item}
                                                            style={{
                                                                fontSize: '14px',
                                                                lineHeight: '21px',
                                                                fontWeight: '400',
                                                                color: 'text.footerlinks',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    color: 'text.white',
                                                                }

                                                            }}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid> */}
                                <Grid item xs={6}>
                                    <Grid container sx={{ flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box>
                                                <CustomTypography
                                                    text='Proxy'
                                                    style={{
                                                        fontSize: '18px',
                                                        lineHeight: '20px',
                                                        fontWeight: '600',
                                                        textAlign: 'left',
                                                        color: 'text.white',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ width: '40px', height: '4px', bgcolor: 'primary.main', my: 2 }}>

                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid sx={{ flexDirection: 'column' }} container spacing={2}>
                                                {proxyItems.map((item) => (
                                                    <Grid item key={item} onClick={() => handleClick(item)}>
                                                        <CustomTypography
                                                            text={item}
                                                            style={{
                                                                fontSize: '14px',
                                                                lineHeight: '21px',
                                                                fontWeight: '400',
                                                                color: 'text.footerlinks',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    color: 'text.white',
                                                                }

                                                            }}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ py: 4 }}>
                            <Grid container sx={{ flexDirection: 'column' }}>
                                <Grid item>
                                    <Box>
                                        <CustomTypography
                                            text='Download Mobile App'
                                            style={{
                                                fontSize: '18px',
                                                lineHeight: '20px',
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                color: 'text.white',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '40px', height: '4px', bgcolor: 'primary.main', my: 2 }}>

                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={2}>
                                        <Grid item sx={{ cursor: 'pointer' }}>
                                            <Box sx={{
                                                bgcolor: 'text.graybg3',
                                                p: 2,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: '10px'
                                            }}>
                                                <Box sx={{ mr: 1 }} component={'img'} src={Appleicon} alt='Appleicon'></Box>
                                                <Box>

                                                    <CustomTypography
                                                        text='Download on the'
                                                        style={{
                                                            fontSize: '11px',
                                                            lineHeight: '14px',
                                                            fontWeight: '400',
                                                            textAlign: 'left',
                                                            color: 'text.graytextB3',
                                                        }}
                                                    />
                                                    <CustomTypography
                                                        text='App Store'
                                                        style={{
                                                            fontSize: '16px',
                                                            lineHeight: '24px',
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
                                                p: 2,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: '10px'
                                            }}>
                                                <Box sx={{ mr: 1 }} component={'img'} src={googleplayicon} alt='googleplayicon'></Box>
                                                <Box>

                                                    <CustomTypography
                                                        text='Download on the'
                                                        style={{
                                                            fontSize: '11px',
                                                            lineHeight: '14px',
                                                            fontWeight: '400',
                                                            textAlign: 'left',
                                                            color: 'text.graytextB3',
                                                        }}
                                                    />
                                                    <CustomTypography
                                                        text='Google play'
                                                        style={{
                                                            fontSize: '16px',
                                                            lineHeight: '24px',
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
            <Box sx={{ px: 8, py: 4 }}>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={6}>
                        <CustomTypography
                            text='Dopecy eCommerce © 2024. All Rights Reserved'
                            style={{
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: 'text.graytextB3',
                                textAlign: 'left',
                                my: 2
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2} sx={{ justifyContent: 'end' }}>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: 0.5, border: '2px solid', borderColor: 'text.graybg3', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '64px', height: '30px' }} component={'img'} src={ApplePay} alt='ApplePay' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: 0.5, border: '2px solid', borderColor: 'text.graybg3', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '64px', height: '30px' }} component={'img'} src={visalogo} alt='visalogo' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: 0.5, border: '2px solid', borderColor: 'text.graybg3', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '64px', height: '30px' }} component={'img'} src={Discover} alt='Discover' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: 0.5, border: '2px solid', borderColor: 'text.graybg3', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '64px', height: '30px' }} component={'img'} src={Mastercard} alt='Mastercard' />
                                </Box>
                            </Grid>
                            <Grid item sx={{ cursor: 'pointer' }}>
                                <Box sx={{ p: 0.5, border: '2px solid', borderColor: 'text.graybg3', borderRadius: '10px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                        <Box component={'img'} src={lockicon} alt='lockicon' />
                                        <CustomTypography
                                            text='Secure'
                                            style={{
                                                fontWeight: '400',
                                                fontSize: '11px',
                                                lineHeight: '11px',
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
                                                fontSize: '12px',
                                                lineHeight: '12px',
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
    )
}

export default Footer