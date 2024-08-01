// src/components/DarkLightSwitch.jsx
import { Box, Grid } from '@mui/material';
import React from 'react';
import darkoff from '../../assets/images/darkoff.svg';
import darkon from '../../assets/images/darkon.svg';
import lightoff from '../../assets/images/lightoff.svg';
import lighton from '../../assets/images/lighton.svg';
import { useTheme } from '../../contexts/ThemeContext';

function DarkLightSwitch() {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme from context

    const isLightMode = theme === 'light';

    return (
        <Box
            sx={{
                bgcolor: isLightMode ? 'common.darklightbg' : '#EAEAEA',
                p: 0.2,
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer', // to indicate it's clickable
            }}
            onClick={toggleTheme} // Use toggleTheme from context
        >
            <Grid
                container
                spacing={{ sm: 1, md: 2 }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid item>
                    <Box
                        sx={{
                            bgcolor: isLightMode ? 'common.mainbg' : 'common.darklightbg',
                            borderRadius: '1.5rem',
                            p: 0.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        component={'img'}
                        src={isLightMode ? lighton : lightoff}
                        alt='light-mode'
                    />
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            bgcolor: !isLightMode ? 'common.mainbg' : 'common.darklightbg',
                            borderRadius: '1.5rem',
                            p: 0.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        component={'img'}
                        src={isLightMode ? darkoff : darkon}
                        alt='dark-mode'
                    />
                </Grid>
            </Grid>
        </Box >
    );
}

export default DarkLightSwitch;
