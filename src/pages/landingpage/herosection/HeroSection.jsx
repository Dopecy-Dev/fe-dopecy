import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Groupbanner from '../../../assets/images/Groupbanner.svg';
import banner from '../../../assets/images/banner.svg';
import ban from '../../../assets/images/ban.svg';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const responsive = {
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

const images = [
    Groupbanner,
    banner,
    ban
    // Add more images as needed
];

const CustomLeftArrow = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}
            sx={{
                position: 'absolute',
                left: 0,
                width: '80px',
                height: '80px',
                zIndex: 1,
                border: '5px solid white',
                bgcolor: 'common.heroarrowbg',
                '&:hover': {
                    border: '5px solid white',
                    bgcolor: 'common.heroarrowbg',
                },
            }}>
            <ArrowBackIos />
        </IconButton>
    );
}

const CustomRightArrow = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}
            sx={{
                position: 'absolute',
                right: 0,
                width: '80px',
                height: '80px',
                zIndex: 1,
                border: '5px solid white',
                bgcolor: 'common.heroarrowbg',
                '&:hover': {
                    border: '5px solid white',
                    bgcolor: 'common.heroarrowbg',
                },
            }}>
            <ArrowForwardIos />
        </IconButton>
    );
}

const CustomDot = ({ onClick, active }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                display: 'inline-block',
                width: active ? '24px' : '12px',
                height: active ? '12px' : '11px',
                borderRadius: active ? '30%' : '50%',
                margin: '0 4px',
                backgroundColor: active ? 'text.white' : 'text.cstmwhite',
                cursor: 'pointer',
                transition: 'width 0.3s ease, background-color 0.3s ease'
            }}
        />
    );
}

function HeroSection() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-container" // Apply custom dot container class
                itemClass="carousel-item-padding-40-px"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                customDot={<CustomDot />}
            >
                {images.map((image, index) => (
                    <Box key={index}>
                        <Box component='img' src={image} alt={`carousel-item-${index}`} sx={{ width: '100%', height: '470px' }} />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}

export default HeroSection;
