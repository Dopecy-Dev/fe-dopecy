import { Button } from '@mui/material'
import React from 'react'

function ContainedButton(props) {
    return (
        <Button
            variant="contained"
            {...props}
            sx={{
                ...props.style,
                backgroundColor: 'primary.main',
                textTransform: 'none',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'primary.dark',
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
            {props.text}
        </Button>
    )
}

export default ContainedButton
