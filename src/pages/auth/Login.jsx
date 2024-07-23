import { Box, Grid, TextField, FormControlLabel, Switch, IconButton, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import loginbg from '../../assets/images/loginbg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import LogoLoginScreen from '../../components/logos/LogoLoginScreen';
import ContainedButton from '../../components/buttons/ContainedButton';
import OutlinedButton from '../../components/buttons/OutlinedButton';

import googleicon from '../../assets/images/googleicon.svg';
import facebookicon from '../../assets/images/facebookicon.svg';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);

        // Redirect to the "/congratulation" route after successful sign-up
        navigate("/");


    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Grid container sx={{ flex: 1 }}>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${loginbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(0deg, #D1D1D1 20%, #093E11 100%)',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 0.7,
                                p: 8,
                            }}
                        >
                            <Grid container spacing={4} sx={{ flexDirection: 'column', alignItems: 'start' }}>
                                <Grid item>
                                    <LogoLoginScreen />
                                </Grid>
                                <Grid item xs={8}>
                                    <CustomTypography
                                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '26px',
                                            lineHeight: '36px',
                                            color: 'text.white',
                                            textAlign: 'left',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 } }}>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <CustomTypography
                            text='Login'
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '28px' : '35px',
                                lineHeight: '28px',
                                textAlign: 'left',
                                color: 'text.titleblack',
                                mb: 2
                            }}
                        />
                        <CustomTypography
                            text='Nice To See You Again'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '16px' : '18px',
                                lineHeight: '28px',
                                textAlign: 'left',
                                color: 'text.titleblack',
                                mb: 4
                            }}
                        />
                        <form onSubmit={handleSubmit}>
                            <CustomTypography
                                text='Email'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2
                                }}
                            />
                            <TextField
                                placeholder='Email or phone number'
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 4 }}
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <CustomTypography
                                text='Password'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '0px',
                                    textAlign: 'left',
                                    color: 'text.graybg3',
                                    pl: 2
                                }}
                            />
                            <TextField
                                placeholder='Enter password'
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                    }
                                    label="Remember me"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                />
                                <Link to='/forgotpassword'>
                                    <CustomTypography
                                        text='Forgot password?'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '20px',
                                            color: 'primary.main',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            },
                                        }}
                                    />
                                </Link>
                            </Box>
                            <ContainedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px' }}
                                text='Login'
                                type="submit"
                                fullWidth
                            />
                            <CustomTypography
                                text='Join Dopecy Delivery'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '15px',
                                    lineHeight: '12px',
                                    color: 'primary.main',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    my: 3
                                }}
                            />

                            <Box sx={{ display: "flex", my: 3, alignItems: "center", justifyContent: 'space-between' }}>
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                                <CustomTypography
                                    text='Or Continue with'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '15px',
                                        lineHeight: '20px',
                                        color: 'text.graytextB3',
                                        cursor: 'pointer'
                                    }}
                                />
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                            </Box>

                            <OutlinedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px', mb: 2 }}
                                text='Sign In with Google'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: 2 }} component={'img'} src={googleicon} alt='googleicon' />}
                            />

                            <OutlinedButton
                                style={{ height: '40px', borderRadius: '6px', p: '10px, 24px, 10px, 24px', mb: 2 }}
                                text='Sign In with Facebook'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: 2 }} component={'img'} src={facebookicon} alt='facebookicon' />}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 6 }}>

                                <CustomTypography
                                    text="Don't have an account?"
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '12px',
                                        lineHeight: '20px',
                                        color: 'text.titleblack',
                                        mr: 0.5
                                    }}
                                />
                                <Link to='/signup'>
                                    <CustomTypography
                                        text='Sign Up Now'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '20px',
                                            color: 'primary.main',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
