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
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './HeroSection.css';

const images = [
    Groupbanner,
    hero1image,
    hero2image,
    hero3image,
];

const CustomLeftArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        className="custom-prev"
        sx={{
            position: 'absolute',
            left: 0,
            width: '5rem', // 80px to rem
            height: '5rem', // 80px to rem
            zIndex: 1,
            border: '0.3125rem solid white', // 5px to rem
            bgcolor: 'common.heroarrowbg',
            '&:hover': {
                border: '0.3125rem solid white', // 5px to rem
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
            right: 0,
            width: '5rem', // 80px to rem
            height: '5rem', // 80px to rem
            zIndex: 1,
            border: '0.3125rem solid white', // 5px to rem
            bgcolor: 'common.heroarrowbg',
            '&:hover': {
                border: '0.3125rem solid white', // 5px to rem
                bgcolor: 'common.heroarrowbg',
            },
        }}>
        <ArrowForwardIos />
    </IconButton>
);

// const CustomDot = ({ onClick, active }) => (
//     <Box
//         onClick={onClick}
//         sx={{
//             display: 'inline-block',
//             width: active ? '1.5rem' : '0.75rem', // 24px and 12px to rem
//             height: active ? '0.75rem' : '0.6875rem', // 12px and 11px to rem
//             borderRadius: active ? '30%' : '50%',
//             margin: '0 0.25rem', // 4px to rem
//             backgroundColor: active ? 'text.white' : 'text.cstmwhite',
//             cursor: 'pointer',
//             transition: 'width 0.3s ease, background-color 0.3s ease'
//         }}
//     />
// );

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
                        <Box component='img' src={image} alt={`carousel-item-${index}`} sx={{ width: '100%', height: '29.375rem' }} /> {/* 470px to rem */}
                    </SwiperSlide>
                ))}
            </Swiper>
            <CustomLeftArrow />
            <CustomRightArrow />
            <Box className="custom-pagination" sx={{ textAlign: 'center', mt: '1.25rem' }} /> {/* 20px to rem */}
        </Box>
    );
}

export default HeroSection;
