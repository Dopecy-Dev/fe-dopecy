import * as React from 'react';
import { Box, Menu, MenuItem, useMediaQuery } from '@mui/material';
import btndownarrowblack from '../../assets/images/btndownarrowblack.svg';
import CustomTypography from '../typography/CustomTypography';
import DarkLightSwitch from '../../shared/DarkLightSwitch/DarkLightSwitch';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import ContainedButton from '../buttons/ContainedButton';

export default function LoginButtonMenu({ anchorEl, handleClose }) {
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'dopecy-studio-button',
            }}
            PaperProps={{
                sx: {
                    p: 1.5,
                    mt: '0.125rem', // 2px
                    width: {
                        // md: '12.75rem' // 300px
                    },
                    borderRadius: '0.5rem', // 8px
                    boxShadow: '0px 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' // 4px 8px
                }
            }}
        >
            <MenuItem onClick={handleClose}
                component={Link}
                to="/seller-signup"
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent', // Remove hover background
                    },
                    '&:focus': {
                        backgroundColor: 'transparent', // Remove focus background
                    },
                    '&:active': {
                        backgroundColor: 'transparent', // Remove active background
                    },
                    textDecoration: 'none', // Remove text decoration
                    color: 'inherit', // Inherit text color
                }}
            >
                <ContainedButton
                    style={{ borderRadius: "25px" }}
                    text="Become A Seller"
                    fullWidth
                />
            </MenuItem>
            {
                isMobile &&
                <>
                    <MenuItem onClick={handleClose}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent', // Remove hover background
                            },
                            '&:focus': {
                                backgroundColor: 'transparent', // Remove focus background
                            },
                            '&:active': {
                                backgroundColor: 'transparent', // Remove active background
                            },
                            textDecoration: 'none', // Remove text decoration
                            color: 'inherit', // Inherit text color
                        }}
                    >
                        <DarkLightSwitch />
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to="/login"
                        onClick={handleClose}
                        sx={{
                            fontSize: {
                                xs: '0.75rem', // 12px
                            },
                            py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            '&:last-child': {
                                borderBottom: 'none',
                            },
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        Login
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to="/signup"
                        onClick={handleClose}
                        sx={{
                            fontSize: {
                                xs: '0.75rem', // 12px
                            },
                            py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            '&:last-child': {
                                borderBottom: 'none',
                            },
                        }}
                    >
                        Sign Up
                    </MenuItem>
                </>
            }

            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '0.75rem', // 12px
                    },
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' } // 4px, 6px, 8px
                }}
            >
                My Orders
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '0.75rem', // 12px
                    },
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' } // 4px, 6px, 8px
                }}
            >
                My Coins
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '0.75rem', // 12px
                    },
                    py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                }}
            >
                Wish list
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '0.75rem', // 12px
                    },
                    py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                }}
            >
                Seller Log in
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '0.75rem', // 12px
                    },
                    py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                }}
            >
                Help Center
            </MenuItem>
        </Menu>
    );
}
