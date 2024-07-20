import { Box, Grid } from '@mui/material'
import React from 'react'
import whitelogo from '../../assets/images/whitelogo.svg'
import fbicon from '../../assets/images/fbicon.svg'
import twittericon from '../../assets/images/twittericon.svg'
import pinteresticon from '../../assets/images/pinteresticon.svg'
import instagramicon from '../../assets/images/instagramicon.svg'
import CustomTypography from '../../components/typography/CustomTypography'

function Footer() {
    return (
        <Box sx={{ height: '396px', bgcolor: 'text.titleblack' }}>
            <Box sx={{ borderBottom: '1px solid', borderColor: 'text.cstmwhite', px: 8, pt: 8, pb: 4 }}>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Box sx={{ py: 4, display: 'flex', flexDirection: 'column' }}>

                            <Box sx={{ width: '124px' }} component={'img'} src={whitelogo} alt='whitelogo' />
                            <CustomTypography
                                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box component={'img'} src={fbicon} alt='fbicon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={twittericon} alt='twittericon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={pinteresticon} alt='pinteresticon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={instagramicon} alt='instagramicon' />

                                </Grid>

                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                            <Box sx={{ width: '124px' }} component={'img'} src={whitelogo} alt='whitelogo' />
                            <CustomTypography
                                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    my: 2
                                }}
                            />
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box component={'img'} src={fbicon} alt='fbicon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={twittericon} alt='twittericon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={pinteresticon} alt='pinteresticon' />

                                </Grid>
                                <Grid item>
                                    <Box component={'img'} src={instagramicon} alt='instagramicon' />

                                </Grid>

                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item>

                    </Grid>

                </Grid>

            </Box>

        </Box>
    )
}

export default Footer