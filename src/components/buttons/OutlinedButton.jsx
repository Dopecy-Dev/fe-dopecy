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
            {props.leftImage} {props.text} {props.rightImage}
        </Button>
    )
}

export default OutlinedButton
