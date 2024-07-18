import * as React from 'react';
import { Box, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import btndownarrowblack from '../../assets/images/btndownarrowblack.svg';

export default function DropDownMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                sx={{
                    textTransform: 'none',
                    color: 'text.primary'
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dopecy Studio
                <Box sx={{ ml: 1 }} component={'img'} src={btndownarrowblack} alt='btndownarrowblack' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    }}
                >
                    Stock News
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    }}
                >
                    Brands Podcast
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    }}
                >
                    Youtube Video
                </MenuItem>
            </Menu>
        </div>
    );
}
