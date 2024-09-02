import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import React, { useState } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Box, Button, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductImagesSlider from '../../shared/ProductImagesSlider/ProductImagesSlider';
import CustomTypography from '../../components/typography/CustomTypography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
import Checkicon from '../../assets/images/Checkicon.svg'
import heart from '../../assets/images/heart.svg'
import ContainedButton from '../../components/buttons/ContainedButton';
import AccordionUsage from './AccordionUsage';
import BasicTabs from './BasicTabs';
import TestimonialsSection from '../../shared/TestimonialsSection/TestimonialsSection';
import RelatedProductsSection from '../../shared/RelatedProductsSection/RelatedProductsSection'

function ProductDetails() {
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fullText = 'Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant. Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant. Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant.';
    const truncatedText = fullText.slice(0, 300) + '...';
    const [varient, setVarient] = React.useState('');
    const [count, setCount] = useState(0);

    const handleChange = (event) => {
        setVarient(event.target.value);
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <>
            <Header />
            <Box
                sx={{
                    px: isMobile ? '1.25rem' : '4rem', // 20px to rem and 80px to rem
                    py: isMobile ? '1.25rem' : '2.5rem', // 40px to rem
                }}
            >
                <Box sx={{ pb: isMobile ? '1.25rem' : '2.5rem' }}> {/* 40px to rem */}
                    <Breadcrumbs />
                </Box>
                <Grid container spacing={isMobile ? '1.25rem' : '2rem'}> {/* 20px to rem and 80px to rem */}
                    <Grid item xs={12} md={5}>
                        <ProductImagesSlider />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid sx={{ pr: isMobile ? 0 : '3rem' }} container spacing='1.25rem'> {/* 20px to rem */}
                            <Grid item xs={12}>
                                <CustomTypography
                                    text='Vitamin C-100ML-Original'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: isMobile ? '1.5rem' : '2.5rem', // 24px to rem and 40px to rem
                                        lineHeight: isMobile ? '2rem' : '3rem', // 32px to rem and 48px to rem
                                        textAlign: 'left',
                                        color: 'text.primary',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing='1.25rem'> {/* 20px to rem */}
                                    <Grid item>
                                        <Rating readOnly value={4} />
                                    </Grid>
                                    <Grid item>
                                        <CustomTypography
                                            text='288 reviews'
                                            style={{
                                                fontWeight: '600',
                                                fontSize: isMobile ? '0.875rem' : '1.125rem', // 14px to rem and 18px to rem
                                                lineHeight: isMobile ? '1.25rem' : '1.75rem', // 20px to rem and 28px to rem
                                                color: 'text.primary',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ width: '0.0625rem', height: '1.5625rem', bgcolor: 'text.graytextB3' }} /> {/* 1px to rem and 25px to rem */}
                                    </Grid>
                                    <Grid item>
                                        <CustomTypography
                                            text='100ml'
                                            style={{
                                                fontWeight: '500',
                                                fontSize: isMobile ? '0.875rem' : '1.125rem', // 14px to rem and 18px to rem
                                                lineHeight: isMobile ? '1.25rem' : '1.75rem', // 20px to rem and 28px to rem
                                                color: 'text.primary',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ pb: '2.5rem', borderBottom: '0.0625rem solid', borderColor: 'text.darkgray' }}> {/* 40px to rem */}
                                    <CustomTypography
                                        text='$40.99'
                                        style={{
                                            fontWeight: '600',
                                            fontSize: isMobile ? '1.5rem' : '2rem', // 24px to rem and 32px to rem
                                            lineHeight: isMobile ? '2rem' : '2.5rem', // 32px to rem and 40px to rem
                                            textAlign: 'left',
                                            color: 'common.mainbg',
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'left' }}>
                                    <CustomTypography
                                        text={isExpanded ? fullText : truncatedText}
                                        style={{
                                            fontWeight: '400',
                                            fontSize: isMobile ? '0.875rem' : '1rem', // 14px to rem and 16px to rem
                                            lineHeight: isMobile ? '1.25rem' : '1.5rem', // 20px to rem and 24px to rem
                                            textAlign: 'left',
                                            color: 'text.primary',
                                        }}
                                    />
                                    <CustomTypography
                                        text={isExpanded ? 'Read Less' : 'Read more...'}
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        style={{
                                            fontWeight: '800',
                                            fontSize: isMobile ? '0.875rem' : '1rem', // 14px to rem and 16px to rem
                                            lineHeight: isMobile ? '1.25rem' : '1.5rem', // 20px to rem and 24px to rem
                                            // color: 'primary.main',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing='1.25rem'> {/* 20px to rem */}
                                    <Grid item xs={6} sm={6} md={3}>
                                        <Box>
                                            <FormControl fullWidth>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={varient}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <em>100ml</em>;
                                                        }
                                                        return selected + 'ml';
                                                    }}
                                                    sx={{
                                                        // backgroundColor: 'common.cartselectionbg',
                                                        // color: 'text.main',
                                                        borderRadius: '1.5625rem', // 25px to rem
                                                        border: 'none',
                                                        '&:hover': {
                                                            // backgroundColor: 'common.cartselectionbg',
                                                        },
                                                        '&.Mui-focused': {
                                                            border: 'none',
                                                        },
                                                        '&.Mui-active': {
                                                            border: 'none',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: 'none',
                                                        }
                                                    }}
                                                    MenuProps={{
                                                        PaperProps: {
                                                            sx: {
                                                                borderRadius: '0.625rem', // 10px to rem
                                                                backgroundColor: 'common.mainbg',
                                                                color: 'text.primary'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {/* <MenuItem value="" disabled></MenuItem> */}
                                                    <MenuItem value={100}>100ml</MenuItem>
                                                    <MenuItem value={200}>200ml</MenuItem>
                                                    <MenuItem value={500}>500ml</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'common.cartselectionbg',
                                                borderRadius: '1.5625rem', // 25px to rem
                                                border: 'none',
                                                borderColor: 'text.primary',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <Button
                                                onClick={handleDecrement}
                                                sx={{
                                                    minWidth: '1.875rem', // 30px to rem
                                                    color: 'text.primary',
                                                    p: 0,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                    },
                                                    '&:focus': {
                                                        outline: 'none',
                                                        boxShadow: 'none',
                                                    },
                                                    '&.Mui-focused': {
                                                        outline: 'none',
                                                        boxShadow: 'none',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ width: '100%' }} component={'img'} src={minus} alt='minus icon' />
                                            </Button>
                                            <Typography
                                                sx={{
                                                    margin: '0 1rem', // 16px to rem
                                                    // color: 'text.main',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {count}
                                            </Typography>
                                            <Button
                                                onClick={handleIncrement}
                                                sx={{
                                                    minWidth: '1.875rem', // 30px to rem
                                                    color: 'text.primary',
                                                    p: 0,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                    },
                                                    '&:focus': {
                                                        outline: 'none',
                                                        boxShadow: 'none',
                                                    },
                                                    '&.Mui-focused': {
                                                        outline: 'none',
                                                        boxShadow: 'none',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ width: '100%' }} component={'img'} src={plus} alt='plus icon' />
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <ContainedButton
                                            style={{
                                                height: '100%',
                                                borderRadius: '1.5625rem', // 25px to rem
                                                fontWeight: '600',
                                                fontSize: isMobile ? '0.875rem' : '1.125rem', // 14px to rem and 18px to rem
                                                lineHeight: isMobile ? '1.25rem' : '1.75rem' // 20px to rem and 28px to rem
                                            }}
                                            text='Add to cart'
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container sx={{ justifyContent: 'space-between' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={5} sx={{ display: 'flex', alignItems: 'center', mb: { xs: '1rem', sm: '1rem', md: '1rem', lg: 0 } }}> {/* 16px to rem */}
                                        <Box component={'img'} src={heart} alt='heart icon' />
                                        <CustomTypography
                                            text='Add to wishlist'
                                            style={{
                                                fontWeight: '600',
                                                fontSize: { xs: '1rem', sm: '1.125rem' }, // 16px to rem and 18px to rem
                                                lineHeight: '1.75rem', // 28px to rem
                                                textAlign: 'left',
                                                color: 'text.primary',
                                                ml: '0.625rem' // 10px to rem
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: { lg: 'end' } }}>
                                        <Box component={'img'} src={Checkicon} alt='Checkicon icon' />
                                        <CustomTypography
                                            text='30 days money back guarantee'
                                            style={{
                                                fontWeight: '600',
                                                fontSize: { xs: '1rem', sm: '1.125rem' }, // 16px to rem and 18px to rem
                                                lineHeight: '1.75rem', // 28px to rem
                                                textAlign: 'left',
                                                color: 'text.primary',
                                                ml: '0.625rem' // 10px to rem
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <BasicTabs></BasicTabs>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid container sx={{ py: 4 }}> {/* 40px to rem */}
                    <Grid item xs={12}>
                        <TestimonialsSection></TestimonialsSection>
                    </Grid>
                </Grid>
                <Grid container sx={{ py: 4 }}> {/* 40px to rem */}
                    <Grid item>
                        <RelatedProductsSection></RelatedProductsSection>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default ProductDetails;
