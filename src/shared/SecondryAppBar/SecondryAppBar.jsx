import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CustomTypography from '../../components/typography/CustomTypography';
import DropDownMenu from '../../components/dropdownmenu/DropDownMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '../../assets/images/SearchIcon.svg';
import SearchIconRight from '../../assets/images/SearchIconRight.svg';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.common.searchbar,
    boxShadow: 'none',
    padding: 0,
    position: 'sticky',
    top: 0,
}));

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '0.625rem', // 10px to rem
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.15) : alpha(theme.palette.common.searchbar, 0.5),
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.25) : alpha(theme.palette.common.searchbar, 0.75),
    },
    marginRight: theme.spacing(2), // 16px
    marginLeft: 0,
    maxWidth: '18.75rem', // 300px to rem
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(2), // 16px
        maxWidth: '25rem', // 400px to rem
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '31.25rem', // 500px to rem
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.625rem' // 10px to rem
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
        padding: theme.spacing(1, 1, 1, 1),
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
        '&::placeholder': {
            color: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.75) : alpha(theme.palette.common.black, 0.75),
        },
    },
}));

export default function SecondryAppBar() {
    const [clickedItem, setClickedItem] = React.useState('Home');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isSticky, setIsSticky] = React.useState(false);

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const handleClick = (item) => {
        setClickedItem(item);
        if (item === 'Dopecy Studio') {
            setAnchorEl((prev) => (prev ? null : document.getElementById('dopecy-studio-button')));
        } else {
            setAnchorEl(null);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const getStyle = (item) => ({
        fontSize: '0.875rem', // 14px to rem
        lineHeight: '0.75rem', // 12px to rem
        fontWeight: item === clickedItem ? '600' : '300',
        textAlign: 'left',
        color: item === clickedItem ? 'text.main' : 'text.primary',
        cursor: 'pointer',
        p: { xs: 1, sm: 1.5, md: 2 }, // Responsive padding
        mr: { xs: 2, sm: 3, md: 4 }, // Responsive margin-right
    });

    const items = ['Home', 'Events', 'Clubs', 'Dopecy Studio', 'Dispensaries', 'Restaurants', 'Liquor Stores '];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <CustomAppBar>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 1, sm: 2, md: 2 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        alignItems: 'center',
                    }}
                >
                    {items.map((item) => (
                        <Box key={item} onClick={() => handleClick(item)} sx={getStyle(item)}>
                            <CustomTypography
                                text={item}
                                style={{
                                    fontSize: 'inherit',
                                    lineHeight: 'inherit',
                                    fontWeight: 'inherit',
                                    textAlign: 'inherit',
                                    color: 'inherit'
                                }}
                                id={item === 'Dopecy Studio' ? 'dopecy-studio-button' : undefined}
                            />
                        </Box>
                    ))}

                    {isSticky && isLargeScreen && (
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
                    )}
                    <DropDownMenu anchorEl={anchorEl} handleClose={handleMenuClose} />
                </Box>
            </Box>
        </CustomAppBar>
    );
}
