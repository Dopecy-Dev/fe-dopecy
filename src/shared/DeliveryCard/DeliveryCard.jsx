import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid } from '@mui/material';
import pimag from '../../assets/images/pimage.svg'
import starrating from '../../assets/images/Starrating.svg'
import { styled, alpha } from '@mui/material/styles';

const CustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#326039' : '#326039',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', // Adjust the text color based on theme mode
    borderRadius: '25px',
    padding: '0.7rem 1.5rem',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2a5031' : '#2a5031', // Change this color to whatever you want for hover state
    }
}));

export default function DeliveryCard(props) {
    return (
        <Card sx={{ width: props.width, borderRadius: '25px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="97"
                    image={pimag}
                    alt="green iguana"
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {props?.data?.title ? props?.data?.title : 'Liquor shop'}
                    </Typography>
                    <CustomBtn>
                        {props?.data?.btntext ? props?.data?.btntext : 'Food Delivery'}
                    </CustomBtn>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
