// src/themes/themes.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#326039', // Change this to your desired primary color for the light theme
        },
        text: {
            primary: '#000000', // Change this to your desired primary text color for the light theme
            secondary: '#555555', // Optional: change secondary text color for the light theme
            cstmwhite: '#F5F7F5',
            white: '#FFFFFF',
            black: '#000000',
            titleblack: '#1A1A1A',
            darkgray: '#666666',
            footerlinks: '#999999',
            graybg3: '#333333',
            graytextB3: '#B3B3B3',
        },
        common: {
            searchbar: '#EBEFEB',
            shopsection: '#F7FFF8',
            pinkbg: '#FFE7D6',
            bennerdiscountbg: '#DCEDDF'
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bb86fc', // Change this to your desired primary color for the dark theme
        },
    },
});

export { lightTheme, darkTheme };
