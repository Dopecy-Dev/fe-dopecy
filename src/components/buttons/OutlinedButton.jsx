import { Button } from '@mui/material'
import React from 'react'

function OutlinedButton() {
    return (
        <Button
            variant="outlined"
            sx={{
                borderColor: 'secondary.main',
                color: 'secondary.main',
                '&:hover': {
                    borderColor: 'secondary.dark',
                    color: 'secondary.dark',
                },
                padding: '10px 20px',
                fontSize: '16px',
            }}
        >
            Outlined Button
        </Button>
    )
}

export default OutlinedButton
