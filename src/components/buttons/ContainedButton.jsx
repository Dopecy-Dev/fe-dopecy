import { Button } from '@mui/material'
import React from 'react'

function ContainedButton(props) {
    return (
        <Button
            variant="contained"
            {...props}
            sx={{
                ...props.style,
                backgroundColor: 'common.mainbg',
                textTransform: 'none',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'common.mainhoverbg',
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
