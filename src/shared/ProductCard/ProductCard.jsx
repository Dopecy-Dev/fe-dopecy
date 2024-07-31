import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';

export default function ProductCard(props) {
    const rating = `(${props.product.totalrating})`;
    const price = `$${props?.product?.price}`;
    const title = truncateTitle(props?.product?.title || 'TOZO T6 True Wireless Earbuds Bluetooth', 45);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: { xs: '21rem', lg: '22rem' }, // Fixed height
                p: '1rem',
                border: '1px solid',
                borderColor: 'common.searchbar',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                position: 'relative',
                '&:hover': {
                    borderColor: 'primary.main',
                },
                backgroundColor: 'background.paper', // Ensure background color
            }}
        >
            {props.product.hot &&
                <Box
                    sx={{
                        width: 'fit-content',
                        height: '1.625rem',
                        bgcolor: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        padding: '0.3125rem 0.625rem',
                        zIndex: 1,
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        lineHeight: '1rem',
                    }}>
                    <CustomTypography text='HOT'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                        }} />
                </Box>
            }
            {props.product.bestdeals &&
                <Box
                    sx={{
                        width: 'fit-content',
                        height: '1.625rem',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        padding: '0.3125rem 0.625rem',
                        zIndex: 1,
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        lineHeight: '1rem',
                    }}>
                    <CustomTypography text='BEST DEALS'
                        style={{
                            color: 'text.white',
                            fontWeight: '600',
                        }} />
                </Box>
            }
            <Box
                sx={{
                    width: '100%',
                    height: '12rem', // Fixed image height
                    mb: '1rem',
                    flexShrink: 0, // Prevents the image from shrinking
                }}
                component={'img'}
                src={props?.product?.image || pimag}
                alt='Product Image'
            />
            <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.5rem' }}>
                    <Rating size="small" name="read-only" value={props?.product?.rating || 4} readOnly />
                    <CustomTypography
                        text={rating}
                        style={{
                            fontWeight: '400',
                            fontSize: '0.75rem',
                            lineHeight: '1rem',
                            color: 'text.darkgray',
                            textAlign: 'left',
                            ml: '0.5rem',
                        }}
                    />
                </Box>
                <CustomTypography
                    text={title}
                    style={{
                        fontWeight: '400',
                        fontSize: '0.875rem',
                        lineHeight: '1.25rem',
                        color: 'text.primary',
                        textAlign: 'left',
                        mb: '0.625rem',
                        flex: '1', // Ensures text takes available space
                    }}
                />
                <CustomTypography
                    text={price}
                    style={{
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        lineHeight: '1.25rem',
                        color: 'primary.main',
                        textAlign: 'left',
                        justifySelf: 'end'
                    }}
                />
            </Box>
        </Box>
    );
}
