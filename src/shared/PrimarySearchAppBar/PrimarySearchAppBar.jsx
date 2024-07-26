import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Grid } from '@mui/material';
import AllCategoriesMenu from '../AllCategoriesMenu/AllCategoriesMenu';
import SearchIcon from '../../assets/images/searchicon.svg'
import SearchIconRight from '../../assets/images/SearchIconRight.svg'
import UserIcon from '../../assets/images/UserIcon.svg'
import CustomTypography from '../../components/typography/CustomTypography';
import CartIcon from "../../assets/images/CartIcon.svg";
import { Link } from 'react-router-dom';
import LogoGreen from '../../components/logos/LogoGreen';

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '0.625rem', // 10px to rem
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.15) : alpha(theme.palette.common.searchbar, 0.5),
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.25) : alpha(theme.palette.common.searchbar, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.625rem', // 10px to rem
}));

const SearchSecondIconWrapper = styled('div')(({ theme }) => ({
    marginRight: '0.625rem', // 10px to rem
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.75) : alpha(theme.palette.common.black, 0.75),
    '& .MuiInputBase-input': {
        padding: '0.625rem 0.625rem 0.625rem 0.625rem', // 10px to rem
        paddingLeft: `calc(1rem + 1.25rem)`, // 16px + 20px to rem
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
        '&::placeholder': {
            color: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.75) : alpha(theme.palette.common.black, 0.75),
        },
    },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FFFFFF',
    boxShadow: 'none',
}));

export default function PrimarySearchAppBar({ toggleTheme, theme }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, px: '3.125rem' }}> {/* 50px to rem */}
            <CustomAppBar sx={{ paddingLeft: 0, paddingRight: 0 }} position="static">
                <Toolbar>
                    <Grid container spacing={3.75} // 60px to rem
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Grid item>
                            <Link to='/'>
                                <LogoGreen />
                            </Link>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{ display: 'flex' }}>
                                <AllCategoriesMenu />
                                <Search>
                                    <SearchIconWrapper>
                                        <Box component="img" src={SearchIcon} alt="SearchIcon" />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search essentials, groceries and more..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <SearchSecondIconWrapper>
                                        <Box component="img" src={SearchIconRight} alt="SearchIconRight" />
                                    </SearchSecondIconWrapper>
                                </Search>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1.25}> {/* 20px to rem */}
                                <Grid item>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Box component="img" src={UserIcon} alt="UserIcon" />
                                        <Link to='/signup'>
                                            <CustomTypography
                                                text='Sign Up'
                                                style={{
                                                    color: 'text.darkgray',
                                                    fontSize: '1rem', // 16px to rem
                                                    fontWeight: '400',
                                                    lineHeight: '1.125rem', // 18px to rem
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        textDecoration: 'underline',
                                                    },
                                                }}
                                            />
                                        </Link>
                                        <CustomTypography
                                            text='/'
                                            style={{
                                                color: 'text.darkgray',
                                                fontSize: '1rem', // 16px to rem
                                                fontWeight: '400',
                                                lineHeight: '1.125rem', // 18px to rem
                                            }}
                                        />
                                        <Link to='/login'>
                                            <CustomTypography
                                                text='Sign In'
                                                style={{
                                                    color: 'text.darkgray',
                                                    fontSize: '1rem', // 16px to rem
                                                    fontWeight: '400',
                                                    lineHeight: '1.125rem', // 18px to rem
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        textDecoration: 'underline',
                                                    },
                                                }}
                                            />
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{
                                        width: '0.125rem', // 2px to rem
                                        height: '1.5rem',
                                        backgroundColor: 'text.black',
                                        opacity: '15%'
                                    }}>

                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <Box component="img" src={CartIcon} alt="CartIcon" />
                                            <CustomTypography
                                                text='Cart'
                                                style={{
                                                    color: 'text.darkgray',
                                                    fontSize: '1rem', // 16px to rem
                                                    fontWeight: '400',
                                                    lineHeight: '1.125rem', // 18px to rem
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        textDecoration: 'underline',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </CustomAppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}
