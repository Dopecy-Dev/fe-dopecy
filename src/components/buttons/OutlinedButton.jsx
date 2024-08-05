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
                color: 'text.main',
                textTransform: 'none',
                borderColor: 'common.mainbg',
                '&:hover': {
                    borderColor: 'common.mainbg',
                },
                '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                },
                '&.Mui-focused': {
                    outline: 'none',
                    boxShadow: 'none',
                },
            }}
            endIcon={props.icon ? <props.icon /> : null}
        >
            {props.leftimage} {props.text} {props.rightimage}
        </Button>
    )
}

export default OutlinedButton
