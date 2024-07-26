import React from 'react';
import './AllCategoriesMenu.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContainedButton from '../../components/buttons/ContainedButton';
import { styled, useTheme } from '@mui/system';

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
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;

const DropdownLink = styled('a')`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 16px; /* Match this with your horizontal padding */
        right: 16px; /* Match this with your horizontal padding */
        bottom: 0;
        height: 1px;
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
            <ContainedButton
                style={{ width: '143px', height: '48px', borderRadius: '10px', }}
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
