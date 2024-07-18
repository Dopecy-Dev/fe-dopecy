import React from 'react'
import Header from './Header/Header'
import LandingPage from '../pages/landingpage/LandingPage'
import { Box } from '@mui/material'

function Layout({ toggleTheme, theme }) {
    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme}></Header>
            <Box sx={{ py: 4, px: 8 }}>

                <LandingPage></LandingPage>
            </Box>
        </>
    )
}

export default Layout