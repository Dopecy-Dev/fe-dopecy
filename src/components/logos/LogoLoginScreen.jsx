import React from 'react';
import loginscreenlogo from '../../assets/images/loginscreenlogo.svg';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LogoLoginScreen() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <Box
            component="img"
            src={loginscreenlogo}
            alt="loginscreenlogo"
            sx={{ cursor: 'pointer' }}
            onClick={handleLogoClick}
        />
    );
}

export default LogoLoginScreen;
