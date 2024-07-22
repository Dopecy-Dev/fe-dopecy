

import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import LaptopImage from '../../../../assets/images/LaptopImage.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainedButton from '../../../../components/buttons/ContainedButton';
import CustomTypography from '../../../../components/typography/CustomTypography';
import rightbannerImage from '../../../../assets/images/rightbannerImage.svg'

const banner = {
    title: 'Xiaomi Mi 11 Ultra 12GB',
    detail: '*Data provided by internal laboratories. Industry measurment.',
    price: 590,
    image: rightbannerImage
}

function RightHalfBanner() {

    const price = "$" + banner.price

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'common.rightbannerbg' }}>

                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={6}>
                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>

                            <CustomTypography
                                text='Introducing New'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    my: 1,
                                    px: 2,
                                    py: 1,
                                    bgcolor: 'common.rightbannerintrobg',
                                    width: 'max-content'
                                }}
                            />

                            <CustomTypography
                                text={banner.title}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '32px',
                                    lineHeight: '40px',
                                    color: 'text.white',
                                    textAlign: 'left',
                                }}
                            />
                            <CustomTypography
                                text={banner.detail}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'text.white',
                                    textAlign: 'left',
                                    py: 1
                                }}
                            />

                            <ContainedButton
                                style={{ width: '191px', height: '56px', borderRadius: '3px', }}
                                text='SHOP NOW'
                                icon={ArrowForwardIcon}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        <Box sx={{ width: '98%' }} component={'img'} src={banner.image} alt='LaptopImage' />
                        <Box
                            sx={{
                                width: '90px',
                                height: '90px',
                                bgcolor: 'primary.main',
                                // border: '5px solid',
                                // borderColor: 'text.white',
                                borderRadius: '100px',
                                p: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '1430px',
                                right: '130px'
                            }}>
                            <CustomTypography
                                text={price}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    color: 'text.white',
                                    textAlign: 'center',
                                    // my: 2
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default RightHalfBanner
