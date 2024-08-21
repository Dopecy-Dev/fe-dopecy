import React from 'react';
import { Box, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const languages = [
    { code: 'en', name: 'English - EN', flag: '🇺🇸' },
    { code: 'es', name: 'Español - ES', flag: '🇪🇸' },
    { code: 'fr', name: 'Français - FR', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch - DE', flag: '🇩🇪' },
    { code: 'th', name: 'แบบไทย - TH', flag: '🇹🇭' },
    { code: 'hi', name: 'हिन्दी - HI', flag: '🇮🇳' },
    { code: 'el', name: 'ελληνικά - EL', flag: '🇬🇷' },
    { code: 'pt', name: 'Português - PT', flag: '🇵🇹' },
    { code: 'ar', name: 'عربي- AR', flag: '🇸🇦' },
];

export default function LanguageMenu({ anchorEl, handleClose, onLanguageSelect }) {
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'dopecy-studio-button',
            }}
            PaperProps={{
                sx: {
                    p: 1.5,
                    mt: '0.125rem', // 2px
                    width: {
                        // xs: '100%',
                        sm: 'auto',
                    },
                    borderRadius: '0.5rem', // 8px
                    boxShadow: '0px 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' // 4px 8px
                }
            }}
        >
            {/* Dynamic Language Options */}
            {languages.map((language, index) => (
                <MenuItem
                    key={index}
                    onClick={() => onLanguageSelect(language)} // Select the language
                    sx={{
                        fontSize: {
                            xs: '0.75rem', // 12px
                            sm: '0.875rem', // 14px
                            md: '1rem', // 16px
                        },
                        display: 'flex',
                        gap: 1,
                        py: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem' }, // 4px, 6px, 8px
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: isSmallScreen ? 'center' : 'left', // Responsive text alignment
                    }}
                >
                    <Box>
                        {language.flag}
                    </Box>
                    <Box>
                        {language.name}
                    </Box>
                </MenuItem>
            ))}
        </Menu>
    );
}
