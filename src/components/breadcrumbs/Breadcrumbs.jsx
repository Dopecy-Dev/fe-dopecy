import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CustomTypography from '../typography/CustomTypography';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    <CustomTypography
                        text='Category'
                        style={{
                            fontWeight: '500',
                            fontSize: '18px',
                            lineHeight: '28px',
                            textAlign: 'left',
                            color: 'text.graytextB3',
                        }}
                    />
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <CustomTypography
                        text='Supplements'
                        style={{
                            fontWeight: '500',
                            fontSize: '18px',
                            lineHeight: '28px',
                            textAlign: 'left',
                            color: 'text.graytextB3',
                        }}
                    />
                </Link>
                <CustomTypography
                    text='Vitamin c'
                    style={{
                        fontWeight: '500',
                        fontSize: '18px',
                        lineHeight: '28px',
                        textAlign: 'left',
                        color: 'primary.main',
                    }}
                />
            </Breadcrumbs>
        </div>
    );
}
