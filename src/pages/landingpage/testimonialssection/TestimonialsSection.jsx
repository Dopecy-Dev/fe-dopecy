import { Box, Grid } from '@mui/material'
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography'
import whiterightarrow from '../../../assets/images/whiterightarrow.svg'
import blackleftarrow from '../../../assets/images/blackleftarrow.svg'
import TestimonialCard from '../../../shared/TestimonialCard/TestimonialCard';

function TestimonialsSection() {

    return (
        <>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Grid item>
                    <CustomTypography
                        text='Client Testimonials'
                        style={{
                            fontSize: '24px',
                            lineHeight: '30px',
                            fontWeight: '700',
                            textAlign: 'left',
                            color: 'primary.main'
                        }}
                    />
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex' }}>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '45px', height: '45px', borderRadius: '100px', border: '1px solid', borderColor: 'primary.main', bgcolor: 'text.white', mr: 1 }}>
                            <Box component={'img'} src={blackleftarrow} alt='blackleftarrow' />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '45px', height: '45px', borderRadius: '100px', border: '1px solid', borderColor: 'primary.main', bgcolor: 'primary.main' }}>
                            <Box component={'img'} src={whiterightarrow} alt='ArrowRight' />
                        </Box>
                    </Box>

                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item>
                    <TestimonialCard></TestimonialCard>
                </Grid>
                <Grid item>
                    <TestimonialCard></TestimonialCard>
                </Grid>
                <Grid item>
                    <TestimonialCard></TestimonialCard>
                </Grid>

            </Grid>
        </>
    )
}

export default TestimonialsSection
