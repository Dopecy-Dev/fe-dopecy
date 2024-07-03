import React from 'react'
import PrimarySearchAppBar from '../../shared/PrimarySearchAppBar/PrimarySearchAppBar'
import SecondryAppBar from '../../shared/SecondryAppBar/SecondryAppBar'

function Header() {
    return (
        <>
            <PrimarySearchAppBar />
            <SecondryAppBar />
        </>
    )
}

export default Header