import { Box } from '@mui/material'
import React from 'react'
import whitelogo from '../../assets/images/whitelogo.svg';

function LogoLight(props) {
    return (
        <Box sx={{ ...props.sx }} component="img" src={whitelogo} alt="whitelogo" />
    )
}

export default LogoLight