import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';

export default function ShopCard(props) {
    const totalrating = '(' + props.shop.totalrating + ')';
    const title = truncateTitle(props?.shop?.title ? props?.shop?.title : 'Whimsical Wonder shop', 45);

    return (
        <Box
            sx={{
                width: '21.3125rem', // 341px converted to rem
                height: '23.3125rem', // 373px converted to rem
                bgcolor: 'text.white',
                border: '0.0625rem solid transparent', // 1px converted to rem
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >
            <Box sx={{ width: '21.3125rem', height: '10.75rem' }} component={'img'} src={props?.shop?.cover ? props?.shop?.cover : pimag} alt='pimag' />

            <Box
                sx={{
                    borderRadius: '9.9375rem', // 159px converted to rem
                    width: '9.75rem', // 156px converted to rem
                    height: '9.75rem', // 156px converted to rem
                    bgcolor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '3.125rem', // 50px converted to rem
                    left: '6.25rem', // 100px converted to rem
                }}
            >
                <Box sx={{ width: '9.75rem', height: '9.75rem', borderRadius: '9.9375rem' }} component={'img'} src={props?.shop?.image ? props?.shop?.image : pimag} alt='pimag' />
            </Box>

            <Box sx={{ p: '1rem', mt: '1.5rem' }}> {/* Padding: 16px (1rem) and Margin-top: 24px (1.5rem) */}
                <Grid container sx={{ flexDirection: 'column' }}>
                    <Grid item>
                        <CustomTypography
                            text={title}
                            style={{
                                fontWeight: '600',
                                fontSize: '1.25rem', // 20px converted to rem
                                lineHeight: '1.25rem', // 20px converted to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                mb: '0.625rem' // 10px converted to rem
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Grid item>
                                <CustomTypography
                                    text={props?.shop?.location ? props?.shop?.location : 'Location'}
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '0.875rem', // 14px converted to rem
                                        lineHeight: '0.875rem', // 14px converted to rem
                                        color: 'text.primary',
                                        textAlign: 'left'
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex', my: '0.625rem' }}> {/* Margin-y: 10px (0.625rem) */}
                                    <Rating size="small" sx={{ mb: '0.625rem' }} name="read-only" value={props?.product?.rating ? props?.product?.rating : 4} readOnly />
                                    <CustomTypography
                                        text={totalrating}
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '0.75rem', // 12px converted to rem
                                            lineHeight: '1rem', // 16px converted to rem
                                            color: 'text.darkgray',
                                            textAlign: 'right'
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <CustomTypography
                            text='Opening hours'
                            style={{
                                fontWeight: '400',
                                fontSize: '0.875rem', // 14px converted to rem
                                lineHeight: '0.875rem', // 14px converted to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                mb: '0.625rem' // 10px converted to rem
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <CustomTypography
                            text={props?.product?.openinghours ? props?.product?.openinghours : '--:--'}
                            style={{
                                fontWeight: '600',
                                fontSize: '0.875rem', // 14px converted to rem
                                lineHeight: '0.875rem', // 14px converted to rem
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
