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
                width: '424px',
                height: '275px',
                textAlign: 'left',
                p: 2,
                bgcolor: 'text.white',
                border: '1px solid transparent',
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
                <Box sx={{ width: '32px', height: '26px' }} component={'img'} src={testimonialicon} alt='testimonialicon' />

                <Box
                    sx={{
                        maxHeight: '120px', // set max height for the text container
                        overflowY: 'auto', // make it scrollable
                        ...hiddenScrollbar, // hide scrollbar
                    }}
                >
                    <CustomTypography
                        text={props?.testimonial?.text ? props?.testimonial?.text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        style={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '21px',
                            color: 'text.primary',
                            textAlign: 'left',
                            mb: 2,
                        }}
                    />
                </Box>
            </Box>

            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item>
                    <Grid container sx={{ alignItems: 'center' }}>
                        <Grid item>
                            <Box sx={{ width: '56px', height: '56px', borderRadius: '100px', mr: 2 }} component={'img'} src={props?.testimonial?.userImage ? props?.testimonial?.userImage : testimonialuserimage} alt='testimonialuserimage' />
                        </Grid>
                        <Grid item>
                            <CustomTypography
                                text={props?.testimonial?.name ? props?.testimonial?.name : "Robert Fox"}
                                style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'text.primary',
                                    textAlign: 'left',
                                    mb: 1
                                }}
                            />
                            <CustomTypography
                                text={props?.testimonial?.role ? props?.testimonial?.role : "Customer"}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    mb: 1
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
