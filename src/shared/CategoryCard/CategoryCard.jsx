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
                        border: '0.0625rem solid', // Border color on hover (1px to rem)
                        borderColor: 'primary.main',
                        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)', // Add shadow on hover (4px to rem)
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
                    width: '8.25rem', // 132px to rem
                    height: '8.25rem', // 132px to rem
                    bgcolor: 'text.cstmwhite',
                    p: '0.625rem', // 10px to rem
                    borderRadius: '50%',
                    mb: '1.25rem', // 20px to rem
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.0625rem solid transparent', // Initial transparent border (1px to rem)
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
                        fontSize: '1rem', // 16px to rem
                        lineHeight: '1.25rem', // 20px to rem
                        color: 'text.primary',
                        transition: 'color 0.3s ease-in-out', // Smooth color transition
                    }}
                />
            </Box>
        </Box>
    );
}
