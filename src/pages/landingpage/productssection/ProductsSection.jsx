import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import ProductCard from '../../../shared/ProductCard/ProductCard';
import P1Image from '../../../assets/images/P1Image.svg';
import P2Image from '../../../assets/images/P2Image.svg';
import P3Image from '../../../assets/images/P3Image.svg';
import P4Image from '../../../assets/images/P4Image.svg';
import P5Image from '../../../assets/images/P5Image.svg';
import P6Image from '../../../assets/images/P6Image.svg';
import P7Image from '../../../assets/images/P7Image.svg';
import P8Image from '../../../assets/images/P8Image.svg';
import P9Image from '../../../assets/images/P9Image.svg';
import ArrowRight from '../../../assets/images/ArrowRight.svg';
import { useNavigate } from 'react-router-dom';

function ProductsSection() {
    const [clickedItem, setClickedItem] = useState('All Products');
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
            title: 'Samsung Electronics Samsung Galexy S21 5G ',
            rating: 4.0,
            totalrating: 746,
            price: '19.99',
            image: P2Image,
            type: 'Smart Phone'
        },
        {
            title: 'Amazon Basics Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
            rating: 4.7,
            totalrating: 236,
            price: '99.99',
            image: P3Image,
            bestdeals: true
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.3,
            totalrating: 236,
            price: '49.99',
            image: P4Image,
        },
        {
            title: 'Portable Wshing Machine, 11lbs capacity Model',
            rating: 4.6,
            totalrating: 216,
            price: '199.99',
            image: P4Image,
            type: 'Headphone'
        },
        {
            title: 'TOZO T6 True Wireless Earbuds Bluetooth',
            rating: 4.2,
            totalrating: 726,
            price: '9.99',
            image: P5Image,
            hot: true
        },
        {
            title: 'Cannabis-derived products like delta-8',
            rating: 3,
            totalrating: 226,
            price: '29.99',
            image: P6Image,
            type: 'cannabis'
        },
        {
            title: 'Fast food kids meals chock full of salt',
            rating: 4.4,
            totalrating: 111,
            price: '29.99',
            image: P7Image,
            bestdeals: true
        },
        {
            title: 'Cannabis-derived products like delta-8',
            rating: 1,
            totalrating: 726,
            price: '29.99',
            image: P8Image,
        },
        {
            title: 'Cannabis-derived products like delta-8 Cannabis derived  like delta-8',
            rating: 5,
            totalrating: 786,
            price: '29.99',
            image: P9Image,
        },
    ]);

    const handleClick = (item) => {
        setClickedItem(item);
    };

    const getStyle = (item) => ({
        fontSize: '0.875rem', // 14px to rem
        lineHeight: '1.25rem', // 20px to rem
        fontWeight: item === clickedItem ? '600' : '400',
        textAlign: 'left',
        color: item === clickedItem || item === 'Browse All Product' ? 'primary.main' : 'text.darkgray', // Change color on click
        borderBottom: item === clickedItem ? '0.125rem solid' : 'none', // 2px to rem
        cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
        paddingBottom: '0.25rem', // 4px to rem
    });

    const navigate = useNavigate();

    const handleProductClick = (product) => {
        console.log(`Clicked on product: ${product.title}`);
        navigate("/productdetails");
    };

    const items = ['All Products', 'Smart Phone', 'Laptop', 'Headphone', 'TV', 'Browse All Product'];

    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}> {/* 40px to rem */}
                <Grid item>
                    <Box sx={{ display: 'flex' }}>
                        <CustomTypography
                            text='Shop From'
                            style={{
                                fontSize: '1.5rem', // 24px to rem
                                lineHeight: '1.875rem', // 30px to rem
                                fontWeight: '400',
                                textAlign: 'left',
                                color: 'text.darkgray',
                                mr: 1,
                            }}
                        />
                        <CustomTypography
                            text='All Products'
                            style={{
                                fontSize: '1.5rem', // 24px to rem
                                lineHeight: '1.875rem', // 30px to rem
                                fontWeight: '700',
                                textAlign: 'left',
                                color: 'primary.main'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}> {/* 8px to rem */}
                        {items.map((item) => (
                            <Grid item key={item} onClick={() => handleClick(item)}>
                                {item === 'Browse All Product' ?
                                    <Box sx={{ display: 'flex' }}>
                                        <CustomTypography
                                            text={item}
                                            style={getStyle(item)}
                                        />
                                        <Box sx={{ ml: '0.0625rem' }} component={'img'} src={ArrowRight} alt='ArrowRight' />
                                    </Box> :
                                    <Box sx={getStyle(item)}>
                                        <CustomTypography
                                            text={item}
                                            style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit', textAlign: 'inherit', color: 'inherit' }}
                                        />
                                    </Box>
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={2}> {/* 8px to rem */}
                {products.map((product, index) => (
                    <Grid item key={index}>
                        <Box
                            sx={{
                                cursor: 'pointer',
                            }}
                            onClick={() => handleProductClick(product)}
                        >
                            <ProductCard product={product} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ProductsSection;
