import React from 'react'
import PrimarySearchAppBar from '../../shared/PrimarySearchAppBar/PrimarySearchAppBar'
import SecondryAppBar from '../../shared/SecondryAppBar/SecondryAppBar'
import LandingPage from '../../pages/landingpage/LandingPage'
import TopBar from '../../shared/TopBar/TopBar'

function Header({ toggleTheme, theme }) {

    return (
        <>
            <TopBar></TopBar>
            <PrimarySearchAppBar toggleTheme={toggleTheme} theme={theme} />
            <SecondryAppBar />
            {/* <LandingPage></LandingPage> */}
        </>
    )
}

export default Header