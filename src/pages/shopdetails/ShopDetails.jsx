import React, { useState } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Box, Grid, Rating, useMediaQuery, useTheme } from '@mui/material';
import shopbannerimage from '../../assets/images/shopbannerimage.svg';
import shopimg from '../../assets/images/shopimg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import fbVector from '../../assets/images/fbVector.svg';
import xVector from '../../assets/images/xVector.svg';
import pVector from '../../assets/images/pVector.svg';
import instagram from '../../assets/images/instagram.svg';
import P1Image from '../../assets/images/P1Image.svg';
import P2Image from '../../assets/images/P2Image.svg';
import P3Image from '../../assets/images/P3Image.svg';
import P4Image from '../../assets/images/P4Image.svg';
import P5Image from '../../assets/images/P5Image.svg';
import P6Image from '../../assets/images/P6Image.svg';
import P7Image from '../../assets/images/P7Image.svg';
import P8Image from '../../assets/images/P8Image.svg';
import P9Image from '../../assets/images/P9Image.svg';
import ProductCard from '../../shared/ProductCard/ProductCard';

import { Link, useNavigate } from 'react-router-dom';

function ShopDetails() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [clickedItem, setClickedItem] = useState('All Products');
    const [shop, setShop] = useState({
        cover: shopbannerimage,
        image: shopimg,
        title: 'Costco Wholesale',
        details: 'MediBloom Wellness Center: Cultivating Health, Nurturing Lives. 🌿🌱',
        rating: 3,
        address: '123 Main Street, New York, USA',
        openinghour: '24/7',
    })

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
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P7Image,
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
            image: P3Image,
            bestdeals: true
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P8Image,
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
            image: P9Image,
            bestdeals: true
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P4Image,
        },
    ]);
    const handleClick = (item) => {
        setClickedItem(item);
    };

    const getStyle = (item) => ({
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: item === clickedItem ? '600' : '400',
        textAlign: 'left',
        color: item === clickedItem || item === 'Browse All Product' ? 'text.main' : 'text.darkgray',
        borderBottom: item === clickedItem ? '0.125rem solid' : 'none',
        cursor: 'pointer',
        paddingBottom: '0.25rem',
    });

    const navigate = useNavigate();

    const handleProductClick = (product) => {
        console.log(`Clicked on product: ${product.title}`);
        navigate("/productdetails");
    };


    const items = ['All Products', 'Smart Phone', 'Laptop', 'Headphone', 'TV'];

    return (
        <>
            <Header />
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem',
                    py: isMobile ? '1.25rem' : '2.5rem',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: isMobile ? '15rem' : '20rem',
                        objectFit: 'cover'
                    }}
                    component={'img'}
                    src={shop.cover}
                    alt='shopbannerimage'
                />
                <Box
                    sx={{
                        width: isMobile ? '8rem' : '12rem',
                        height: isMobile ? '8rem' : '12rem',
                        borderRadius: '50%',
                        border: '0.5rem solid',
                        borderColor: 'text.cstmwhite',
                        position: { xs: 'relative', md: 'absolute' },
                        top: { xs: '-4rem', sm: '-6rem', md: '30rem' },
                        left: { xs: '0rem', md: '6rem' },
                        p: 2,
                        bgcolor: 'common.searchbar',
                    }}
                    component={'img'}
                    src={shop.image}
                    alt='shopimg'
                />
                <Grid container sx={{ mt: { xs: '-4rem', md: '0rem' }, pl: { md: '16rem' }, justifyContent: { xs: 'center', sm: 'space-between' }, alignItems: 'center' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid container sx={{ flexDirection: 'column', justifyContent: 'start', alignItems: isMobile ? 'center' : 'start' }}>
                            <Grid item>
                                <CustomTypography
                                    text={shop.title}
                                    style={{
                                        fontWeight: '600',
                                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                                        lineHeight: '2rem',
                                        color: 'text.primary',
                                        textAlign: isMobile ? 'center' : 'left',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <CustomTypography
                                    text={shop.details}
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '1rem',
                                        lineHeight: '1.5rem',
                                        color: 'text.graytextB3',
                                        textAlign: isMobile ? 'center' : 'left',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Rating readOnly value={shop.rating} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <OutlinedButton
                            style={{ borderRadius: '0.375rem', p: '0.625rem 1.5rem' }} // 40px to rem
                            text='Chat With Seller'
                        />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        boxShadow: 6,
                        p: isMobile ? 2 : 4,
                        my: isMobile ? 4 : 6,
                        mx: { xs: 0, md: 4 }
                    }}
                >
                    <Grid container spacing={isMobile ? 2 : 4}>
                        <Grid item xs={12} sm={4}>
                            <CustomTypography
                                text='Opening Hours'
                                style={{
                                    fontWeight: '300',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.4rem',
                                    color: 'text.darkgray',
                                }}
                            />
                            <CustomTypography
                                text={"Open" + " " + shop.openinghour}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    lineHeight: '1.5rem',
                                    color: 'text.primary',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CustomTypography
                                text='Location'
                                style={{
                                    fontWeight: '300',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.4rem',
                                    color: 'text.darkgray',
                                }}
                            />
                            <CustomTypography
                                text={shop.address}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    lineHeight: '1.5rem',
                                    color: 'text.primary',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CustomTypography
                                text='Social Links'
                                style={{
                                    fontWeight: '300',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.4rem',
                                    color: 'text.darkgray',
                                }}
                            />
                            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                <Grid item>
                                    <Link to='#'>
                                        <Box component={'img'} src={fbVector} alt='fbVector' />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#'>
                                        <Box component={'img'} src={xVector} alt='xVector' />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#'>
                                        <Box component={'img'} src={pVector} alt='pVector' />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#'>
                                        <Box component={'img'} src={instagram} alt='instagram' />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2} sx={{ mb: 4, alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <CustomTypography
                                text='Shop From'
                                style={{
                                    fontSize: '1.25rem', // Adjusted for better responsiveness
                                    lineHeight: '1.5rem',
                                    fontWeight: '400',
                                    color: 'text.darkgray',
                                    textAlign: { xs: 'center', md: 'left' },
                                    mb: 1,
                                }}
                            />
                            <CustomTypography
                                text='All Products'
                                style={{
                                    fontSize: '1.25rem',
                                    lineHeight: '1.5rem',
                                    fontWeight: '700',
                                    color: 'primary.main',
                                    textAlign: { xs: 'center', md: 'left' },
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                            {items.map((item) => (
                                <Grid item key={item} onClick={() => handleClick(item)}>
                                    {item === 'Browse All Product' ?
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CustomTypography
                                                text={item}
                                                style={getStyle(item)}
                                            />
                                            <Box sx={{ ml: '0.5rem' }} component={'img'} src={ArrowRight} alt='ArrowRight' />
                                        </Box> :
                                        <Box sx={getStyle(item)}>
                                            <CustomTypography
                                                text={item}
                                                style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit', textAlign: 'inherit', color: 'inherit' }}
                                            />
                                        </Box>
                                    }
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Link to='/productdetails'>
                                <ProductCard product={product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>

            </Box>
            <Footer />
        </>
    );
}

export default ShopDetails;
