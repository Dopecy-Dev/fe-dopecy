import { Box } from '@mui/material'
import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'

function CommingSoon() {
    return (
        <>
            <Header />
            <Box
                sx={{
                    width: '100%',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                Comming soon..!
            </Box>
            <Footer />

        </>
    )
}

export default CommingSoon