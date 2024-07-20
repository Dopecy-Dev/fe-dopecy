import { Box, Grid } from '@mui/material'
import React from 'react';
import CustomTypography from '../../../components/typography/CustomTypography'
import whiterightarrow from '../../../assets/images/whiterightarrow.svg'
import blackleftarrow from '../../../assets/images/blackleftarrow.svg'
import TestimonialCard from '../../../shared/TestimonialCard/TestimonialCard';
import testimonialuserimage from '../../../assets/images/testimonialuserimage.svg'
import testimonialuserimage1 from '../../../assets/images/testimonialuserimage1.svg'
import testimonialuserimage2 from '../../../assets/images/testimonialuserimage2.svg'


const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Robert Fox',
        role: 'Customer',
        rating: 4,
        userImage: testimonialuserimage,
    }, {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Dianne Russell',
        role: 'Customer',
        rating: 5,
        userImage: testimonialuserimage1,
    }, {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Eleanor Pena',
        role: 'Customer',
        rating: 3,
        userImage: testimonialuserimage2,
    },
];



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
                {testimonials.map((testimonial, index) => (
                    <Grid item key={index}>
                        <TestimonialCard testimonial={testimonial} ></TestimonialCard>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default TestimonialsSection
