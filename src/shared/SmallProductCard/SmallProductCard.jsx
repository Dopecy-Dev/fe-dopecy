import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg'
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';

export default function SmallProductCard(props) {

    const price = '$' + props?.product?.price
    const title = truncateTitle(props?.product?.title ? props?.product?.title : 'TOZO T6 True Wireless Earbuds Bluetooth', 45);

    return (

        <Box
            sx={{
                width: '290px',
                height: '105px',
                p: 2,
                border: '1px solid',
                borderColor: 'common.searchbar',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >
            <Grid spacing={2} container sx={{ alignItems: 'center' }}>
                <Grid item xs={4}>
                    <Box sx={{ width: '74px', height: '74px' }} component={'img'} src={props?.product?.image ? props?.product?.image : pimag} alt='pimag' />

                </Grid>
                <Grid item xs={8}>
                    <Box >

                        <CustomTypography text={title}
                            style={{
                                fontWeight: '400',
                                fontSize: '13px',
                                lineHeight: '18px',
                                color: 'text.primary',
                                textAlign: 'left',
                                my: 1
                            }}
                        />

                        <CustomTypography text={price}
                            style={{
                                fontWeight: '600',
                                fontSize: '13px',
                                lineHeight: '18px',
                                color: 'primary.main',
                                textAlign: 'left'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
