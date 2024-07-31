import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import CustomTypography from '../../../components/typography/CustomTypography'
import P1Image from '../../../assets/images/P1Image.svg'
import P2Image from '../../../assets/images/P2Image.svg'
import P7Image from '../../../assets/images/P7Image.svg'
import SmallProductCard from '../../../shared/SmallProductCard/SmallProductCard';

function SmallProductsSection() {
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
            title: 'Samsung Electronics Samsung Galexy S21 5G',
            rating: 4.0,
            totalrating: 746,
            price: '19.99',
            image: P2Image,
            type: 'Smart Phone'
        },
        {
            title: 'Fast food kids meals chock full of salt',
            rating: 4.4,
            totalrating: 111,
            price: '29.99',
            image: P7Image,
            bestdeals: true
        },
    ]);

    const handleProductClick = (product) => {
        console.log(`Clicked on product: ${product.title}`);
    };

    return (
        <>
            <Grid container spacing={2}> {/* 24px to rem */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomTypography
                        text='Flash Sale Today'
                        style={{
                            fontWeight: '600',
                            fontSize: '1rem',
                            lineHeight: '1.375rem', // 22px to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: '1.25rem' // 20px to rem
                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }}> {/* 16px to rem */}
                        {products.map((product, index) => (
                            <Grid item key={index}>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <SmallProductCard product={product} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomTypography
                        text='Best Sellers'
                        style={{
                            fontWeight: '600',
                            fontSize: '0.9375rem', // 15px to rem
                            lineHeight: '1.375rem', // 22px to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: '1.25rem' // 20px to rem
                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }}> {/* 16px to rem */}
                        {products.map((product, index) => (
                            <Grid item key={index}>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <SmallProductCard product={product} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomTypography
                        text='Top Rated'
                        style={{
                            fontWeight: '600',
                            fontSize: '0.9375rem', // 15px to rem
                            lineHeight: '1.375rem', // 22px to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: '1.25rem' // 20px to rem
                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }}> {/* 16px to rem */}
                        {products.map((product, index) => (
                            <Grid item key={index}>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <SmallProductCard product={product} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomTypography
                        text='New Arrival'
                        style={{
                            fontWeight: '600',
                            fontSize: '0.9375rem', // 15px to rem
                            lineHeight: '1.375rem', // 22px to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: '1.25rem' // 20px to rem
                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }}> {/* 16px to rem */}
                        {products.map((product, index) => (
                            <Grid item key={index}>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <SmallProductCard product={product} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SmallProductsSection
