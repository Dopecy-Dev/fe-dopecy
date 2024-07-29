import * as React from 'react';
import { Box, Grid, Rating } from '@mui/material';
import pimag from '../../assets/images/pimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import { truncateTitle } from '../../utils/truncatetext/TruncateText';
import Starrating from '../../assets/images/Starrating.svg'

export default function DispensaryCard(props) {
    const totalrating = props.dispensary.totalrating + '/5';
    const title = truncateTitle(props?.dispensary?.title ? props?.dispensary?.title : 'Herbal Haven Dispensary', 45);


    console.log(props.dispensary, 'props.dispensary')
    return (
        <Box
            sx={{
                width: '11.3125rem', // 341px converted to rem
                height: '13.3125rem', // 373px converted to rem
                bgcolor: 'text.white',
                border: '0.0625rem solid transparent', // 1px converted to rem
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: 'primary.main',
                }
            }}
        >
            <Box sx={{ width: '11.2rem', height: '6.3125rem' }}>
                <Box
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    component={'img'}
                    src={props?.dispensary?.image ? props?.dispensary?.image : pimag}
                    alt='pimag'
                />
            </Box>

            <Box sx={{ p: '0.5rem', }}> {/* Padding: 16px (1rem) and Margin-top: 24px (1.5rem) */}
                <Grid container spacing={1} sx={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Grid item>
                        <CustomTypography
                            text={title}
                            style={{
                                fontWeight: '600',
                                fontSize: '1rem', // 20px converted to rem
                                lineHeight: '1rem', // 20px converted to rem
                                color: 'text.primary',
                                textAlign: 'left',
                                // mb: '0.625rem' // 10px converted to rem
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <CustomTypography
                            text={props?.dispensary?.location ? props?.dispensary?.location : 'Location'}
                            style={{
                                fontWeight: '400',
                                fontSize: '0.775rem', // 14px converted to rem
                                lineHeight: '0.775rem', // 14px converted to rem
                                color: 'text.darkgray',
                                textAlign: 'left'
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Box component={'img'} src={Starrating} alt='Starrating'></Box>
                            <CustomTypography
                                text={totalrating}
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.75rem', // 12px converted to rem
                                    lineHeight: '1rem', // 16px converted to rem
                                    color: 'text.darkgray',
                                    textAlign: 'left',
                                    ml: 0.5
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
