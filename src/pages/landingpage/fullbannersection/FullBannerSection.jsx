import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import LaptopImage from '../../../assets/images/LaptopImage.svg'
import CustomTypography from '../../../components/typography/CustomTypography';
import ContainedButton from '../../../components/buttons/ContainedButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const banner = {
    title: 'Macbook Pro',
    detail: 'Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage',
    discount: 200.00,
    price: 1999,
    image: LaptopImage
}

function FullBannerSection() {

    const discountedamount = "$" + banner.discount
    const price = "$" + banner.price

    return (
        <>
            <Box sx={{ width: '100%', p: 4, bgcolor: 'common.pinkbg' }}>

                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item>
                        <Box sx={{ p: 6, display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                <CustomTypography
                                    text='Save Up T0'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: 'text.primary',
                                        textAlign: 'left',
                                        my: 2,
                                        px: 2,
                                        py: 1,
                                        bgcolor: 'common.bennerdiscountbg',
                                        width: 'max-content'
                                    }}
                                />
                                <CustomTypography
                                    text={discountedamount}
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: 'text.primary',
                                        textAlign: 'left',
                                        my: 2,
                                        pr: 2,
                                        ml: -1.5,
                                        py: 1,
                                        bgcolor: 'common.bennerdiscountbg',
                                        width: 'max-content'
                                    }}
                                />
                            </Box>

                            <CustomTypography
                                text={banner.title}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '48px',
                                    lineHeight: '56px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />
                            <CustomTypography
                                text={banner.detail}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    lineHeight: '32px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />

                            <ContainedButton
                                style={{ width: '191px', height: '56px', borderRadius: '3px', }}
                                text='SHOP NOW'
                                icon={ArrowForwardIcon}
                            />

                        </Box>
                    </Grid>
                    <Grid item>
                        <Box component={'img'} src={banner.image} alt='LaptopImage' />
                        <Box
                            sx={{
                                width: '112px',
                                height: '112px',
                                bgcolor: 'primary.main',
                                border: '5px solid',
                                borderColor: 'text.white',
                                borderRadius: '100px',
                                p: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '3500px'
                            }}>
                            <CustomTypography
                                text={price}
                                style={{
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    color: 'text.white',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FullBannerSection
