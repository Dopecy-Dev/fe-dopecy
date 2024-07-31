import React from 'react';
import './AllCategoriesMenu.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContainedButton from '../../components/buttons/ContainedButton';
import { styled, useTheme } from '@mui/system';
import OutlinedButton from '../../components/buttons/OutlinedButton';

const categories = [
    { name: 'Electronics', subCategories: ['Mobile Phones', 'Laptops', 'Cameras'] },
    { name: 'Books', subCategories: ['Fiction', 'Non-Fiction', 'Comics'] },
    { name: 'Clothing', subCategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Kitchen', subCategories: ['Furniture', 'Appliances', 'Decor'] },
    { name: 'Sports', subCategories: ['Cricket', 'Football', 'Gym Equipment'] },
    { name: 'Toysall', subCategories: ['Action Figures', 'Dolls', 'Puzzles'] },
    { name: 'Beauty', subCategories: ['Makeup', 'Skincare', 'Haircare'] }
];

// Styled components with theme integration
const Dropdown = styled('div')`
    position: relative;
    display: inline-block;
`;

const DropdownContent = styled('div')`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 12.5rem; /* 200px to rem */
    box-shadow: 0px 0.5rem 1rem 0px rgba(0,0,0,0.2); /* 8px and 16px to rem */
    z-index: 99999;
`;

const DropdownItem = styled('div')`
    position: relative;

    &:hover .sub-dropdown-content {
        display: block;
    }
`;

const SubDropdownContent = styled('div')`
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    background-color: #f9f9f9;
    min-width: 12.5rem; /* 200px to rem */
    box-shadow: 0px 0.5rem 1rem 0px rgba(0,0,0,0.2); /* 8px and 16px to rem */
`;

const DropdownLink = styled('a')`
    color: black;
    padding: 0.75rem 1rem; /* 12px 16px to rem */
    text-decoration: none;
    display: block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 1rem; /* 16px to rem */
        right: 1rem; /* 16px to rem */
        bottom: 0;
        height: 0.0625rem; /* 1px to rem */
        background-color: #ccc;
    }

    &:last-child::after {
        display: none; /* Remove border from the last item */
    }

    &:hover {
        background-color: #f1f1f1;
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;

const AllCategoriesMenu = () => {
    const theme = useTheme();

    return (
        <Dropdown className="dropdown" style={{ textAlign: 'left' }}>
            <OutlinedButton
                style={{ width: '8.9375rem', height: '3rem', borderRadius: '0.625rem' }} // 143px, 48px, 10px to rem
                text='Categories'
                icon={KeyboardArrowDownIcon}
            />
            <DropdownContent className="dropdown-content">
                {categories.map((category, index) => (
                    <DropdownItem className="dropdown-item" key={index}>
                        <DropdownLink href={`#${category.name.toLowerCase()}`}>{category.name}</DropdownLink>
                        <SubDropdownContent className="sub-dropdown-content">
                            {category.subCategories.map((subCategory, subIndex) => (
                                <DropdownLink key={subIndex} href={`#${subCategory.toLowerCase()}`}>{subCategory}</DropdownLink>
                            ))}
                        </SubDropdownContent>
                    </DropdownItem>
                ))}
            </DropdownContent>
        </Dropdown>
    );
}

export default AllCategoriesMenu;
