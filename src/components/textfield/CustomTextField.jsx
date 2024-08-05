import React from 'react';
import { TextField } from '@mui/material';

function CustomTextField(props) {
    return (
        <TextField
            {...props}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        // borderColor: 'common.mainborder', // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'common.mainbg', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'common.mainbg', // Focus border color
                    },
                    '&.Mui-focused.Mui-error fieldset': {
                        borderColor: 'error.main', // Error focus border color
                    },
                },
                // '& .MuiOutlinedInput-notchedOutline': {
                //     '&:hover': {
                //         borderColor: 'common.hoverborder',
                //     },
                //     '&:focus': {
                //         borderColor: 'common.focusedborder',
                //     },
                // },
            }}
        />
    );
}

export default CustomTextField;
