import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import testimonialicon from '../../assets/images/testimonialicon.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import testimonialuserimage from '../../assets/images/testimonialuserimage.svg';

const hiddenScrollbar = {
    '&::-webkit-scrollbar': {
        width: '0px',
        background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'transparent',
    },
};

export default function TestimonialCard(props) {
    console.log(props, 'props');

    return (
        <Box
            sx={{
                width: { xs: '100%', sm: '25.5rem' }, // 100% for xs screens, 25.5rem for sm and up
                height: '17.1875rem', // 275px converted to rem
                textAlign: 'left',
                p: '1rem', // 16px converted to rem
                bgcolor: 'text.white',
                border: '0.0625rem solid transparent', // 1px converted to rem
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >
            <Box>
                <Box sx={{ width: '2rem', height: '1.625rem' }} component={'img'} src={testimonialicon} alt='testimonialicon' />

                <Box
                    sx={{
                        maxHeight: '7.5rem', // 120px converted to rem
                        overflowY: 'auto',
                        ...hiddenScrollbar,
                    }}
                >
                    <CustomTypography
                        text={props?.testimonial?.text ? props?.testimonial?.text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        style={{
                            fontWeight: '400',
                            fontSize: '0.875rem', // 14px converted to rem
                            lineHeight: '1.3125rem', // 21px converted to rem
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: '0.5rem', // 8px converted to rem
                        }}
                    />
                </Box>
            </Box>

            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item>
                    <Grid container sx={{ alignItems: 'center' }}>
                        <Grid item>
                            <Box sx={{ width: '3.5rem', height: '3.5rem', borderRadius: '100px', mr: '0.5rem' }} component={'img'} src={props?.testimonial?.userImage ? props?.testimonial?.userImage : testimonialuserimage} alt='testimonialuserimage' />
                        </Grid>
                        <Grid item>
                            <CustomTypography
                                text={props?.testimonial?.name ? props?.testimonial?.name : "Robert Fox"}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '1rem', // 16px converted to rem
                                    lineHeight: '1.5rem', // 24px converted to rem
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    mb: '0.25rem', // 4px converted to rem
                                }}
                            />
                            <CustomTypography
                                text={props?.testimonial?.role ? props?.testimonial?.role : "Customer"}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem', // 14px converted to rem
                                    lineHeight: '1.3125rem', // 21px converted to rem
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    mb: '0.25rem', // 4px converted to rem
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Rating size="small" name="read-only" value={props?.testimonial?.rating ? props?.testimonial?.rating : 2} readOnly />
                </Grid>
            </Grid>
        </Box>
    );
}
