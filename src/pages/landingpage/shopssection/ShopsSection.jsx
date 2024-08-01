import { Box, Grid } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import ShopCard from '../../../shared/ShopCard/ShopCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import shopimage from '../../../assets/images/shopimage.svg';
import ShopCoverImage from '../../../assets/images/ShopCoverImage.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import './styles.css';

// import required modules
import { FreeMode, Autoplay, EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 64 },
        items: 4,
        slidesToSlide: 1, // Change this to 1 for continuous smooth transition
    },
    tablet: {
        breakpoint: { max: 64, min: 29 },
        items: 2,
        slidesToSlide: 1, // Change this to 1 for continuous smooth transition
    },
    mobile: {
        breakpoint: { max: 29, min: 0 },
        items: 1,
        slidesToSlide: 1, // Change this to 1 for continuous smooth transition
    },
};

function ShopsSection() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        const handleMouseEnter = () => swiperInstance.autoplay.stop();
        const handleMouseLeave = () => swiperInstance.autoplay.start();

        const swiperEl = swiperRef.current;
        swiperEl.addEventListener('mouseenter', handleMouseEnter);
        swiperEl.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            swiperEl.removeEventListener('mouseenter', handleMouseEnter);
            swiperEl.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const [shops, setShops] = useState([
        {
            title: 'Whimsical Wonder shop',
            location: 'USA',
            rating: 4.5,
            openinghours: '--:--',
            totalrating: 786,
            price: '299.99',
            image: shopimage,
            cover: ShopCoverImage,
            hot: true,
            type: 'Smart Phone'
        },
        {
            title: 'Whimsical Wonder shop',
            location: 'USA',
            rating: 4.0,
            openinghours: '--:--',
            totalrating: 746,
            price: '19.99',
            image: shopimage,
            cover: ShopCoverImage,
            type: 'Smart Phone'
        },
        {
            title: 'Whimsical Wonder shop',
            location: 'UK',
            rating: 4.7,
            totalrating: 236,
            openinghours: '--:--',
            price: '99.99',
            image: shopimage,
            cover: ShopCoverImage,
            bestdeals: true
        },
        {
            title: 'Portable Washing Machine, 11lbs capacity Model',
            location: 'USA',
            rating: 4.3,
            openinghours: '--:--',
            totalrating: 236,
            price: '49.99',
            image: shopimage,
            cover: ShopCoverImage,
        },
        {
            title: 'Portable Washing Machine, 11lbs capacity Model',
            location: 'UK',
            rating: 4.6,
            totalrating: 216,
            openinghours: '--:--',
            price: '199.99',
            image: shopimage,
            cover: ShopCoverImage,
            type: 'Headphone'
        },
        {
            title: 'TOZO T6 True Wireless Earbuds Bluetooth',
            openinghours: '--:--',
            location: 'USA',
            rating: 4.2,
            totalrating: 726,
            price: '9.99',
            image: shopimage,
            cover: ShopCoverImage,
            hot: true
        },
        {
            title: 'Cannabis-derived products like delta-8',
            openinghours: '--:--',
            location: 'UK',
            rating: 3,
            totalrating: 226,
            price: '29.99',
            cover: ShopCoverImage,
            image: shopimage,
            type: 'cannabis'
        },
        {
            title: 'Fast food kids meals chock full of salt',
            location: 'USA',
            openinghours: '--:--',
            rating: 4.4,
            totalrating: 111,
            price: '29.99',
            cover: ShopCoverImage,
            image: shopimage,
            bestdeals: true
        },
        {
            title: 'Cannabis-derived products like delta-8',
            openinghours: '--:--',
            location: 'USA',
            rating: 1,
            totalrating: 726,
            price: '29.99',
            image: shopimage,
            cover: ShopCoverImage,
        },
        {
            title: 'Cannabis-derived products like delta-8',
            location: 'USA',
            openinghours: '--:--',
            rating: 5,
            totalrating: 786,
            price: '29.99',
            cover: ShopCoverImage,
            image: shopimage,
        },
    ]);

    const handleShopClick = (shop) => {
        console.log(`Clicked on shop: ${shop.title}`);
    };

    const { theme } = useTheme()
    const isLightMode = theme === 'light';


    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: '2.5rem' }}> {/* 40px to rem */}
                <Grid item>
                    <Box sx={{ display: 'flex', ml: 8 }}> {/* 32px to rem */}
                        <CustomTypography
                            text='All Shops'
                            style={{
                                fontSize: '1.5rem', // 24px to rem
                                lineHeight: '1.875rem', // 30px to rem
                                fontWeight: '700',
                                textAlign: 'left',
                                color: isLightMode ? 'text.main' : 'text.primary'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                freeMode={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}


                breakpoints={{
                    // When window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // When window width is >= 1200px
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                // pagination={true}
                modules={[FreeMode, Autoplay, EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
            >
                <Grid container>
                    {shops.map((shop, index) => (
                        <SwiperSlide key={index}>
                            <Grid item xs={4}>
                                <Link to='/shopdetails'>
                                    <ShopCard shop={shop} />
                                </Link>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Grid>
            </Swiper>

            {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000} // Adjust the speed as needed
                keyBoardControl={true}
                customTransition="transform 2000ms ease-in-out"
                transitionDuration={1000} // Adjust the duration as needed
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {shops.map((shop, index) => (
                    <Box
                        key={index}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => handleShopClick(shop)}
                    >
                        <ShopCard shop={shop} />
                    </Box>
                ))}
            </Carousel> */}
        </>
    );
}

export default ShopsSection;
