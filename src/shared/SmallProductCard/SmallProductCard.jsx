import * as React from 'react';
import { Box, Grid } from '@mui/material';
import pimag from '../../assets/images/pimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';
import { useTheme } from '../../contexts/ThemeContext';

export default function SmallProductCard(props) {

    const price = '$' + props?.product?.price;
    const title = truncateTitle(props?.product?.title ? props?.product?.title : 'TOZO T6 True Wireless Earbuds Bluetooth', 45);

    const { theme } = useTheme()
    const isLightMode = theme === 'light'

    return (
        <Box
            sx={{
                bgcolor: 'common.cardbg',
                width: '18.125rem', // 290px converted to rem
                height: '6.5625rem', // 105px converted to rem
                p: '1rem', // Padding: 16px converted to rem
                border: '0.0625rem solid', // Border: 1px converted to rem
                borderColor: isLightMode ? 'text.searchbar' : 'transparent',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'text.main',
                }
            }}
        >
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={4}>
                    <Box sx={{ width: '4.625rem', height: '4.625rem' }} component={'img'} src={props?.product?.image ? props?.product?.image : pimag} alt='pimag' />
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <CustomTypography
                            text={title}
                            style={{
                                fontWeight: '400',
                                fontSize: '0.8125rem', // 13px converted to rem
                                lineHeight: '1.125rem', // 18px converted to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                my: '0.625rem' // Margin-y: 10px converted to rem
                            }}
                        />
                        <CustomTypography
                            text={price}
                            style={{
                                fontWeight: '600',
                                fontSize: '0.8125rem', // 13px converted to rem
                                lineHeight: '1.125rem', // 18px converted to rem
                                color: isLightMode ? 'text.main' : 'text.primary',
                                textAlign: 'left'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
