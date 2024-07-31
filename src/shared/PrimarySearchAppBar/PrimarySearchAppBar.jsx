import React, { useState } from 'react';
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
import SearchIcon from '../../assets/images/SearchIcon.svg'
import SearchIconRight from '../../assets/images/SearchIconRight.svg'
import UserIcon from '../../assets/images/UserIcon.svg'
import CustomTypography from '../../components/typography/CustomTypography';
import CartIcon from "../../assets/images/CartIcon.svg";
import { Link } from 'react-router-dom';
import LogoGreen from '../../components/logos/LogoGreen';
import { useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginButtonMenu from '../../components/loginbuttonmenu/LoginButtonMenu';
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch';

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
        width: '100%',
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
        // [theme.breakpoints.between('md', 'lg')]: {
        //     width: '30ch',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     width: '60ch',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '35ch',
        // },
        '&::placeholder': {
            color: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.75) : alpha(theme.palette.common.black, 0.75),
        },
    },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FFFFFF',
    boxShadow: 'none',
}));



export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
    const isMedium = useMediaQuery(muiTheme.breakpoints.between('md', 'lg'));

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleSearchToggle = () => {
        setSearchBarVisible(prevState => !prevState);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            {isMobile ? (
                <Grid container sx={{ py: 1, px: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            <Grid item>
                                <Box>
                                    <IconButton
                                        onClick={handleMenuToggle}
                                        sx={{
                                            '&:hover, &:focus, &:active': {
                                                outline: 'none',
                                                border: 'none',
                                                boxShadow: 'none',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        <MenuIcon
                                            sx={{
                                                color: 'primary.main',
                                                opacity: menuOpen ? 0 : 1,
                                                transition: 'opacity 0.9s ease-in-out',
                                            }}
                                        />
                                        <CloseIcon
                                            sx={{
                                                color: 'primary.main',
                                                opacity: menuOpen ? 1 : 0,
                                                transition: 'opacity 0.9s ease-in-out',
                                                position: 'absolute', // Ensure the icons overlap
                                            }}
                                        />
                                    </IconButton>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Link to={'/'}>
                                        <LogoGreen />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {isTablet &&
                        <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
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
                            <Box sx={{ ml: 4 }}>
                                <DarkLightSwitch></DarkLightSwitch>
                            </Box>
                        </Grid>

                    }
                    <Grid item>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            {!isTablet &&

                                <Grid item>
                                    <IconButton
                                        sx={{
                                            '&:hover, &:focus, &:active': {
                                                outline: 'none',
                                                border: 'none',
                                                boxShadow: 'none',
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                        onClick={handleSearchToggle}>
                                        <Box component={'img'} src={SearchIcon} alt='SearchIcon'></Box>
                                    </IconButton>
                                </Grid>
                            }
                            <Grid item>
                                {/* <Link to={'/login'}> */}
                                <Box onClick={handleClick} component={'img'} src={UserIcon} alt='UserIcon'></Box>
                                {/* </Link> */}
                            </Grid>
                            <Grid item>
                                <Box component={'img'} src={CartIcon} alt='CartIcon'></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Box sx={{ flexGrow: 1, px: '3.125rem' }}>
                    <CustomAppBar sx={{ paddingLeft: 0, paddingRight: 0 }} position="static">
                        <Toolbar>
                            <Grid container spacing={isMedium ? 1 : 3.75} // 60px to rem
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Grid item >
                                    <Link to='/'>
                                        <LogoGreen />
                                    </Link>
                                </Grid>
                                <Grid item xs={isMedium ? 6 : 7}>
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
                                    <Box>
                                        <DarkLightSwitch ></DarkLightSwitch>
                                    </Box>
                                </Grid>
                                <Grid item >
                                    <Grid container spacing={1.25}> {/* 20px to rem */}
                                        <Grid item>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Box onClick={handleClick} sx={{ cursor: 'pointer' }} component="img" src={UserIcon} alt="UserIcon" />

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
                </Box >
            )}

            {searchBarVisible && (
                <Box sx={{ my: 1, px: 2 }}>
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
            )}

            {menuOpen && (
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'common.searchbar',
                        zIndex: 1300,
                        opacity: 1,
                        visibility: menuOpen ? 'visible' : 'hidden',
                        transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
                    }}
                >
                    <Box sx={{ my: 2 }}>Categories will place here</Box>
                </Box>
            )}

            <LoginButtonMenu
                anchorEl={anchorEl}
                handleClose={handleMenuClose}
            />
        </>
    );
}
