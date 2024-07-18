import React from 'react'
import Header from './Header/Header'
import LandingPage from '../pages/landingpage/LandingPage'

function Layout({ toggleTheme, theme }) {
    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme}></Header>
            {/* <LandingPage></LandingPage> */}
        </>
    )
}

export default Layout