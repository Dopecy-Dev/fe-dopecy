import * as React from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import catMobile from '../../assets/images/catMobile.svg';
import { Box } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

export default function CategoryCard(props) {


    const { theme } = useTheme()

    const isLight = theme === 'light'


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                    '& .hover-effect': {
                        border: '0.0625rem solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
                        '& img': {
                            transform: 'scale(1.1)',
                        },
                    },
                    '& .hover-text': {
                        color: 'text.main',
                    },
                },
                // Responsive design
                '@media (max-width: 600px)': {
                    width: '100%',
                    px: '1rem', // Padding for small screens
                },
                '@media (min-width: 601px) and (max-width: 900px)': {
                    width: '50%',
                    px: '1.5rem',
                },
                '@media (min-width: 901px)': {
                    width: '25%',
                    px: '2rem',
                },
            }}
        >
            <Box
                className="hover-effect"
                sx={{
                    width: '8.25rem',
                    height: '8.25rem',
                    bgcolor: 'text.cstmwhite',
                    p: '0.625rem',
                    borderRadius: '50%',
                    mb: '1.25rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.0625rem solid transparent',
                    transition: 'all 0.3s ease-in-out',
                    // Responsive design
                    '@media (max-width: 600px)': {
                        width: '6rem',
                        height: '6rem',
                        p: '0.5rem',
                        mb: '1rem',
                    },
                    '@media (min-width: 601px) and (max-width: 900px)': {
                        width: '7rem',
                        height: '7rem',
                        p: '0.5rem',
                        mb: '1.1rem',
                    },
                }}
            >
                <Box
                    component={'img'}
                    src={props.image ? props.image : catMobile}
                    alt={props.text}
                    sx={{
                        transition: 'transform 0.3s ease-in-out',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Box>
                <CustomTypography
                    text={props.text ? props.text : 'Mobile'}
                    className="hover-text"
                    style={{
                        fontWeight: '300',
                        fontSize: '1rem',
                        lineHeight: '1.25rem',
                        color: 'text.primary',
                        transition: 'color 0.3s ease-in-out',
                        textAlign: 'center', // Center text alignment
                        // Responsive design
                        '@media (max-width: 600px)': {
                            fontSize: '0.875rem',
                            lineHeight: '1rem',
                        },
                        '@media (min-width: 601px) and (max-width: 900px)': {
                            fontSize: '0.95rem',
                            lineHeight: '1.2rem',
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
