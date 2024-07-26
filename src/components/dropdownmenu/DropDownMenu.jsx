import * as React from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import btndownarrowblack from '../../assets/images/btndownarrowblack.svg';
import CustomTypography from '../typography/CustomTypography';

export default function DropDownMenu({ anchorEl, handleClose }) {
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
                    mt: 2,
                    width: {
                        xs: '200px',
                        sm: '250px',
                        md: '300px'
                    },
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                }
            }}
        >
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px'
                    },
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    py: { xs: 1, sm: 1.5, md: 2 }
                }}
            >
                Stock News
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px'
                    },
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    py: { xs: 1, sm: 1.5, md: 2 }
                }}
            >
                Brands Podcast
            </MenuItem>
            <MenuItem
                onClick={handleClose}
                sx={{
                    fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '16px'
                    },
                    py: { xs: 1, sm: 1.5, md: 2 },
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                }}
            >
                Youtube Video
            </MenuItem>
        </Menu>
    );
}
