import { Box } from '@mui/system'
import React from 'react'
import DeliverySection from './deliverysection/DeliverySection'
import CategoriesSection from './categoriessection/CategoriesSection'
import ProductsSection from './productssection/ProductsSection'
import ShopsSection from './shopssection/ShopsSection'
import SmallProductsSection from './smallproductssection/SmallProductsSection'
import TestimonialsSection from './testimonialssection/TestimonialsSection'
import FullBannerSection from './fullbannersection/FullBannerSection'
import HalfBannersSection from './halfbannerssection/FullBannerSection'
import HeroSection from './herosection/HeroSection'

function LandingPage() {
    return (
        <>
            <Box sx={{ px: 8 }}>
                <Box sx={{ py: 4 }}>
                    <HeroSection />
                </Box>
                <Box sx={{ py: 4, boxShadow: 3, bgcolor: 'text.white' }}>
                    <DeliverySection />
                </Box>

                <Box sx={{ py: 4 }}>
                    <CategoriesSection />
                </Box>

                <Box sx={{ py: 4 }}>
                    <ProductsSection />
                </Box>
                <Box sx={{ py: 4 }}>
                    <HalfBannersSection />
                </Box>
            </Box>
            <Box sx={{ py: 4, bgcolor: 'common.shopsection' }}>
                <ShopsSection />
            </Box>
            <Box sx={{ px: 8 }}>
                <Box sx={{ py: 12 }}>
                    <SmallProductsSection />
                </Box>

                <Box>
                    <FullBannerSection />
                </Box>

                <Box sx={{ py: 4 }}>
                    <TestimonialsSection />
                </Box>

            </Box>
        </>
    )
}

export default LandingPage