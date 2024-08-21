import React, { useState, useEffect } from 'react';
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
import Logo from '../Logo/Logo'
import { useMediaQuery, useTheme } from '@mui/material';
import { useTheme as useThemeCotext } from '../../contexts/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginButtonMenu from '../../components/loginbuttonmenu/LoginButtonMenu';
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch';
import LanguageMenu from '../../components/languagemenu/LanguageMenu';
import { useTranslation } from 'react-i18next';


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
    // backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FFFFFF',
    // backgroundColor: 'common.primaryheaderbg',
    boxShadow: 'none',
}));

const languages = [
    { code: 'en', name: 'English - EN', flag: '🇺🇸' },
    { code: 'es', name: 'Español - ES', flag: '🇪🇸' },
    { code: 'fr', name: 'Français - FR', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch - DE', flag: '🇩🇪' },
    { code: 'th', name: 'แบบไทย - TH', flag: '🇹🇭' },
    { code: 'hi', name: 'हिन्दी - HI', flag: '🇮🇳' },
    { code: 'el', name: 'ελληνικά - EL', flag: '🇬🇷' },
    { code: 'pt', name: 'Português - PT', flag: '🇵🇹' },
    { code: 'ar', name: 'عربي- AR', flag: '🇸🇦' },
];


export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorLa, setAnchorLa] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
    const isMedium = useMediaQuery(muiTheme.breakpoints.between('md', 'lg'));
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English
    const { i18n } = useTranslation(); // Access i18n instance

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleSearchToggle = () => {
        setSearchBarVisible(prevState => !prevState);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClick = (event) => {
        setAnchorLa(event.currentTarget);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);

        i18n.changeLanguage(language.code)
            .then(() => {
                localStorage.setItem('lang', language.code);
            })
            .catch((error) => {
                console.error('Failed to change language:', error);
            });

        setAnchorLa(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorLa(null);
    };

    const { theme } = useThemeCotext();

    const isLightMode = theme === 'light';

    const setInitialLanguage = (filterCode) => {
        const filteredLanguage = languages.find(language => language.code === filterCode);
        setSelectedLanguage(filteredLanguage || languages[0]);
    };


    useEffect(() => {
        const savedLanguageCode = localStorage.getItem('lang');
        setInitialLanguage(savedLanguageCode || 'en');
    }, []);


    return (
        <>
            {isMobile ? (
                <Grid container sx={{ bgcolor: 'common.primaryheaderbg', py: 1, px: { xs: 2, sm: 4 }, justifyContent: 'space-between', alignItems: 'center', borderBottom: !isLightMode ? '1px solid white' : 'transparent' }}>
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
                                                color: 'text.main',
                                                opacity: menuOpen ? 0 : 1,
                                                transition: 'opacity 0.9s ease-in-out',
                                            }}
                                        />
                                        <CloseIcon
                                            sx={{
                                                color: 'text.main',
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
                                        <Logo />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {isTablet &&
                        <Grid item >
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
                            {/* <DarkLightSwitch ></DarkLightSwitch> */}
                        </Grid>

                    }
                    <Grid item>

                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            <Grid item>

                                <Box sx={{ cursor: 'pointer', }} onClick={handleLanguageClick}>
                                    <CustomTypography
                                        style={{
                                            color: isLightMode ? 'text.darkgray' : 'text.primary',
                                            fontSize: '1rem', // 16px to rem
                                            fontWeight: '400',
                                            lineHeight: '1.125rem', // 18px to rem
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: 'primary.darkgray',
                                                // textDecoration: 'underline',
                                            },
                                        }}
                                        text={`${selectedLanguage.flag} ${selectedLanguage.code.toUpperCase()}`} />
                                </Box>
                            </Grid>
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
                                <Box onClick={handleClick} component={'img'} src={UserIcon} alt='UserIcon'></Box>
                            </Grid>
                            <Grid item>
                                <Box component={'img'} src={CartIcon} alt='CartIcon'></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <CustomAppBar sx={{ bgcolor: 'common.primaryheaderbg', py: 2, px: '3.925rem', justifyContent: 'space-between', borderBottom: !isLightMode ? '1px solid white' : 'transparent' }} position="static">
                        <Grid container spacing={isMedium ? 1 : 3.75} // 60px to rem
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Grid item >
                                <Link to='/'>
                                    <Logo />
                                </Link>
                            </Grid>
                            <Grid item xs={isMedium ? 5 : 6}>
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
                            {/* <Grid item>
                                <Box sx={{ display: 'flex' }}>
                                    <DarkLightSwitch ></DarkLightSwitch>
                                </Box>
                            </Grid> */}
                            <Grid item >
                                <Grid container spacing={1.25}> {/* 20px to rem */}
                                    <Grid item>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 1 }}>
                                                <DarkLightSwitch ></DarkLightSwitch>
                                                <Box sx={{ cursor: 'pointer', }} onClick={handleLanguageClick}>
                                                    <CustomTypography
                                                        style={{
                                                            color: isLightMode ? 'text.darkgray' : 'text.primary',
                                                            fontSize: '1rem', // 16px to rem
                                                            fontWeight: '400',
                                                            lineHeight: '1.125rem', // 18px to rem
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                color: 'primary.darkgray',
                                                                // textDecoration: 'underline',
                                                            },
                                                        }}
                                                        text={`${selectedLanguage.flag} ${selectedLanguage.code.toUpperCase()}`} />
                                                </Box>
                                                <Box sx={{
                                                    width: '0.125rem', // 2px to rem
                                                    height: '1.5rem',
                                                    backgroundColor: 'text.black',
                                                    opacity: '15%'
                                                }}>
                                                </Box>

                                            </Box>
                                            <Box onClick={handleClick} sx={{ cursor: 'pointer' }} component="img" src={UserIcon} alt="UserIcon" />
                                            <Link to='/signup'>
                                                <CustomTypography
                                                    text='Sign Up'
                                                    style={{
                                                        color: isLightMode ? 'text.darkgray' : 'text.primary',
                                                        fontSize: '1rem', // 16px to rem
                                                        fontWeight: '400',
                                                        lineHeight: '1.125rem', // 18px to rem
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: 'primary.darkgray',
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
                                                        color: isLightMode ? 'text.darkgray' : 'text.primary',
                                                        fontSize: '1rem', // 16px to rem
                                                        fontWeight: '400',
                                                        lineHeight: '1.125rem', // 18px to rem
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: 'primary.darkgray',
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
                                                        color: isLightMode ? 'text.darkgray' : 'text.primary',
                                                        fontSize: '1rem', // 16px to rem
                                                        fontWeight: '400',
                                                        lineHeight: '1.125rem', // 18px to rem
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: 'primary.darkgray',
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
                        backgroundColor: 'common.mainbg',
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

            <LanguageMenu
                anchorEl={anchorLa}
                handleClose={handleMenuClose}
                onLanguageSelect={handleLanguageSelect}
            />
        </>
    );
}
