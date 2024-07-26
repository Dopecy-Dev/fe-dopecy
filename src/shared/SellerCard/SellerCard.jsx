import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import shopimage from '../../assets/images/shopimage.svg';
import starrating from '../../assets/images/Starrating.svg';

export default function SellerCard(props) {
    return (
        <Card sx={{ width: props.width, borderRadius: '1.5625rem' }}> {/* 25px converted to rem */}
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="6.0625rem" // 97px converted to rem
                    image={shopimage}
                    alt="shop image"
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        Whimsical Wonder shop
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
