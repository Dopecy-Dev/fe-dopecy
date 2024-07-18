import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomTypography from '../../../components/typography/CustomTypography'
import CategoryCard from '../../../shared/CategoryCard/CategoryCard'
import catMobile from '../../../assets/images/catMobile.svg'
import cannebiesimage from '../../../assets/images/cannebiesimage.svg'
import electronicsimage from '../../../assets/images/electronicsimage.svg'
import Liquorimage from '../../../assets/images/Liquorimage.svg'
import watchesimage from '../../../assets/images/watchesimage.svg'
import foodimage from '../../../assets/images/foodimage.svg'
import accessoriesimage from '../../../assets/images/accessoriesimage.svg'


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
    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Grid item>
                    <Box sx={{ display: 'flex' }}>
                        <CustomTypography
                            text='Shop From'
                            style={{
                                fontSize: '24px',
                                lineHeight: '30px',
                                fontWeight: '400',
                                textAlign: 'left',
                                color: 'text.darkgray',
                                mr: 1,
                            }}
                        />
                        <CustomTypography
                            text='Top Categories'
                            style={{
                                fontSize: '24px',
                                lineHeight: '30px',
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
                            fontSize: '16px',
                            lineHeight: '18px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: 'primary.main'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {categories.map((category, index) => (
                    <Grid item key={index}>
                        <CategoryCard text={category.text} image={category.image} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CategoriesSection
