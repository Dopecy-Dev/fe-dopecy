import React from 'react'
import ProductCard from '../../shared/ProductCard/ProductCard'
import { Box, Button, Grid, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SellerCard from '../../shared/SellerCard/SellerCard';
import DeliveryCard from '../../shared/DeliveryCard/DeliveryCard';
import { styled, alpha } from '@mui/material/styles';
import fbicon from '../../assets/images/facebookicon.svg'
import googleicon from '../../assets/images/googleicon.svg'
import twittericon from '../../assets/images/twitter-logo-2429.svg'
import appleicon from '../../assets/images/Apple_logo_black.svg'
import featuredimage from '../../assets/images/83d70974403181 1.svg'
import banner from '../../assets/images/banner.svg'

const responsiveforproduct = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const responsiveforseller = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const responsiveforwelcom = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const responsivefortopseller = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2.5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const LoginBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
    borderRadius: '25px',
    // height: '6rem',
    padding: '1rem'
    // boxShadow: 0,
}));

const TopSellersBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#326039' : '#326039',
    borderRadius: '25px',
    // height: '6rem',
    padding: '1rem'
    // boxShadow: 0,
}));


const WelcomedDealBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#326039' : '#f5f5f5',
    borderRadius: '25px',
    padding: '1rem'
}));

const RegisterBtn = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#326039' : '#326039',
    borderRadius: '25px',
    padding: '0.7rem 1.5rem',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2a5031' : '#2a5031', // Change this color to whatever you want for hover state
    }
}));

const LoginBtn = styled(Button)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#326039' : '#326039',
    borderRadius: '25px',
    padding: '0.7rem 1.5rem',
    textTransform: 'none',
    border: '1px solid #326039',
    '&:hover': {
        border: '1px solid #2a5031',
    }
}));


const data = [
    {
        id: 1,
        title: 'Events and Restaurants',
        btntext: 'Food Delivery',
    },
    {
        id: 2,
        title: 'Brands Clubs',
        btntext: 'Cannabis Delivery',
    },
    {
        id: 3,
        title: 'Liquor Stores',
        btntext: 'Liqueur Delivery',
    },
    {
        id: 4,
        title: 'Dispensary Stores',
        btntext: 'Medicine Delivery',
    },

]


function LandingPage() {
    return (
        <>
            <Box sx={{ p: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <LoginBox>
                            <Grid container spacing={2} justifyContent={'center'}>
                                <Grid item>
                                    <RegisterBtn variant='contained'> Register</RegisterBtn>
                                </Grid>
                                <Grid item>
                                    <LoginBtn variant='Outlined'> Sign in</LoginBtn>
                                </Grid>

                            </Grid>
                            <Typography variant='body2' sx={{ p: 1, my: 1 }}>
                                Or continue with
                            </Typography>
                            <Grid container spacing={2} justifyContent={'center'}>
                                <Grid item>
                                    <Box sx={{ width: '2rem' }} component="img" src={fbicon} alt="fbicon" />
                                </Grid>
                                <Grid item>
                                    <Box sx={{ width: '2rem' }} component="img" src={googleicon} alt="googleicon" />
                                </Grid>
                                <Grid item>
                                    <Box sx={{ width: '2rem' }} component="img" src={twittericon} alt="twittericon" />
                                </Grid>
                                <Grid item>
                                    <Box sx={{ width: '1.5rem' }} component="img" src={appleicon} alt="appleicon" />
                                </Grid>

                            </Grid>
                        </LoginBox>
                        <WelcomedDealBox sx={{ mt: 2, textAlign: 'left' }}>
                            <Typography variant='h5' sx={{ fontWeight: '800' }}>
                                Welcome Deal
                            </Typography>
                            <Typography variant='body2' sx={{ mb: 1 }}>
                                Your exclusive price
                            </Typography>
                            <Carousel
                                responsive={responsiveforwelcom}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                arrows={false}
                            >
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                                <ProductCard></ProductCard>
                            </Carousel>
                        </WelcomedDealBox>
                    </Grid>
                    <Grid item xs={3.5}>
                        <TopSellersBox sx={{ textAlign: 'left' }}>
                            <Typography variant='h5' sx={{ mb: 2, fontWeight: '800' }}>
                                Top Sellers
                            </Typography>
                            <Box>
                                <Box sx={{ px: 2, mb: 3 }}>
                                    <SellerCard width='maxContent'></SellerCard>
                                </Box>
                                <Typography variant='h6' sx={{ my: 2, fontWeight: '600' }}>
                                    Featured brands with coupons
                                </Typography>
                                <Carousel
                                    responsive={responsivefortopseller}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={4000}
                                >
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>
                                    <SellerCard width='120px'></SellerCard>

                                </Carousel>
                            </Box>

                        </TopSellersBox>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <LoginBox>
                                    <Box sx={{ width: '100%', borderRadius: '25px' }} component="img" src={featuredimage} alt="featuredimage" />
                                </LoginBox>

                            </Grid>
                            <Grid item xs={12}>
                                <LoginBox>
                                    <Box sx={{ width: '100%', borderRadius: '25px' }} component="img" src={banner} alt="banner" />
                                </LoginBox>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                Available for delivery
            </Typography>
            <Box sx={{ px: 4 }}>

                <Carousel
                    responsive={responsiveforseller}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={2000}
                >
                    {data.map((product) => (
                        <DeliveryCard key={product.id} width="320px" data={product} />
                    ))}
                </Carousel>
            </Box>

            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                Upcoming Products
            </Typography>
            <Box sx={{ px: 4 }}>
                <Carousel
                    responsive={responsiveforproduct}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                    <ProductCard width='210px'></ProductCard>
                </Carousel>
            </Box>
            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                Upcoming Sellers
            </Typography>
            <Box sx={{ px: 4 }}>
                <Carousel
                    responsive={responsiveforseller}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>
                    <SellerCard width='320px'></SellerCard>

                </Carousel>
            </Box>



            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                How It Works!
            </Typography>

        </>
    )
}

export default LandingPage