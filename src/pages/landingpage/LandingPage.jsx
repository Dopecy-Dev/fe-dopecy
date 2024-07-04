import React from 'react'
import ProductCard from '../../shared/ProductCard/ProductCard'
import { Grid, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SellerCard from '../../shared/SellerCard/SellerCard';

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
        items: 10,
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


function LandingPage() {
    return (
        <>
            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                Upcoming Products
            </Typography>
            <Carousel
                responsive={responsiveforproduct}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
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

            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                Upcoming Sellers
            </Typography>
            <Carousel
                responsive={responsiveforseller}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
            >
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
                <SellerCard></SellerCard>
            </Carousel>



            <Typography sx={{ p: 6 }} variant="h3" color="text.primary">
                How It Works!
            </Typography>

        </>
    )
}

export default LandingPage