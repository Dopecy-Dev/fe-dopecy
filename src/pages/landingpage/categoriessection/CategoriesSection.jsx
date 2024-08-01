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
import { useTheme } from '../../../contexts/ThemeContext';

const categories = [
    { text: 'Mobile', image: catMobile },
    { text: 'Cannabis', image: cannebiesimage },
    { text: 'Electronics', image: electronicsimage },
    { text: 'Liquor', image: Liquorimage },
    { text: 'Watches', image: watchesimage },
    { text: 'Food', image: foodimage },
    { text: 'Accessories', image: accessoriesimage },
];

function CategoriesSection() {
    const handleCategoryClick = (category) => {
        console.log(`Clicked on category: ${category.text}`);
        // Add navigation or other click handling logic here
    };


    const { theme } = useTheme()

    const isLight = theme === 'light'

    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: { xs: '0.5rem', sm: '1rem' } }}>
                <Grid item>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                        <CustomTypography
                            text='Shop From'
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
                            text='Top Categories'
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
                        text='View All'
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

            <Grid container spacing={{ xs: 1, sm: 2, md: 1 }} sx={{ justifyContent: { xs: 'left', md: 'space-between' } }}>
                {categories.map((category, index) => (
                    <Grid item key={index} xs={6} sm={4} md={1}>
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
                ))}
            </Grid>
        </>
    );
}

export default CategoriesSection;
