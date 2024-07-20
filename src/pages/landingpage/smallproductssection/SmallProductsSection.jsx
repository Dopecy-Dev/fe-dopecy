import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import CustomTypography from '../../../components/typography/CustomTypography'
import ProductCard from '../../../shared/ProductCard/ProductCard'
import P1Image from '../../../assets/images/P1Image.svg'
import P2Image from '../../../assets/images/P2Image.svg'
import P3Image from '../../../assets/images/P3Image.svg'
import P4Image from '../../../assets/images/P4Image.svg'
import P5Image from '../../../assets/images/P5Image.svg'
import P6Image from '../../../assets/images/P6Image.svg'
import P7Image from '../../../assets/images/P7Image.svg'
import P8Image from '../../../assets/images/P8Image.svg'
import P9Image from '../../../assets/images/P9Image.svg'
import ArrowRight from '../../../assets/images/ArrowRight.svg'
import { LineWeight } from '@mui/icons-material';
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
            <Grid container spacing={3}>
                <Grid item>
                    <CustomTypography
                        text='Flash Sale Today'
                        style={{
                            fontWeight: '600',
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 2

                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }} >
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

                <Grid item>
                    <CustomTypography
                        text='Best Sellers'
                        style={{
                            fontWeight: '600',
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 2

                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }} >
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

                <Grid item>
                    <CustomTypography
                        text='Top Rated'
                        style={{
                            fontWeight: '600',
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 2

                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }} >
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

                <Grid item>
                    <CustomTypography
                        text='New Arrival'
                        style={{
                            fontWeight: '600',
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 2

                        }}
                    />

                    <Grid container spacing={2} sx={{ flexDirection: 'column' }} >
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
