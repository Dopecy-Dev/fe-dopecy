import { Box, Grid } from '@mui/material';
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

const categories = [
    {
        text: 'Mobile',
        image: catMobile,
    },
    {
        text: 'Cannabis',
        image: cannebiesimage,
    },
    {
        text: 'Electronics',
        image: electronicsimage,
    },
    {
        text: 'Liquor',
        image: Liquorimage,
    },
    {
        text: 'Watches',
        image: watchesimage,
    },
    {
        text: 'Food',
        image: foodimage,
    },
    {
        text: 'Accessories',
        image: accessoriesimage,
    },
];

function CategoriesSection() {
    const handleCategoryClick = (category) => {
        console.log(`Clicked on category: ${category.text}`);
        // Add navigation or other click handling logic here
    };

    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
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
                                mr: '0.0625rem', // 1px to rem
                            }}
                        />
                        <CustomTypography
                            text='Top Categories'
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
                    <CustomTypography
                        text='View All'
                        style={{
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.125rem', // 18px to rem
                            fontWeight: '400',
                            textAlign: 'left',
                            color: 'primary.main'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-between' }}>
                {categories.map((category, index) => (
                    <Grid item key={index}>
                        <Box
                            sx={{
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <CategoryCard text={category.text} image={category.image} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default CategoriesSection;
