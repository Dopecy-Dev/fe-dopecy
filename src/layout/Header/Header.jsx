import React from 'react';
import PrimarySearchAppBar from '../../shared/PrimarySearchAppBar/PrimarySearchAppBar';
import SecondryAppBar from '../../shared/SecondryAppBar/SecondryAppBar';
import TopBar from '../../shared/TopBar/TopBar';

function Header({ toggleTheme, theme }) {

    return (
        <>
            <TopBar />
            <PrimarySearchAppBar />
            <SecondryAppBar />
        </>
    );
}

export default Header;
