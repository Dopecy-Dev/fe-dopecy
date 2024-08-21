import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContainedButton from '../../components/buttons/ContainedButton';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import { useTheme } from '../../contexts/ThemeContext';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

const categories = [
    { name: 'Electronics', subCategories: ['Mobile Phones', 'Laptops', 'Cameras'] },
    { name: 'Books', subCategories: ['Fiction', 'Non-Fiction', 'Comics'] },
    { name: 'Clothing', subCategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Kitchen', subCategories: ['Furniture', 'Appliances', 'Decor'] },
    { name: 'Sports', subCategories: ['Cricket', 'Football', 'Gym Equipment'] },
    { name: 'Toys', subCategories: ['Action Figures', 'Dolls', 'Puzzles'] },
    { name: 'Beauty', subCategories: ['Makeup', 'Skincare', 'Haircare'] }
];

const AllCategoriesMenu = () => {
    const { theme, appliedTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const currentColors = theme === 'light' ? {
        background: appliedTheme.palette.common.white,
        text: appliedTheme.palette.text.primary,
        hover: '#f1f1f1',
        hoverText: appliedTheme.palette.text.main,
        border: appliedTheme.palette.divider,
        buttonHover: '#3e8e41',
        subBackground: appliedTheme.palette.common.white
    } : {
        background: appliedTheme.palette.common.primaryheaderbg,
        text: appliedTheme.palette.text.white,
        hover: appliedTheme.palette.common.primaryheaderbg,
        hoverText: appliedTheme.palette.text.main,
        border: appliedTheme.palette.divider,
        buttonHover: '#9b66ff',
        subBackground: appliedTheme.palette.common.primaryheaderbg
    };

    const { t } = useTranslation();


    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-block',
                textAlign: 'left'
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {theme === 'light' ?
                <OutlinedButton
                    style={{
                        width: '8.9375rem',
                        height: '3rem',
                        borderRadius: '0.625rem',
                    }}
                    text={t('categories')}
                    icon={KeyboardArrowDownIcon}
                />
                :
                <ContainedButton
                    style={{
                        width: '8.9375rem',
                        height: '3rem',
                        borderRadius: '0.625rem',
                    }}
                    text={t('categories')}
                    icon={KeyboardArrowDownIcon}
                />
            }
            <Box
                sx={{
                    display: open ? 'block' : 'none',
                    position: 'absolute',
                    backgroundColor: currentColors.background,
                    minWidth: '200px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                    zIndex: 99999,
                    borderRadius: '0.625rem',
                    top: '100%',
                    left: 0,
                }}
            >
                {categories.map((category, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <Box
                            component="a"
                            href={`#${category.name.toLowerCase()}`}
                            sx={{
                                color: currentColors.text,
                                padding: '12px 16px',
                                textDecoration: 'none',
                                display: 'block',
                                backgroundColor: 'transparent',
                                borderBottom: `1px solid ${currentColors.border}`,
                                '&:hover': {
                                    backgroundColor: currentColors.hover,
                                    color: currentColors.hoverText,
                                }
                            }}
                        >
                            {category.name}
                        </Box>
                        <Box
                            sx={{
                                display: activeIndex === index ? 'block' : 'none',
                                position: 'absolute',
                                left: '100%',
                                top: 0,
                                backgroundColor: currentColors.subBackground,
                                minWidth: '200px',
                                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                borderRadius: '0.625rem',
                                zIndex: 100000,
                            }}
                        >
                            {category.subCategories.map((subCategory, subIndex) => (
                                <Box
                                    component="a"
                                    key={subIndex}
                                    href={`#${subCategory.toLowerCase()}`}
                                    sx={{
                                        color: currentColors.text,
                                        padding: '12px 16px',
                                        textDecoration: 'none',
                                        display: 'block',
                                        backgroundColor: 'transparent',
                                        borderBottom: `1px solid ${currentColors.border}`,
                                        '&:hover': {
                                            backgroundColor: currentColors.hover,
                                            color: currentColors.hoverText,
                                        }
                                    }}
                                >
                                    {subCategory}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default AllCategoriesMenu;
