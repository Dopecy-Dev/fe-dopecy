import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import P1Image from '../../assets/images/P1Image.svg';
import P2Image from '../../assets/images/P2Image.svg';
import P3Image from '../../assets/images/P3Image.svg';
import P4Image from '../../assets/images/P4Image.svg';
import P5Image from '../../assets/images/P5Image.svg';
import P6Image from '../../assets/images/P6Image.svg';
import P7Image from '../../assets/images/P7Image.svg';
import P8Image from '../../assets/images/P8Image.svg';
import P9Image from '../../assets/images/P9Image.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { Link } from 'react-router-dom';
import ProductCard from '../../shared/ProductCard/ProductCard';

function MarketingOffers() {
    const [products, setProducts] = useState([
        {
            title: 'TOZO T6 True Wireless Earbuds Bluetooth',
            rating: 4.5,
            totalrating: 786,
            price: '299.99',
            image: P1Image,
            hot: true,
            type: 'Smart Phone'
        },
        {
            title: 'Samsung Electronics Samsung Galexy S21 5G ',
            rating: 4.0,
            totalrating: 746,
            price: '19.99',
            image: P2Image,
            type: 'Smart Phone'
        },
        {
            title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
            rating: 4.7,
            totalrating: 236,
            price: '99.99',
            image: P3Image,
            bestdeals: true
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P4Image,
        },
        {
            title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
            rating: 4.7,
            totalrating: 236,
            price: '99.99',
            image: P5Image,
            bestdeals: true
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P6Image,
        },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
        // {
        //     title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
        //     rating: 4.7,
        //     totalrating: 236,
        //     price: '99.99',
        //     image: P3Image,
        //     bestdeals: true
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P7Image,
        // },
        // {
        //     title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
        //     rating: 4.7,
        //     totalrating: 236,
        //     price: '99.99',
        //     image: P3Image,
        //     bestdeals: true
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
        // {
        //     title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
        //     rating: 4.7,
        //     totalrating: 236,
        //     price: '99.99',
        //     image: P3Image,
        //     bestdeals: true
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P8Image,
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
        // {
        //     title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
        //     rating: 4.7,
        //     totalrating: 236,
        //     price: '99.99',
        //     image: P9Image,
        //     bestdeals: true
        // },
        // {
        //     title: 'Portable Wshing Machine, 11lbs capacity Model',
        //     rating: 4.3,
        //     totalrating: 236,
        //     price: '49.99',
        //     image: P4Image,
        // },
    ]);
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <Header />
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem',
                    py: isMobile ? '1.25rem' : '2.5rem',
                }}
            >
                <Grid container spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <CustomTypography
                            text='Dopecy Deals'
                            style={{
                                fontSize: '1.25rem',
                                lineHeight: '1.5rem',
                                fontWeight: '700',
                                color: 'text.main',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Link to='/product-details'>
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem',
                    py: isMobile ? '1.25rem' : '2.5rem',
                }}
            >
                <Grid container spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <CustomTypography
                            text='Early Bird Deals'
                            style={{
                                fontSize: '1.25rem',
                                lineHeight: '1.5rem',
                                fontWeight: '700',
                                color: 'text.main',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Link to='/product-details'>
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem',
                    py: isMobile ? '1.25rem' : '2.5rem',
                }}
            >
                <Grid container spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <CustomTypography
                            text='Buy 1 Get 1'
                            style={{
                                fontSize: '1.25rem',
                                lineHeight: '1.5rem',
                                fontWeight: '700',
                                color: 'text.main',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Link to='/product-details'>
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem',
                    py: isMobile ? '1.25rem' : '2.5rem',
                }}
            >
                <Grid container spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <CustomTypography
                            text='Free Giveaway'
                            style={{
                                fontSize: '1.25rem',
                                lineHeight: '1.5rem',
                                fontWeight: '700',
                                color: 'text.main',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Link to='/product-details'>
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />

        </>
    )
}

export default MarketingOffers