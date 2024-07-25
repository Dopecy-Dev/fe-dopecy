import { Typography } from '@mui/material'
import React from 'react'

function CustomTypography(props) {
    return (
        <Typography
            {...props}
            sx={{ ...props.style }}>
            {props.text}
        </Typography>
    )
}

export default CustomTypography