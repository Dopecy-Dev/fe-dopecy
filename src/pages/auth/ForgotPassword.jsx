import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import forgotimage from '../../assets/images/forgotimage.svg'
import CustomTypography from '../../components/typography/CustomTypography';
import Header from '../../layout/Header/Header';
import ContainedButton from '../../components/buttons/ContainedButton';
import { useNavigate } from 'react-router-dom';

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

        // Redirect to the "/congratulation" route after successful sign-up
        navigate("/verifycode");
    };


    return (
        <>
            <Header></Header>
            <Grid container spacing={8} sx={{ flex: 1, p: 8 }}>
                <Grid item xs={6} md={6} sx={{ alignContent: 'center', justifyContent: 'center' }}>
                    <CustomTypography
                        text='Forgot Your Password?'
                        style={{
                            fontWeight: '600',
                            fontSize: '35px',
                            lineHeight: '28px',
                            color: 'text.primary',
                            mb: 4
                        }}
                    />
                    <CustomTypography
                        text='Don’t worry. We’ll reset your password and send you a link to create a new one'
                        style={{
                            fontWeight: '400',
                            fontSize: '18px',
                            lineHeight: '28px',
                            color: 'text.primary',
                            mb: 8
                        }}
                    />
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', p: 2 }}>
                            <Grid item xs={9}>
                                <TextField
                                    // sx={{ height: '48px' }}
                                    placeholder='Enter Your email'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!emailError}
                                    helperText={emailError}
                                />

                            </Grid>
                            <Grid item xs={3}>

                                <ContainedButton
                                    style={{ height: '48px', borderRadius: '6px', p: '8px, 8px, 8px, 16px' }}
                                    text='Submit'
                                    type="submit"
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                    </form>


                </Grid>
                <Grid item xs={6} md={6}>
                    <Box component="img" src={forgotimage} alt="forgotimage" />
                </Grid>
            </Grid >
        </>
    );
}

export default ForgotPassword;
