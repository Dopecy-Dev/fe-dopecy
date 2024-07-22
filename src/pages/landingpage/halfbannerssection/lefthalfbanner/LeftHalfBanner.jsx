

import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import LaptopImage from '../../../../assets/images/LaptopImage.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import CustomTypography from '../../../../components/typography/CustomTypography';
import leftbannerimage from '../../../../assets/images/leftbannerimage.svg'

const banner = {
    title: 'New Apple Homepod Mini',
    detail: 'Jam-packed with innovation, HomePod mini delivers unexpectedly.',
    image: leftbannerimage
}

function LeftHalfBanner() {

    return (
        <>
            <Box sx={{ width: '100%', p: 4, bgcolor: 'common.leftbannerbg' }}>

                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <CustomTypography
                                text='Introducing'
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
                                text={banner.title}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '32px',
                                    lineHeight: '40px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                }}
                            />
                            <CustomTypography
                                text={banner.detail}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    mb: 2
                                }}
                            />

                            <ContainedButton
                                style={{ width: '161px', height: '48px', borderRadius: '3px', }}
                                text='SHOP NOW'
                                icon={ArrowForwardIcon}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ width: '100%' }} component={'img'} src={banner.image} alt='LaptopImage' />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LeftHalfBanner
