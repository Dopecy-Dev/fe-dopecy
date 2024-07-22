import { Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import LaptopImage from '../../../assets/images/LaptopImage.svg'
import CustomTypography from '../../../components/typography/CustomTypography';
import ContainedButton from '../../../components/buttons/ContainedButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LeftHalfBanner from './lefthalfbanner/LeftHalfBanner';
import RightHalfBanner from './righthalfbanner/RightHalfBanner';


function HalfBannersSection() {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <LeftHalfBanner></LeftHalfBanner>

                </Grid>
                <Grid item xs={6}>
                    <RightHalfBanner></RightHalfBanner>
                </Grid>

            </Grid>
        </>
    )
}

export default HalfBannersSection
