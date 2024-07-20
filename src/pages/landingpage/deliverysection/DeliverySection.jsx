import { Box, Grid } from '@mui/material';
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography';
import PackageIcon from '../../../assets/images/PackageICon.svg';

function DeliverySection() {
    return (
        <Grid container spacing={4} sx={{ px: 8, justifyContent: 'space-between' }}>
            <Grid
                item
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer', // Change cursor to pointer on hover
                }}
            >
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageIcon} alt='PackageIcon'></Box>
                </Box>

                <Box>
                    <CustomTypography
                        text='Cannabis Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>

            <Grid
                item
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer', // Change cursor to pointer on hover
                }}
            >
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageIcon} alt='PackageIcon'></Box>
                </Box>
                <Box>
                    <CustomTypography
                        text='Liquor Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>

            <Grid
                item
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer', // Change cursor to pointer on hover
                }}
            >
                <Box sx={{ mr: 3 }}>
                    <Box component={'img'} src={PackageIcon} alt='PackageIcon'></Box>
                </Box>
                <Box>
                    <CustomTypography
                        text='Food Delivery'
                        style={{
                            fontSize: '16px',
                            lineHeight: '19px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}
                    />
                    <CustomTypography
                        text='Lorem Ipsum is the dummy text'
                        style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            fontWeight: '400',
                            textAlign: 'left',
                            color: '#999999'
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default DeliverySection;
