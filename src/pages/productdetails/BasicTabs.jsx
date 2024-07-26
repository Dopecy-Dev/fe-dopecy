import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccordionUsage from './AccordionUsage';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ bgcolor: 'text.graytextB3', borderRadius: '1.5625rem', p: '0.3125rem' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{ style: { display: 'none' } }} // Hide default underline
                >
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.75rem', // 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem', // 25px to rem
                            padding: '0 4rem', // 64px to rem
                            bgcolor: value === 0 ? 'text.white' : 'transparent', // Change bg color for active tab
                            color: value === 0 ? 'primary.main' : 'text.grey', // Change text color for active tab
                            marginRight: '2rem', // 4px to rem
                            '@media (max-width: 600px)': {
                                padding: '0 2rem', // 32px to rem
                                marginRight: '1rem', // 16px to rem
                            },
                            '@media (max-width: 400px)': {
                                padding: '0 1rem', // 16px to rem
                                marginRight: '0.5rem', // 8px to rem
                            },
                            '&:focused': {
                                border: 'none'
                                // bgcolor: value === 0 ? 'primary.dark' : 'text.grey',
                            },
                            '&.Mui-selected': {
                                border: 'none', // Remove border when selected
                                bgcolor: value === 0 ? 'text.white' : 'transparent', // Background color for selected tab
                                outline: 'none', // Remove default outline on focus
                                color: value === 0 ? 'primary.main' : 'text.grey', // Text color for selected tab
                            },
                            '&:focus': {
                                border: 'none', // Remove border on focus
                                outline: 'none', // Remove default outline on focus
                            },
                        }}
                        label="Details"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.75rem', // 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem', // 25px to rem
                            padding: '0 2rem', // 32px to rem
                            bgcolor: value === 1 ? 'text.white' : 'transparent', // Change bg color for active tab
                            color: value === 1 ? 'primary.main' : 'text.grey', // Change text color for active tab
                            marginRight: '2rem', // 4px to rem
                            '@media (max-width: 600px)': {
                                padding: '0 1.5rem', // 24px to rem
                                marginRight: '1rem', // 16px to rem
                            },
                            '@media (max-width: 400px)': {
                                padding: '0 1rem', // 16px to rem
                                marginRight: '0.5rem', // 8px to rem
                            },
                            '&:focused': {
                                border: 'none'
                                // bgcolor: value === 0 ? 'primary.dark' : 'text.grey',
                            },
                            '&.Mui-selected': {
                                border: 'none', // Remove border when selected
                                bgcolor: value === 1 ? 'text.white' : 'transparent', // Background color for selected tab
                                outline: 'none', // Remove default outline on focus
                                color: value === 1 ? 'primary.main' : 'text.grey', // Text color for selected tab
                            },
                            '&:focus': {
                                border: 'none', // Remove border on focus
                                outline: 'none', // Remove default outline on focus
                            },
                        }}
                        label="Packaging"
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: '1rem', // 16px to rem
                            lineHeight: '1.75rem', // 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem', // 25px to rem
                            padding: '0 4rem', // 64px to rem
                            bgcolor: value === 2 ? 'text.white' : 'transparent', // Change bg color for active tab
                            color: value === 2 ? 'primary.main' : 'text.grey', // Change text color for active tab
                            // marginRight: '0.125rem', // 2px to rem
                            '@media (max-width: 600px)': {
                                padding: '0 2rem', // 32px to rem
                                marginRight: '1rem', // 16px to rem
                            },
                            '@media (max-width: 400px)': {
                                padding: '0 1rem', // 16px to rem
                                marginRight: '0.5rem', // 8px to rem
                            },
                            '&:focused': {
                                border: 'none'
                                // bgcolor: value === 0 ? 'primary.dark' : 'text.grey',
                            },
                            '&.Mui-selected': {
                                border: 'none', // Remove border when selected
                                bgcolor: value === 2 ? 'text.white' : 'transparent', // Background color for selected tab
                                outline: 'none', // Remove default outline on focus
                                color: value === 2 ? 'primary.main' : 'text.grey', // Text color for selected tab
                            },
                            '&:focus': {
                                border: 'none', // Remove border on focus
                                outline: 'none', // Remove default outline on focus
                            },
                        }}
                        label="Shipping details"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AccordionUsage />
                {/* Item One */}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}
