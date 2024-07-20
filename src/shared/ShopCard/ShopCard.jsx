import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg'
import CustomTypography from '../../components/typography/CustomTypography';

export default function ShopCard(props) {

    const totalrating = '(' + props.shop.totalrating + ')'
    // const price = '$' + props?.product?.price
    const title = '$' + props?.shop?.title ? props?.shop?.title : 'Whimsical Wonder shop'

    return (

        <Box
            sx={{
                width: '341px',
                height: '373px',
                bgcolor: 'text.white',
                border: '1px solid transparent',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >

            <Box sx={{ width: '341px', height: '172px' }} component={'img'} src={props?.shop?.cover ? props?.shop?.cover : pimag} alt='pimag' />

            <Box
                sx={{
                    borderRadius: '100px',
                    width: '156px',
                    height: '156px',
                    bgcolor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '50px',
                    left: '100px',

                }}>
                <Box sx={{ width: '156px', height: '156px', borderRadius: '100px' }} component={'img'} src={props?.shop?.image ? props?.shop?.image : pimag} alt='pimag' />


            </Box>
            <Box sx={{ p: 2, mt: 4 }}>
                <Grid container sx={{ flexDirection: 'column' }}>
                    <Grid item>
                        <CustomTypography text={title}
                            style={{
                                fontWeight: '600',
                                fontSize: '20px',
                                lineHeight: '20px',
                                color: 'text.primary',
                                textAlign: 'left',
                                mb: 1
                            }}
                        />

                    </Grid>
                    <Grid item>
                        <Grid container
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Grid item>
                                <CustomTypography text={props?.shop?.location ? props?.shop?.location : 'Location'}
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '14px',
                                        color: 'text.primary',
                                        textAlign: 'left'
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex' }}>
                                    <Rating size="small" sx={{ mb: 1 }} name="read-only" value={props?.product?.rating ? props?.product?.rating : 4} readOnly />
                                    <CustomTypography text={totalrating}
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '16px',
                                            color: 'text.darkgray',
                                            textAlign: 'right'
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <CustomTypography text='Opening hours'
                            style={{
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: 'text.black',
                                textAlign: 'left'
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <CustomTypography text={props?.product?.openinghours ? props?.product?.openinghours : '--:--'}
                            style={{
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '14px',
                                color: 'text.black',
                                textAlign: 'left'
                            }}
                        />
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}
