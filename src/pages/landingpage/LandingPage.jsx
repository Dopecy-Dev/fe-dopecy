import { Box } from '@mui/system'
import React from 'react'
import DeliverySection from './deliverysection/DeliverySection'
import CategoriesSection from './categoriessection/CategoriesSection'
import ProductsSection from './productssection/ProductsSection'
import ShopsSection from './shopssection/ShopsSection'

function LandingPage() {
    return (
        <>
            <Box sx={{ px: 8 }}>
                <Box sx={{
                    py: 4,
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
            <Box sx={{
                py: 4,
                pl: 8,
                bgcolor: 'common.shopsection'
            }}
            >
                <ShopsSection />
            </Box>
        </>
    )
}

export default LandingPage