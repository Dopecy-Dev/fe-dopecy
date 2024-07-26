import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';

export default function ProductCard(props) {
    const rating = '(' + props.product.totalrating + ')';
    const price = '$' + props?.product?.price;
    const title = truncateTitle(props?.product?.title ? props?.product?.title : 'TOZO T6 True Wireless Earbuds Bluetooth', 45);

    return (
        <Box
            sx={{
                width: '14.625rem', // 234px to rem
                height: '20rem', // 320px to rem
                p: '1.25rem', // 20px to rem
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
                        width: '2.875rem', // 46px to rem
                        height: '1.625rem', // 26px to rem
                        bgcolor: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        padding: '0.3125rem 0.625rem', // 5px 10px to rem
                    }}>
                    <CustomTypography text='HOT'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                            fontSize: '0.75rem', // 12px to rem
                            lineHeight: '1rem' // 16px to rem
                        }} />
                </Box>
            }
            {props.product.bestdeals &&
                <Box
                    sx={{
                        // width: '5.875rem', // 94px to rem
                        height: '1.625rem', // 26px to rem
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        padding: '0.3125rem 0.625rem', // 5px 10px to rem
                    }}>
                    <CustomTypography text='BEST DEALS'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                            fontSize: '0.75rem', // 12px to rem
                            lineHeight: '1rem' // 16px to rem
                        }} />
                </Box>
            }
            <Box sx={{ width: '12.625rem', height: '10.75rem' }} component={'img'} src={props?.product?.image ? props?.product?.image : pimag} alt='pimag' />
            <Grid container sx={{ flexDirection: 'column' }}>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating size="small" name="read-only" value={props?.product?.rating ? props?.product?.rating : 4} readOnly />
                        <CustomTypography text={rating}
                            style={{
                                fontWeight: '400',
                                fontSize: '0.75rem', // 12px to rem
                                lineHeight: '1rem', // 16px to rem
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
                            fontSize: '0.875rem', // 14px to rem
                            lineHeight: '1.25rem', // 20px to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            my: '0.625rem' // 10px to rem
                        }}
                    />
                </Grid>
                <Grid item>
                    <CustomTypography text={price}
                        style={{
                            fontWeight: '600',
                            fontSize: '0.875rem', // 14px to rem
                            lineHeight: '1.25rem', // 20px to rem
                            color: 'primary.main',
                            textAlign: 'left'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
