import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccordionUsage from './AccordionUsage';
import { useTheme, useMediaQuery } from '@mui/material';

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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    bgcolor: 'text.graytextB3',
                    borderRadius: '1.5625rem',
                    p: '0.3125rem',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{ style: { display: 'none' } }} // Hide default underline
                >
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: isMobile ? '0.875rem' : '1rem', // 14px to rem or 16px to rem
                            lineHeight: isMobile ? '1.5rem' : '1.75rem', // 24px to rem or 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem',
                            padding: isMobile ? '0 1rem' : '0 4rem', // 16px to rem or 64px to rem
                            bgcolor: value === 0 ? 'text.white' : 'transparent',
                            color: value === 0 ? 'primary.main' : 'text.grey',
                            marginRight: isMobile ? '0.5rem' : '2rem', // 8px to rem or 32px to rem
                            '&:focus': {
                                border: 'none',
                                outline: 'none',
                            },
                            '&.Mui-selected': {
                                border: 'none',
                                bgcolor: value === 0 ? 'text.white' : 'transparent',
                                color: value === 0 ? 'common.mainbg' : 'text.grey',
                            },
                        }}
                        label="Shipping details"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: isMobile ? '0.875rem' : '1rem', // 14px to rem or 16px to rem
                            lineHeight: isMobile ? '1.5rem' : '1.75rem', // 24px to rem or 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem',
                            padding: isMobile ? '0 1rem' : '0 2rem', // 16px to rem or 32px to rem
                            bgcolor: value === 1 ? 'text.white' : 'transparent',
                            color: value === 1 ? 'primary.main' : 'text.grey',
                            marginRight: isMobile ? '0.5rem' : '2rem', // 8px to rem or 32px to rem
                            '&:focus': {
                                border: 'none',
                                outline: 'none',
                            },
                            '&.Mui-selected': {
                                border: 'none',
                                bgcolor: value === 1 ? 'text.white' : 'transparent',
                                color: value === 1 ? 'common.mainbg' : 'text.grey',
                            },
                        }}
                        label="Packaging"
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{
                            fontWeight: '600',
                            fontSize: isMobile ? '0.875rem' : '1rem', // 14px to rem or 16px to rem
                            lineHeight: isMobile ? '1.5rem' : '1.75rem', // 24px to rem or 28px to rem
                            textTransform: 'none',
                            borderRadius: '1.5625rem',
                            padding: isMobile ? '0 1rem' : '0 4rem', // 16px to rem or 64px to rem
                            bgcolor: value === 2 ? 'text.white' : 'transparent',
                            color: value === 2 ? 'primary.main' : 'text.grey',
                            '&:focus': {
                                border: 'none',
                                outline: 'none',
                            },
                            '&.Mui-selected': {
                                border: 'none',
                                bgcolor: value === 2 ? 'text.white' : 'transparent',
                                color: value === 2 ? 'common.mainbg' : 'text.grey',
                            },
                        }}
                        label="Details"
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
