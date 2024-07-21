import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import LaptopImage from '../../../assets/images/LaptopImage.svg'
import CustomTypography from '../../../components/typography/CustomTypography';
import ContainedButton from '../../../components/buttons/ContainedButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FullBannerSection() {

    return (
        <>
            <Box sx={{ width: '100%', p: 4, bgcolor: 'common.pinkbg' }}>

                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item>
                        <Box sx={{ p: 6, display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>

                            <CustomTypography
                                text='Save Up T0 $200.00'
                                style={{
                                    fontWeight: '700',
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
                                text='Macbook Pro'
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
                                text='Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage'
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
                        <Box component={'img'} src={LaptopImage} alt='LaptopImage' />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FullBannerSection
