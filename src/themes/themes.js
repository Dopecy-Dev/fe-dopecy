// src/themes/themes.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#326039', // Change this to your desired primary color for the light theme
        },
        text: {
            main: '#326039',
            primary: '#000000', // Change this to your desired primary text color for the light theme
            secondary: '#555555', // Optional: change secondary text color for the light theme
            button: '#326039',
            cstmwhite: '#F5F7F5',
            white: '#FFFFFF',
            black: '#000000',
            titleblack: '#1A1A1A',
            darkgray: '#666666',
            footerlinks: '#999999',
            graybg3: '#333333',
            graytextB3: '#B3B3B3',
            accordiontext: '#667085',
            productlinkclicked: '#326039',
            smallproductheading: '#000000',

        },
        common: {
            mainbg: '#326039',
            selectfieldbg: '#F2F2F2',
            topbarbg: '#326039',
            primaryheaderbg: '#FFFFFF',
            searchbar: '#EBEFEB',
            shopsection: '#F7FFF8',
            fullbannerbg: '#FFE7D6',
            bennerdiscountbg: '#DCEDDF',
            leftbannerbg: '#F2F4F5',
            rightbannerbg: '#191C1F',
            rightbannerintrobg: '#EFD33D',
            heroarrowbg: '#DCEDDF',
            productbg1: '#F7EDE1',
            productbg2: '#F2F4F7',
            cartselectionbg: '#F2F4F7',
            darklightbg: '#EAEAEA',
            cardbg: '#FFFFFF',
            deliverybg: '#FFFFFF'
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bb86fc', // Change this to your desired primary color for the dark theme
        },
        text: {
            main: '#326039',
            primary: '#FFFFFF', // Change this to your desired primary text color for the light theme
            secondary: '#555555', // Optional: change secondary text color for the light theme
            button: '#212121',
            cstmwhite: '#F5F7F5',
            white: '#FFFFFF',
            black: '#000000',
            titleblack: '#1A1A1A',
            darkgray: '#666666',
            footerlinks: '#999999',
            graybg3: '#333333',
            graytextB3: '#B3B3B3',
            accordiontext: '#667085',
            productlinkclicked: '#676767',
            smallproductheading: '#868686',

        },
        common: {
            mainbg: '#326039',
            mainhoverbg: '#327039',
            selectfieldbg: 'transparent',
            topbarbg: '#212121',
            primaryheaderbg: '#302F2F',
            heroarrowbg: '#232323',
            cardbg: '#404040',
            deliverybg: '#212121',
            searchbar: '#EBEFEB',
            leftbannerbg: '#404040',
            rightbannerbg: '#191C1F',
            bennerdiscountbg: '#DCEDDF',
            rightbannerintrobg: '#EFD33D',
            fullbannerbg: '#FFE7D6',

        },
    },
});

export { lightTheme, darkTheme };
