import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCreative, Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Groupbanner from '../../../assets/images/Groupbanner.svg';
import hero1image from '../../../assets/images/hero1image.svg';
import hero2image from '../../../assets/images/hero2image.svg';
import hero3image from '../../../assets/images/hero3image.svg';
import testbanner from '../../../assets/images/testbanner.jpeg'
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './HeroSection.css';

const images = [
    Groupbanner,
    hero1image,
    hero2image,
    hero3image,
    testbanner,
];

const CustomLeftArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        className="custom-prev"
        sx={{
            position: 'absolute',
            left: '-3%',
            width: { xs: '1rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive width
            height: { xs: '1rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive height
            zIndex: 1,
            border: '0.3125rem solid white',
            bgcolor: 'common.heroarrowbg',
            '&:hover': {
                border: '0.3125rem solid white',
                bgcolor: 'common.heroarrowbg',
            },
        }}>
        <ArrowBackIos />
    </IconButton>
);

const CustomRightArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        className="custom-next"
        sx={{
            position: 'absolute',
            right: '-3%',
            width: { xs: '1rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive width
            height: { xs: '1rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive height
            zIndex: 1,
            border: '0.3125rem solid white',
            bgcolor: 'common.heroarrowbg',
            '&:hover': {
                border: '0.3125rem solid white',
                bgcolor: 'common.heroarrowbg',
            },
        }}>
        <ArrowForwardIos />
    </IconButton>
);

function HeroSection() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Swiper
                modules={[Autoplay, EffectCreative, Navigation, Mousewheel, Keyboard, Pagination]}
                effect={'creative'}
                grabCursor={true}
                loop={true}
                mousewheel={true}
                keyboard={true}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1500} // Adjust this value to slow down the transition (in milliseconds)
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -800], // 800px to rem
                        rotate: [180, 0, 0],
                    },
                    next: {
                        shadow: true,
                        translate: [0, 0, -800], // 800px to rem
                        rotate: [-180, 0, 0],
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box component='img' src={image} alt={`carousel-item-${index}`}
                            sx={{
                                width: '100%',
                                height: { xs: '11.375rem', sm: '19.375rem', md: '25rem', lg: '29.375rem' },
                                borderRadius: { xs: '1rem', md: '1.5rem' }
                            }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CustomLeftArrow />
            <CustomRightArrow />
            <Box className="custom-pagination" sx={{ textAlign: 'center', mt: '1.25rem' }} />
        </Box>
    );
}

export default HeroSection;
