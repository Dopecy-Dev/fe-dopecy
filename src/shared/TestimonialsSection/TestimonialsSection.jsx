import { Box, Grid } from '@mui/material';
import React from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import whiterightarrow from '../../assets/images/whiterightarrow.svg';
import blackleftarrow from '../../assets/images/blackleftarrow.svg';
import TestimonialCard from '../../shared/TestimonialCard/TestimonialCard';
import testimonialuserimage from '../../assets/images/testimonialuserimage.svg';
import testimonialuserimage1 from '../../assets/images/testimonialuserimage1.svg';
import testimonialuserimage2 from '../../assets/images/testimonialuserimage2.svg';

const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Robert Fox',
        role: 'Customer',
        rating: 4,
        userImage: testimonialuserimage,
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Dianne Russell',
        role: 'Customer',
        rating: 5,
        userImage: testimonialuserimage1,
    },
    {
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
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', mb: { xs: '1rem', md: '2rem' } }}>
                <Grid item xs={12} md="auto">
                    <CustomTypography
                        text='Client Testimonials'
                        style={{
                            fontSize: '1.25rem', // 20px converted to rem
                            lineHeight: '1.5rem', // 24px converted to rem
                            fontWeight: '700',
                            textAlign: { xs: 'center', md: 'left' },
                            color: 'primary.main',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md="auto" sx={{ mt: { xs: '1rem', md: '0' }, textAlign: { xs: 'center', md: 'right' } }}>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '2.8125rem', // 45px converted to rem
                            height: '2.8125rem', // 45px converted to rem
                            borderRadius: '100px',
                            border: '0.0625rem solid', // 1px converted to rem
                            borderColor: 'primary.main',
                            bgcolor: 'text.white',
                            mr: '0.0625rem', // 1px converted to rem
                        }}>
                            <Box component={'img'} src={blackleftarrow} alt='blackleftarrow' />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '2.8125rem', // 45px converted to rem
                            height: '2.8125rem', // 45px converted to rem
                            borderRadius: '100px',
                            border: '0.0625rem solid', // 1px converted to rem
                            borderColor: 'primary.main',
                            bgcolor: 'primary.main',
                        }}>
                            <Box component={'img'} src={whiterightarrow} alt='ArrowRight' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {testimonials.map((testimonial, index) => (
                    <Grid item key={index} xs={12} md={6} lg={4}>
                        <TestimonialCard testimonial={testimonial} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default TestimonialsSection;
