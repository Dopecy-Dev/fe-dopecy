import React from 'react'
import PrimarySearchAppBar from '../../shared/PrimarySearchAppBar/PrimarySearchAppBar'
import SecondryAppBar from '../../shared/SecondryAppBar/SecondryAppBar'
import LandingPage from '../../pages/landingpage/LandingPage'

function Header({ toggleTheme, theme }) {

    return (
        <>
            <PrimarySearchAppBar toggleTheme={toggleTheme} theme={theme} />
            <SecondryAppBar />
            <LandingPage></LandingPage>
        </>
    )
}

export default Header