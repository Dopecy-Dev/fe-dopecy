import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import React, { useState } from 'react';
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import { Box, Grid, Rating } from '@mui/material'
import ProductImagesSlider from '../../shared/ProductImagesSlider/ProductImagesSlider'
import CustomTypography from '../../components/typography/CustomTypography'
import OutlinedButton from '../../components/buttons/OutlinedButton';


function ProductDetails() {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = 'Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant. Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant. Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant.';

    const truncatedText = fullText.slice(0, 300) + '...';


    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    px: 8,
                    py: 4
                }}>
                <Box sx={{ pb: 4 }}>
                    <Breadcrumbs></Breadcrumbs>
                </Box>
                <Grid container spacing={8}>
                    <Grid item xs={5}>
                        <ProductImagesSlider></ProductImagesSlider>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid sx={{ pr: 8 }} container spacing={2}>
                            <Grid item xs={12}>
                                <CustomTypography
                                    text='Vitamin C-100ML-Original'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '40px',
                                        lineHeight: '48px',
                                        textAlign: 'left',
                                        color: 'text.primary',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container
                                    sx={{
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                    }}>
                                    <Grid item xs={2}>
                                        <Rating readOnly value={4}></Rating>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <CustomTypography
                                            text='288 reviews'
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '18px',
                                                lineHeight: '28px',
                                                // textAlign: 'left',
                                                color: 'text.primary',
                                            }}
                                        />

                                    </Grid>
                                    <Grid item xs={2}>
                                        <CustomTypography
                                            text='100ml'
                                            style={{
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '28px',
                                                // textAlign: 'left',
                                                color: 'text.primary',
                                            }}
                                        />
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ pb: 4, borderBottom: '1px solid', borderColor: 'text.darkgray' }}>
                                    <CustomTypography
                                        text='$40.99'
                                        style={{
                                            fontWeight: '600',
                                            fontSize: '32px',
                                            lineHeight: '40px',
                                            textAlign: 'left',
                                            color: 'primary.main',
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
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            textAlign: 'left',
                                            color: 'text.primary',
                                        }}
                                    />


                                    <CustomTypography
                                        text={isExpanded ? 'Read Less' : 'Read more...'}
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: 'primary.main',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                    />


                                    {/* <OutlinedButton
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        style={{
                                            textDecoration: 'underline',
                                            p: 0,
                                            textAlign: 'left',
                                            border: 'none',
                                            fontWeight: '800',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            '&:hover': {
                                                border: 'none',
                                            },
                                            '&:active': {
                                                border: 'none',
                                            }
                                        }}
                                        text={isExpanded ? 'Read Less' : 'Read more...'}
                                    /> */}
                                </Box>


                            </Grid>
                            <Grid item xs={12}>
                                <CustomTypography
                                    text='Vitamin C-100ML-Original'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '40px',
                                        lineHeight: '48px',
                                        textAlign: 'left',
                                        color: 'text.primary',
                                    }}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

            </Box>
            <Footer></Footer>
        </>
    )
}

export default ProductDetails