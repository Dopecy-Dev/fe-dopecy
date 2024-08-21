import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import CategoryCard from '../../../shared/CategoryCard/CategoryCard';
import catMobile from '../../../assets/images/catMobile.svg';
import cannebiesimage from '../../../assets/images/cannebiesimage.svg';
import electronicsimage from '../../../assets/images/electronicsimage.svg';
import Liquorimage from '../../../assets/images/Liquorimage.svg';
import watchesimage from '../../../assets/images/watchesimage.svg';
import foodimage from '../../../assets/images/foodimage.svg';
import accessoriesimage from '../../../assets/images/accessoriesimage.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './CategoriesSection.css'
// import '../../../styles/global.css'

import { FreeMode, Autoplay, EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

function CategoriesSection() {
    const handleCategoryClick = (category) => {
        console.log(`Clicked on category: ${category.text}`);
        // Add navigation or other click handling logic here
    };

    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { t } = useTranslation()

    const categories = [
        { text: t('mobile'), image: catMobile },
        { text: t('cannabis'), image: cannebiesimage },
        { text: t('electronics'), image: electronicsimage },
        { text: t('liquor'), image: Liquorimage },
        { text: t('watches'), image: watchesimage },
        { text: t('food'), image: foodimage },
        { text: t('accessories'), image: accessoriesimage },
        { text: t('electronics'), image: electronicsimage },
        { text: t('liquor'), image: Liquorimage },
    ];

    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: { xs: '0.5rem', sm: '1rem' } }}>
                <Grid item>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                        <CustomTypography
                            text={t('shopFrom')}
                            style={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive font size
                                lineHeight: { xs: '1.5rem', sm: '1.875rem' }, // Responsive line height
                                fontWeight: '400',
                                textAlign: { xs: 'center', sm: 'left' },
                                color: 'text.darkgray',
                                mr: { xs: '0', sm: '0.0625rem' }, // Responsive margin
                                mb: { xs: '0.25rem', sm: '0' } // Responsive bottom margin
                            }}
                        />
                        <CustomTypography
                            text={t('topCategories')}
                            style={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive font size
                                lineHeight: { xs: '1.5rem', sm: '1.875rem' }, // Responsive line height
                                fontWeight: '700',
                                ml: 0.5,
                                textAlign: { xs: 'center', sm: 'left' },
                                color: !isLight ? 'text.primary' : 'text.main'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <CustomTypography
                        text={t('viewAll')}
                        style={{
                            fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
                            lineHeight: { xs: '1rem', sm: '1.125rem' }, // Responsive line height
                            fontWeight: '400',
                            textAlign: { xs: 'center', sm: 'left' },
                            color: !isLight ? 'text.primary' : 'text.main'
                        }}
                    />
                </Grid>
            </Grid>

            <Swiper
                freeMode={true}
                // slidesPerView={7}
                loop={true}
                mousewheel={true}
                keyboard={{
                    enabled: true,
                }}
                dir="rtl"
                navigation={isMobile ? true : false}
                autoplay={{
                    delay: 1500,
                }}
                speed={1000}

                breakpoints={{
                    320: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }}
                modules={[FreeMode, Autoplay, EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
                className='custom-swiper'
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Grid item xs={6} sm={4} md={1}>
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={() => handleCategoryClick(category)}
                            >
                                <CategoryCard text={category.text} image={category.image} />
                            </Box>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CategoriesSection;
