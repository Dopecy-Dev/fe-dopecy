import { Box, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CustomTypography from '../../components/typography/CustomTypography';
import Header from '../../layout/Header/Header';
import ContainedButton from '../../components/buttons/ContainedButton';
import verifycode from '../../assets/images/verifycode.svg';
import { useNavigate } from 'react-router-dom';

function VerifyCode() {
    const [code, setCode] = useState(new Array(6).fill(''));
    const [codeError, setCodeError] = useState('');
    const [countdown, setCountdown] = useState(300); // 5 minutes countdown

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [countdown]);

    const handleChange = (e, index) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);

        if (e.target.value.length === 1 && index < 5) {
            document.getElementById(`code-input-${index + 1}`).focus();
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate code
        if (code.includes('')) {
            setCodeError("Please enter the complete 6-digit code.");
            return;
        } else {
            setCodeError("");
        }

        // Handle verify logic here
        const verificationCode = code.join('');
        console.log('Verification Code:', verificationCode);

        navigate("/");
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <>
            <Header />
            <Grid container spacing={8} sx={{ flex: 1, p: '2rem' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ p: '2rem', width: '100%', maxWidth: '25rem' }}>
                        <CustomTypography
                            text='One-Time Password'
                            style={{
                                fontWeight: '600',
                                fontSize: '2.1875rem', // 35px to rem
                                lineHeight: '1.75rem', // 28px to rem
                                color: 'text.primary',
                                mb: '1.5rem' // 24px to rem
                            }}
                        />
                        <CustomTypography
                            text='Please enter the one-time password to verify your account that was sent to your email.'
                            style={{
                                fontWeight: '400',
                                fontSize: '1.125rem', // 18px to rem
                                lineHeight: '1.75rem', // 28px to rem
                                color: 'text.primary',
                                mb: '2rem' // 32px to rem
                            }}
                        />
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', p: 0 }}>
                                {code.map((digit, index) => (
                                    <Grid item key={index} xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TextField
                                            id={`code-input-${index}`}
                                            inputProps={{
                                                maxLength: 1,
                                                style: {
                                                    textAlign: 'center',
                                                    color: '#326039',
                                                    fontSize: '1.5rem', // 24px to rem
                                                    fontWeight: '400'
                                                }
                                            }}
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            error={!!codeError}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        border: 'none', // Remove default border
                                                    },
                                                    '&:hover fieldset': {
                                                        border: 'none', // Remove hover effect border
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: 'none', // Remove focus effect border
                                                    },
                                                },
                                                borderBottom: '0.3125rem solid', // 5px to rem
                                                borderColor: 'primary.main',
                                                textAlign: 'center',
                                                width: '3rem', // Adjust width to ensure consistent spacing
                                            }}
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    {codeError && (
                                        <CustomTypography
                                            text={codeError}
                                            style={{ color: 'red', mt: '0.5rem' }} // 8px to rem
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <ContainedButton
                                        style={{ width: '20%', height: '3rem', borderRadius: '0.375rem', mt: '1rem' }} // 48px to rem
                                        text='Verify'
                                        type="submit"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTypography
                                        text={`Resend code in ${formatTime(countdown)}`}
                                        style={{ fontWeight: '400', fontSize: '1rem', lineHeight: '1.75rem', color: 'text.primary' }} // 16px to rem
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box component="img" src={verifycode} alt="verifycode" sx={{ width: '100%', maxWidth: '20rem' }} />
                </Grid>
            </Grid>
        </>
    );
}

export default VerifyCode;
