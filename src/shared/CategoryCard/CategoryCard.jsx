import * as React from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import catMobile from '../../assets/images/catMobile.svg'
import { Box } from '@mui/material';

export default function CategoryCard(props) {
    return (
        <Box >
            <Box sx={{
                width: '132px',
                height: '132px',
                bgcolor: 'text.cstmwhite',
                p: 1,
                borderRadius: 25,
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Box component={'img'} src={props.image ? props.image : catMobile} alt='Mobile Image' />

            </Box>
            <Box>
                <CustomTypography
                    text={props.text ? props.text : 'Mobile'}
                    style={{
                        fontWeight: '300',
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: 'text.primary'
                    }}
                />
            </Box>

        </Box>
    );
}
