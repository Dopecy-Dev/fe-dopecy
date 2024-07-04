import React from 'react'
import PrimarySearchAppBar from '../../shared/PrimarySearchAppBar/PrimarySearchAppBar'
import SecondryAppBar from '../../shared/SecondryAppBar/SecondryAppBar'

function Header({ toggleTheme, theme }) {

    return (
        <>
            <PrimarySearchAppBar toggleTheme={toggleTheme} theme={theme} />
            <SecondryAppBar />
        </>
    )
}

export default Header