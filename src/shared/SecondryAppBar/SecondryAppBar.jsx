import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AllCategoriesMenu from '../AllCategoriesMenu/AllCategoriesMenu';

const HoverTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
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
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
    boxShadow: 0,
}));


export default function SecondryAppBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CustomAppBar position="static" sx={{ boxShadow: 0 }}>
                <Toolbar>
                    <Grid container columnSpacing={6} alignItems={'center'}>
                        <Grid item>
                            <AllCategoriesMenu />
                        </Grid>
                        <Grid item>
                            <HoverTypography variant="h6">
                                Super Deals
                            </HoverTypography>
                        </Grid>
                        <Grid item>
                            <HoverTypography variant="h6">
                                Home
                            </HoverTypography>
                        </Grid>
                        <Grid item>
                            <HoverTypography variant="h6">
                                Events
                            </HoverTypography>
                        </Grid>
                        <Grid item>
                            <HoverTypography variant="h6">
                                Clubs
                            </HoverTypography>
                        </Grid>
                        <Grid item>
                            <HoverTypography variant="h6">
                                Studio
                            </HoverTypography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </CustomAppBar>
        </Box>
    );
}
