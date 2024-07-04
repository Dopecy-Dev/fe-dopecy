import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '../../assets/images/searchicon.svg';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Logo from './Logo/Logo';
import { Button, Grid, Switch } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px', // Custom border radius
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    border: '1px solid rgba(0, 0, 0, 0.25)', // Custom border with 25% opacity
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: alpha(theme.palette.common.black, 0.5), // Custom text color
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
        '&::placeholder': {
            color: alpha(theme.palette.common.black, 0.5), // Custom color for the placeholder text
        },
    },
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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0 }} style={{ background: '#FFFFFF' }}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Logo />
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography> */}
                    <Search>
                        <SearchIconWrapper>
                            <Box style={{ width: '60%' }} component="img" src={SearchIcon} alt="SearchIcon" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Let AI Search for you"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <TouchAppIcon style={{ color: '#326039', fontSize: '2rem' }} />
                                {/* <Box component={'img'} src={MoreIcon} alt='MoreIcon'></Box> */}
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left" }}
                                >
                                    Download the
                                </Typography>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left" }}
                                >
                                    Dopecy app
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <LocationOnTwoToneIcon style={{ color: '#326039', fontSize: '2rem' }} />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    Tikvah 22 Washington Square N,
                                </Typography>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    New York, NY 10011, USA
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <StorefrontTwoToneIcon style={{ color: '#326039', fontSize: '2rem' }} />
                            </Grid>
                            <Grid item>
                                {/* <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", backgroundColor: '#000000', color: '#FFFFFF', borderRadius: '25px', textAlign: 'center', p: 0.3 }}
                                >
                                    0
                                </Typography> */}
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    Become a Seller
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* <Box sx={{ flexGrow: 1 }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <ShoppingCartTwoToneIcon style={{ color: '#326039', fontSize: '2rem' }} />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", backgroundColor: '#000000', color: '#FFFFFF', borderRadius: '25px', textAlign: 'center', p: 0.3 }}
                                >
                                    0
                                </Typography>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    Cart
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
                        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}

                        <Grid container sx={{ alignItems: 'center', flexWrap: 'nowrap' }}>
                            <Grid item>
                                <Badge badgeContent={6} color="success">
                                    {/* <NotificationsIcon /> */}
                                    <ShoppingCartTwoToneIcon style={{ color: '#326039', fontSize: '2rem' }} />
                                </Badge>
                            </Grid>
                            {/* <Grid item>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", backgroundColor: '#000000', color: '#FFFFFF', borderRadius: '25px', textAlign: 'center', p: 0.3 }}
                                >
                                    0
                                </Typography>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    Cart
                                </Typography>
                            </Grid> */}
                        </Grid>


                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <Badge badgeContent={17} color="error">
                                    <CircleNotificationsIcon style={{ color: '#326039', fontSize: '2rem' }} />
                                </Badge>
                            </Grid>
                            {/* <Grid item>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", backgroundColor: '#000000', color: '#FFFFFF', borderRadius: '25px', textAlign: 'center', p: 0.3 }}
                                >
                                    0
                                </Typography>
                                <Typography
                                    variant="body2"
                                    // noWrap
                                    component="div"
                                    sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', lineHeight: '1', textAlign: "left", fontWeight: '600' }}
                                >
                                    Cart
                                </Typography>
                            </Grid> */}
                        </Grid>

                        <IconButton
                            // size="large"
                            // edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                        // color="inherit"
                        >
                            <AccountCircleTwoToneIcon style={{ color: '#326039', fontSize: '2rem' }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        name="themeToggle"
                        color="primary"
                    />

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}
