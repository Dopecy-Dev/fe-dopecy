import React from 'react'
import Header from './Header/Header'
import LandingPage from '../pages/landingpage/LandingPage'
import { Box } from '@mui/material'
import Footer from './Footer/Footer'

function Layout({ toggleTheme, theme }) {
    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme}></Header>
            <Box sx={{ py: { xs: 2, md: 4 } }}>

                <LandingPage></LandingPage>
            </Box>
            <Footer></Footer>


        </>
    )
}

export default Layout