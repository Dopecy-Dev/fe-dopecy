import { Box } from '@mui/system'
import React from 'react'
import DeliverySection from './deliverysection/DeliverySection'
import CategoriesSection from './categoriessection/CategoriesSection'
import ProductsSection from './productssection/ProductsSection'
import ShopsSection from './shopssection/ShopsSection'
import SmallProductsSection from './smallproductssection/SmallProductsSection'
import FullBannerSection from './fullbannersection/FullBannerSection'
import HalfBannersSection from './halfbannerssection/FullBannerSection'
import HeroSection from './herosection/HeroSection'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import TestimonialsSection from '../../shared/TestimonialsSection/TestimonialsSection'
import DispensariesSection from './dispensariessection/DispensariesSection'

function LandingPage() {
    return (
        <>
            <Header></Header>
            <Box sx={{ px: { xs: 2, md: 4, lg: 8 } }}>
                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <HeroSection />
                </Box>
            </Box>
            <Box sx={{ py: { xs: 2, md: 4 }, bgcolor: 'common.shopsection' }}>
                <DispensariesSection></DispensariesSection>
            </Box>
            <Box sx={{ px: { xs: 2, md: 4, lg: 8 } }}>

                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <DeliverySection />
                </Box>

                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <CategoriesSection />
                </Box>

                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <ProductsSection />
                </Box>
                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <HalfBannersSection />
                </Box>
            </Box>
            <Box sx={{ py: { xs: 2, md: 4 }, bgcolor: 'common.shopsection' }}>
                <ShopsSection />
            </Box>
            <Box sx={{ px: { xs: 2, md: 4, lg: 8 } }}>
                <Box sx={{ py: { xs: 6, md: 12 } }}>
                    <SmallProductsSection />
                </Box>

                <Box>
                    <FullBannerSection />
                </Box>

                <Box sx={{ py: { xs: 2, md: 4 } }}>
                    <TestimonialsSection />
                </Box>

            </Box>
            <Footer></Footer>
        </>
    )
}

export default LandingPage