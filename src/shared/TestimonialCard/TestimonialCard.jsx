import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import testimonialicon from '../../assets/images/testimonialicon.svg'
import CustomTypography from '../../components/typography/CustomTypography';
import testimonialuserimage from '../../assets/images/testimonialuserimage.svg'

export default function TestimonialCard(props) {


    return (

        <Box
            sx={{
                width: '424px',
                height: '275px',
                textAlign: 'left',
                p: 2,
                bgcolor: 'text.white',
                border: '1px solid transparent',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >

            <Box sx={{ width: '32px', height: '26px' }} component={'img'} src={testimonialicon} alt='testimonialicon' />

            <CustomTypography
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."


                style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: 'text.primary',
                    textAlign: 'left',
                    mb: 2
                }}
            />

            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item>
                    <Grid container sx={{ alignItems: 'center' }}>
                        <Grid item>
                            <Box sx={{ width: '56px', height: '56px', borderRadius: '100px', mr: 2 }} component={'img'} src={testimonialuserimage} alt='testimonialuserimage' />

                        </Grid>
                        <Grid item>
                            <CustomTypography
                                text="Robert Fox"
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
                                text="Customer"
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
                    <Rating size="small" name="read-only" value={4} readOnly />
                </Grid>

            </Grid>
        </Box>
    );
}
