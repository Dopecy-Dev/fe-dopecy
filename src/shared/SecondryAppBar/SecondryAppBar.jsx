import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomTypography from '../../components/typography/CustomTypography';
import DropDownMenu from '../../components/dropdownmenu/DropDownMenu';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.common.searchbar,
    boxShadow: 0,
    padding: '0rem 3rem'
}));

export default function SecondryAppBar() {
    const [clickedItem, setClickedItem] = React.useState('Home');

    const handleClick = (item) => {
        setClickedItem(item);
    };

    const getStyle = (item) => ({
        fontSize: '14px',
        lineHeight: '12px',
        fontWeight: item === clickedItem ? '600' : '300',
        textAlign: 'left',
        color: item === clickedItem ? 'primary.main' : 'text.primary',
        cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
    });

    const items = ['Home', 'Events', 'Clubs'];

    return (
        <Box sx={{ px: 8, py: 1, bgcolor: 'common.searchbar' }}>
            <Grid container spacing={6} alignItems={'center'}>
                {items.map((item) => (
                    <Grid item key={item} onClick={() => handleClick(item)}>
                        <Box sx={getStyle(item)}>
                            <CustomTypography
                                text={item}
                                style={{
                                    fontSize: 'inherit',
                                    lineHeight: 'inherit',
                                    fontWeight: 'inherit',
                                    textAlign: 'inherit',
                                    color: 'inherit'
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
                <Grid item>
                    <DropDownMenu />
                </Grid>
            </Grid>
        </Box>
    );
}
