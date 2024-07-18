import { Box, fontSize, fontWeight, lineHeight } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import CustomTypography from '../../components/typography/CustomTypography'
import DeliverySection from './deliverysection/DeliverySection'
import CategoriesSection from './categoriessection/CategoriesSection'

function LandingPage() {
    return (
        <Box>
            <Box sx={{
                flexGrow: 1, px: 4, py: 4,
                boxShadow: 4,
                bgcolor: 'text.white'
            }}>
                <DeliverySection />
            </Box>

            <Box sx={{
                py: 4
            }}
            >
                <CategoriesSection />
            </Box>
        </Box>
    )
}

export default LandingPage