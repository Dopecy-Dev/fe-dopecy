import { Box, Grid, IconButton } from "@mui/material";
import React, { useState, useRef } from "react";
import productlargeimage from '../../assets/images/productlargeimage.svg';
import leftarrowbtn from '../../assets/images/leftarrowbtn.svg';
import rightarrowbtn from '../../assets/images/rightarrowbtn.svg';

const ProductImagesSlider = () => {
    const [currentImage, setCurrentImage] = useState(productlargeimage);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [productlargeimage, productlargeimage, productlargeimage, productlargeimage, productlargeimage, productlargeimage];
    const thumbnailsRef = useRef(null);

    const scrollThumbnails = (newIndex) => {
        if (thumbnailsRef.current) {
            const thumbnailWidth = thumbnailsRef.current.children[0].offsetWidth;
            thumbnailsRef.current.scrollLeft = newIndex * thumbnailWidth;
        }
    };

    const handleLeftClick = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setCurrentImage(images[newIndex]);
        scrollThumbnails(newIndex);
    };

    const handleRightClick = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setCurrentImage(images[newIndex]);
        scrollThumbnails(newIndex);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setCurrentImage(images[index]);
        scrollThumbnails(index);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            bgcolor: 'common.productbg1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: '1.5rem', // 24px to rem
                            borderRadius: '1rem', // 16px to rem
                        }}
                    >
                        <Box component={'img'} src={currentImage} alt="productlargeimage" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IconButton
                            onClick={handleLeftClick}
                            sx={{ border: 'none' }}
                        >
                            <Box component={'img'} src={leftarrowbtn} alt="leftarrowbtn" />
                        </IconButton>
                        <Box
                            sx={{
                                display: 'flex',
                                overflowX: 'auto',
                                flexGrow: 1,
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                }
                            }}
                            ref={thumbnailsRef}
                        >
                            {images.map((image, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '18%', // Responsive width
                                        minWidth: '6.25rem', // 100px to rem
                                        bgcolor: 'common.productbg2',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: '1rem', // 16px to rem
                                        borderRadius: '1rem', // 16px to rem
                                        cursor: 'pointer',
                                        border: currentIndex === index ? '0.125rem solid' : 'none', // 2px to rem
                                        borderColor: 'common.mainbg',
                                        mx: '0.625rem' // 10px to rem
                                    }}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Box sx={{ width: "90%" }} component={'img'} src={image} alt={`productsmallimage${index}`} />
                                </Box>
                            ))}
                        </Box>
                        <IconButton
                            onClick={handleRightClick}
                            sx={{ border: 'none' }}
                        >
                            <Box component={'img'} src={rightarrowbtn} alt="rightarrowbtn" />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductImagesSlider;
