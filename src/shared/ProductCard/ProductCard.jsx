import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg'
import starrating from '../../assets/images/Starrating.svg'
import CustomTypography from '../../components/typography/CustomTypography';

export default function ProductCard(props) {

    const rating = '(' + 498 + ')'
    const price = '$' + 70
    return (

        <Box sx={{ boxShadow: 2, p: 2 }}>
            <Box sx={{ width: '202px' }} component={'img'} src={pimag} alt='pimag' />
            <Grid container sx={{ flexDirection: 'column' }}>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating name="read-only" value={4} readOnly />
                        <CustomTypography text={rating}
                            style={{
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: 'text.darkgray',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <CustomTypography text='TOZO T6 True Wireless Earbuds Bluetooth'
                        style={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'text.primary',
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
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
