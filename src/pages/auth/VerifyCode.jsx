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

        // Redirect to the "/congratulation" route after successful sign-up
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
            <Grid container spacing={8} sx={{ flex: 1, p: 8 }}>
                <Grid item xs={6} md={6} sx={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Box sx={{ p: 8 }}>

                        <CustomTypography
                            text='One - Time Password'
                            style={{
                                fontWeight: '600',
                                fontSize: '35px',
                                lineHeight: '28px',
                                color: 'text.primary',
                                mb: 4
                            }}
                        />
                        <CustomTypography
                            text='Please enter the one-time password to verify your account that was sent to your email.'
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
                                {code.map((digit, index) => (
                                    <Grid item key={index} xs={2}>
                                        <TextField
                                            id={`code-input-${index}`}
                                            inputProps={{
                                                maxLength: 1,
                                                style: {
                                                    textAlign: 'center',
                                                    color: '#326039',
                                                    fontSize: '24px',
                                                    fontWeight: '400'
                                                }
                                            }} value={digit}
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
                                                borderBottom: '5px solid',
                                                borderColor: 'primary.main',
                                                textAlign: 'center'
                                            }}
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    {codeError && (
                                        <CustomTypography
                                            text={codeError}
                                            style={{ color: 'red', mt: 2 }}
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <ContainedButton
                                        style={{ width: '20%', height: '48px', borderRadius: '6px', mt: 2 }}
                                        text='Verify'
                                        type="submit"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTypography
                                        text={`Resend code in ${formatTime(countdown)}`}
                                        style={{ fontWeight: '400', fontSize: '16px', lineHeight: '28px', color: 'text.primary' }}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box component="img" src={verifycode} alt="verifycode" />
                </Grid>
            </Grid>
        </>
    );
}

export default VerifyCode;
