import { Button } from '@mui/material'
import React from 'react'

function OutlinedButton(props) {
    return (
        <Button
            variant="outlined"
            {...props}
            sx={{
                ...props.style,
                // borderColor: 'transparent',
                color: 'primary.main',
                textTransform: 'none',
                '&:hover': {
                    borderColor: 'primary.main',
                },
            }}
            endIcon={props.icon ? <props.icon /> : null}
        >
            {props.leftimage} {props.text} {props.rightimage}
        </Button>
    )
}

export default OutlinedButton
