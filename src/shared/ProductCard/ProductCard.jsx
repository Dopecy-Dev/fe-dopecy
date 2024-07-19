import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg'
import CustomTypography from '../../components/typography/CustomTypography';

export default function ProductCard(props) {

    const rating = '(' + props.product.totalrating + ')'
    const price = '$' + props?.product?.price
    const title = '$' + props?.product?.title ? props?.product?.title : 'TOZO T6 True Wireless Earbuds Bluetooth'

    return (

        <Box
            sx={{
                width: '234px',
                height: '320px',
                p: 2,
                border: '1px solid',
                borderColor: 'common.searchbar',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >
            {props.product.hot &&
                <Box
                    sx={{
                        width: '46px',
                        height: '26px',
                        bgcolor: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        // top: '12px',
                        // left: '12px',
                        padding: '5px, 10px, 5px, 10px'

                    }}>
                    <CustomTypography text='HOT'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '16px'

                        }} />

                </Box>
            }
            {props.product.bestdeals &&
                <Box
                    sx={{
                        width: '94px',
                        height: '26px',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        // top: '12px',
                        // left: '12px',
                        padding: '5px, 10px, 5px, 10px'

                    }}>
                    <CustomTypography text='BEST DEALS'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '16px'

                        }} />

                </Box>
            }
            <Box sx={{ width: '202px', height: '172px' }} component={'img'} src={props?.product?.image ? props?.product?.image : pimag} alt='pimag' />
            <Grid container sx={{ flexDirection: 'column' }}>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating sx={{ mb: 1 }} name="read-only" value={props?.product?.rating ? props?.product?.rating : 4} readOnly />
                        <CustomTypography text={rating}
                            style={{
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: 'text.darkgray',
                                textAlign: 'left'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <CustomTypography text={title}
                        style={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 1
                        }}
                    />

                </Grid>
                <Grid item>
                    <CustomTypography text={price}
                        style={{
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'primary.main',
                            textAlign: 'left'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
