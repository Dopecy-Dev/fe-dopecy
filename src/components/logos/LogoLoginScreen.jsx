import React from 'react'
import loginscreenlogo from '../../assets/images/loginscreenlogo.svg'
import { Box } from '@mui/material'

function LogoLoginScreen() {
    return (
        <Box component="img" src={loginscreenlogo} alt="loginscreenlogo" />
    )
}

export default LogoLoginScreen