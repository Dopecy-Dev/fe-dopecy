import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import DopecyDealsIcon from '../../assets/images/DopecyDealsIcon.svg';
import BirdCouponIcon from '../../assets/images/BirdCouponIcon.svg';
import Buy1Get1Icon from '../../assets/images/Buy1Get1Icon.svg';
import FreeGiveawayIcon from '../../assets/images/FreeGiveawayIcon.svg';

function TopBar() {
    return (
        <Grid container spacing={6}
            sx={{
                backgroundColor: 'primary.main',
                padding: {
                    xs: '8px 16px',   // small devices
                    sm: '10px 32px',  // medium devices
                    md: '12px 48px',  // large devices
                    lg: '12px 100px',  // extra large devices
                },
                color: 'white',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
            <Grid item>
                {/* <Link to="/dopecy-deals" style={{ textDecoration: 'none' }}> */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Box component={'img'} src={DopecyDealsIcon} alt='DopecyDealsIcon' />
                    <Typography sx={{
                        color: 'text.cstmwhite',
                        ml: 1.5
                    }}>
                        Dopecy Deals
                    </Typography>
                </Box>
                {/* </Link> */}
            </Grid>
            <Grid item>
                {/* <Link to="/bird-coupon" style={{ textDecoration: 'none' }}> */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Box component={'img'} src={BirdCouponIcon} alt='BirdCouponIcon' />
                    <Typography sx={{
                        color: 'text.cstmwhite',
                        ml: 1.5
                    }}>
                        Early Bird Deals
                    </Typography>
                </Box>
                {/* </Link> */}
            </Grid>
            <Grid item>
                {/* <Link to="/buy1-get1" style={{ textDecoration: 'none' }}> */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Box component={'img'} src={Buy1Get1Icon} alt='Buy1Get1Icon' />
                    <Typography sx={{
                        color: 'text.cstmwhite',
                        ml: 1.5
                    }}>
                        Buy 1 Get 1
                    </Typography>
                </Box>
                {/* </Link> */}
            </Grid>
            <Grid item>
                {/* <Link to="/free-giveaway" style={{ textDecoration: 'none' }}> */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Box component={'img'} src={FreeGiveawayIcon} alt='FreeGiveawayIcon' />
                    <Typography sx={{
                        color: 'text.cstmwhite',
                        ml: 1.5
                    }}>
                        Free Giveaway
                    </Typography>
                </Box>
                {/* </Link> */}
            </Grid>
        </Grid>
    );
}

export default TopBar;
