import React from 'react';
import { Box } from '@mui/material';
import logo from '../../../assets/images/logogreen.svg';

const Logo = () => {
    return (
        <Box component="img" src={logo} alt="Logo" />
    );
}

export default Logo;
