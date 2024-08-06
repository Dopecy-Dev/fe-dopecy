import * as React from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import CustomTypography from '../typography/CustomTypography';
import { Link } from 'react-router-dom';

export default function DropDownMenu({ anchorEl, handleClose, menuItems }) {
    const open = Boolean(anchorEl);

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
                        xs: '12.5rem', // 200px
                        sm: '15.625rem', // 250px
                        md: '18.75rem' // 300px
                    },
                    borderRadius: '0.5rem', // 8px
                    boxShadow: '0px 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' // 4px 8px
                }
            }}
        >
            {menuItems.map((item, index) => (
                <MenuItem
                    key={index}
                    component={Link}
                    to={item.link}
                    onClick={handleClose}
                    sx={{
                        fontSize: {
                            xs: '0.75rem', // 12px
                            sm: '0.875rem', // 14px
                            md: '1rem' // 16px
                        },
                        borderBottom: '1px solid',
                        borderColor: 'text.graytextB3',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                        py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                        '&:hover': {
                            color: 'text.main',
                            bgcolor: 'transparent',
                        },
                        ...item.style
                    }}
                >
                    {item.text}
                </MenuItem>

            ))}
        </Menu>
    );
}
