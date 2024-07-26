import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import whiterightarrow from '../../assets/images/whiterightarrow.svg';
import blackleftarrow from '../../assets/images/blackleftarrow.svg';
import P1Image from '../../assets/images/P1Image.svg';
import P2Image from '../../assets/images/P2Image.svg';
import P3Image from '../../assets/images/P3Image.svg';
import P4Image from '../../assets/images/P4Image.svg';
import P5Image from '../../assets/images/P5Image.svg';
import P6Image from '../../assets/images/P6Image.svg';
import P7Image from '../../assets/images/P7Image.svg';
import P8Image from '../../assets/images/P8Image.svg';
import P9Image from '../../assets/images/P9Image.svg';
import ProductCard from '../ProductCard/ProductCard';

// const testimonials = [
//     {
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         name: 'Robert Fox',
//         role: 'Customer',
//         rating: 4,
//         userImage: testimonialuserimage,
//     }, {
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         name: 'Dianne Russell',
//         role: 'Customer',
//         rating: 5,
//         userImage: testimonialuserimage1,
//     }, {
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         name: 'Eleanor Pena',
//         role: 'Customer',
//         rating: 3,
//         userImage: testimonialuserimage2,
//     },
// ];

function RelatedProductsSection() {
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

    return (
        <>
            <Grid container sx={{ mb: '2.5rem' }}> {/* 40px to rem */}
                <Grid item>
                    <CustomTypography
                        text='Related Products'
                        style={{
                            fontSize: '1.5rem', // 24px to rem
                            lineHeight: '1.875rem', // 30px to rem
                            fontWeight: '700',
                            textAlign: 'left',
                            color: 'primary.main'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
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

export default RelatedProductsSection;
