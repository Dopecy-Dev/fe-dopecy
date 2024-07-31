import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import darkoff from '../../assets/images/darkoff.svg'
import darkon from '../../assets/images/darkon.svg'
import lightoff from '../../assets/images/lightoff.svg'
import lighton from '../../assets/images/lighton.svg'

function DarkLightSwitch() {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <Box
            sx={{
                bgcolor: 'common.darklightbg',
                p: 0.5,
                borderRadius: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer', // to indicate it's clickable
            }}
            onClick={toggleMode}
        >
            <Grid
                container
                spacing={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid item>
                    <Box
                        sx={{
                            bgcolor: isLightMode ? 'primary.main' : 'common.darklightbg',
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
                            bgcolor: !isLightMode ? 'primary.main' : 'common.darklightbg',
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
        </Box>
    );
}

export default DarkLightSwitch;
