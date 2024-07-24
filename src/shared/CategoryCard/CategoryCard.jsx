import * as React from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import catMobile from '../../assets/images/catMobile.svg';
import { Box } from '@mui/material';

export default function CategoryCard(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer', // Add a pointer cursor for better UX
                '&:hover': {
                    '& .hover-effect': {
                        border: '1px solid', // Border color on hover
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                        '& img': {
                            transform: 'scale(1.1)', // Scale image on hover
                        },
                    },
                    '& .hover-text': {
                        color: 'primary.main', // Change text color on hover
                    },
                },
            }}
        >
            <Box
                className="hover-effect"
                sx={{
                    width: '132px',
                    height: '132px',
                    bgcolor: 'text.cstmwhite',
                    p: 1,
                    borderRadius: '50%',
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid transparent', // Initial transparent border
                    transition: 'all 0.3s ease-in-out', // Smooth transition for all properties
                }}
            >
                <Box
                    component={'img'}
                    src={props.image ? props.image : catMobile}
                    alt={props.text}
                    sx={{
                        transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
                    }}
                />
            </Box>
            <Box>
                <CustomTypography
                    text={props.text ? props.text : 'Mobile'}
                    className="hover-text"
                    style={{
                        fontWeight: '300',
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: 'text.primary',
                        transition: 'color 0.3s ease-in-out', // Smooth color transition
                    }}
                />
            </Box>
        </Box>
    );
}
