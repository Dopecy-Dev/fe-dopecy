import { Grid } from '@mui/material';
import React from 'react';
import LeftHalfBanner from './lefthalfbanner/LeftHalfBanner';
import RightHalfBanner from './righthalfbanner/RightHalfBanner';

function HalfBannersSection() {
    return (
        <Grid container spacing={2} sx={{ display: 'flex' }}>
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <LeftHalfBanner sx={{ flex: 1 }} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <RightHalfBanner sx={{ flex: 1 }} />
            </Grid>
        </Grid>
    );
}

export default HalfBannersSection;
