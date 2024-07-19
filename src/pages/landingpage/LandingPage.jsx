import { Box } from '@mui/system'
import React from 'react'
import DeliverySection from './deliverysection/DeliverySection'
import CategoriesSection from './categoriessection/CategoriesSection'
import ProductsSection from './productssection/ProductsSection'

function LandingPage() {
    return (
        <Box>
            <Box sx={{
                flexGrow: 1, px: 4, py: 4,
                // border: '1px solid',
                // borderColor: 'common.searchbar',
                boxShadow: 3,
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

            <Box sx={{
                py: 4
            }}
            >
                <ProductsSection />
            </Box>

        </Box>
    )
}

export default LandingPage