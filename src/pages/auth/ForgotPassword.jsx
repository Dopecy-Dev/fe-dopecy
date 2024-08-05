import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import forgotimage from '../../assets/images/forgotimage.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import Header from '../../layout/Header/Header';
import ContainedButton from '../../components/buttons/ContainedButton';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/textfield/CustomTextField';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate email
        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
            return;
        } else {
            setEmailError("");
        }

        // Handle login logic here
        console.log('Email:', email);

        navigate("/verifycode");
    };

    return (
        <>
            <Header />
            <Grid container spacing={4} sx={{ p: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' } }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: { xs: 'center', md: 'left' } }}>
                    <CustomTypography
                        text='Forgot Your Password?'
                        style={{
                            fontWeight: '600',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.1875rem' }, // Responsive font size
                            lineHeight: { xs: '1.5rem', sm: '1.75rem', md: '1.75rem' }, // Responsive line height
                            color: 'text.primary',
                            mb: { xs: '1rem', sm: '1.5rem', md: '2rem' } // Responsive margin bottom
                        }}
                    />
                    <CustomTypography
                        text='Don’t worry. We’ll reset your password and send you a link to create a new one'
                        style={{
                            fontWeight: '400',
                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.125rem' }, // Responsive font size
                            lineHeight: { xs: '1.5rem', sm: '1.75rem', md: '1.75rem' }, // Responsive line height
                            color: 'text.primary',
                            mb: { xs: '1rem', sm: '1.5rem', md: '2rem' } // Responsive margin bottom
                        }}
                    />
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', p: { xs: '0.5rem', sm: '1rem' } }}>
                            <Grid item xs={12} sm={9}>
                                <CustomTextField
                                    placeholder='Enter Your email'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!emailError}
                                    helperText={emailError}
                                    sx={{ height: { xs: '2.5rem', sm: '3rem' } }} // Responsive height
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <ContainedButton
                                    style={{ height: { xs: '2.5rem', sm: '3rem' }, borderRadius: '0.375rem', padding: { xs: '0.5rem 1rem', sm: '0.5rem 1.5rem' } }} // Responsive height and padding
                                    text='Submit'
                                    type="submit"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component="img" src={forgotimage} alt="forgotimage" sx={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
            </Grid>
        </>
    );
}

export default ForgotPassword;
