import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AllCategoriesMenu from '../AllCategoriesMenu/AllCategoriesMenu';
import CustomTypography from '../../components/typography/CustomTypography';
import DropDownMenu from '../../components/dropdownmenu/DropDownMenu';

const HoverTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : 'text.primary',
    textAlign: 'left',
    transition: 'color 0.3s',
    fontWeight: '500',
    lineHeight: 1,
    '&:hover': {
        color: '#4CAF50',
        cursor: 'pointer',
    },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.common.searchbar,
    boxShadow: 0,
    padding: '0rem 3rem'

}));


export default function SecondryAppBar() {

    return (
        <Box sx={{ flexGrow: 1, px: 11, py: 1, bgcolor: 'common.searchbar' }}>

            <Grid container spacing={6} alignItems={'center'}>
                <Grid item>
                    <CustomTypography
                        text='Home'
                        style={{
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '12px',
                            color: 'text.primary'
                        }}
                    >

                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        text='Events'
                        style={{
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '12px',
                            color: 'text.primary'
                        }}
                    >
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        text='Clubs'
                        style={{
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '12px',
                            color: 'text.primary'
                        }}
                    >
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <DropDownMenu></DropDownMenu>
                </Grid>
            </Grid>
        </Box>
    );
}
