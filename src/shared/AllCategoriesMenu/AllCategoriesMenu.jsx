import React, { useState } from 'react';
import './AllCategoriesMenu.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
    return (
        <div className="dropdown" style={{ textAlign: 'left' }}>
            <Button size="large" sx={{ bgcolor: 'gray', borderRadius: '25px', textTransform: 'none' }} startIcon={<MenuIcon />} variant="contained" className="dropbtn">
                All Categories
            </Button>
            {/* <button className="dropbtn">All Categories</button> */}
            <div className="dropdown-content">
                {categories.map((category, index) => (
                    <div className="dropdown-item" key={index}>
                        <a href={`#${category.name.toLowerCase()}`}>{category.name}</a>
                        <div className="sub-dropdown-content">
                            {category.subCategories.map((subCategory, subIndex) => (
                                <a key={subIndex} href={`#${subCategory.toLowerCase()}`}>{subCategory}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCategoriesMenu;
