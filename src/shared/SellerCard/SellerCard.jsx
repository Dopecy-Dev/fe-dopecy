import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import shopimage from '../../assets/images/shopimage.svg'
import starrating from '../../assets/images/Starrating.svg'

export default function SellerCard(props) {
    return (
        <Card sx={{ width: props.width, borderRadius: '25px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="97"
                    image={shopimage}
                    alt="green iguana"
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        Whimsical Wonder shop
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                    {/* <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant="h6" color="text.secondary">
                                $15.99
                            </Typography>
                        </Grid>
                        <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Box component="img" sx={{ width: '1.3rem', marginRight: '0.3rem' }} src={starrating} alt="star" />

                            <Typography variant="h6" color="text.secondary">
                                4.8/5
                            </Typography>
                        </Grid>
                    </Grid> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
