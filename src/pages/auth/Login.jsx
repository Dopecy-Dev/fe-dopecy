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
import CustomTextField from '../../components/textfield/CustomTextField';

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

        navigate("/");
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default' }}>
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
                                p: { xs: '1rem', md: '2rem' }, // Responsive padding
                            }}
                        >
                            <Grid container spacing={4} sx={{ alignItems: 'start' }}>
                                <Grid item>
                                    <LogoLoginScreen />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTypography
                                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: { xs: '1.25rem', md: '1.625rem' }, // Responsive font size
                                            lineHeight: '2.25rem',
                                            color: 'text.white',
                                            textAlign: 'left',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '1rem', sm: '1.5rem' }, bgcolor: 'background.paper' }}>
                    <Box sx={{ width: '100%', maxWidth: '25rem' }}>
                        <CustomTypography
                            text='Login'
                            style={{
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '1.75rem' : '2.1875rem', // Responsive font size
                                lineHeight: '2.25rem',
                                textAlign: 'left',
                                color: 'text.primary',
                                mb: { xs: '1rem', md: '1.5rem' } // Responsive margin bottom
                            }}
                        />
                        <CustomTypography
                            text='Nice To See You Again'
                            style={{
                                fontWeight: '400',
                                fontSize: isSmallScreen ? '1rem' : '1.125rem', // Responsive font size
                                lineHeight: '1.75rem',
                                textAlign: 'left',
                                color: 'text.primary',
                                mb: { xs: '1rem', md: '1.5rem' } // Responsive margin bottom
                            }}
                        />
                        <form onSubmit={handleSubmit}>
                            <CustomTypography
                                text='Email'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem', // 14px to rem
                                    lineHeight: 0,
                                    textAlign: 'left',
                                    color: 'text.primary',
                                    pl: '0.5rem' // 8px to rem
                                }}
                            />
                            <CustomTextField
                                placeholder='Email or phone number'
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: '2rem' }} // 16px to rem
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <CustomTypography
                                text='Password'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.875rem', // 14px to rem
                                    lineHeight: 0,
                                    textAlign: 'left',
                                    color: 'text.primary',
                                    pl: '0.5rem' // 8px to rem
                                }}
                            />
                            <CustomTextField
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
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                    color: 'text.main',
                                                    '&:hover': {
                                                        backgroundColor: 'text.main' + '26', // Adjust hover color
                                                    },
                                                },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                    backgroundColor: 'text.main',
                                                },
                                            }}
                                        />
                                    }
                                    label="Remember me"
                                    sx={{ display: 'flex', alignItems: 'center', color: 'text.primary' }}
                                />
                                <Link to='/forgot-password'>
                                    <CustomTypography
                                        text='Forgot password?'
                                        style={{
                                            fontWeight: '400',
                                            fontSize: '0.75rem', // 12px to rem
                                            lineHeight: '1.25rem', // 20px to rem
                                            color: 'text.primary',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            },
                                        }}
                                    />
                                </Link>
                            </Box>
                            <ContainedButton
                                style={{ height: '2.5rem', borderRadius: '0.375rem', padding: '0.625rem 1.5rem' }} // 40px to rem
                                text='Login'
                                type="submit"
                                fullWidth
                            />
                            <CustomTypography
                                text='Join Dopecy Delivery'
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.9375rem', // 15px to rem
                                    lineHeight: '1.25rem', // 20px to rem
                                    color: 'text.main',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    my: '1.5rem' // 24px to rem
                                }}
                            />
                            <Box sx={{ display: "flex", my: '1.5rem', alignItems: "center", justifyContent: 'space-between' }}> {/* 24px to rem */}
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                                <CustomTypography
                                    text='Or Continue with'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '0.9375rem', // 15px to rem
                                        lineHeight: '1.25rem', // 20px to rem
                                        color: 'text.graytextB3',
                                        cursor: 'pointer'
                                    }}
                                />
                                <Box sx={{ width: "30%", height: "1px", bgcolor: "text.graytextB3" }}></Box>
                            </Box>
                            <OutlinedButton
                                style={{ height: '2.5rem', borderRadius: '0.375rem', padding: '0.625rem 1.5rem', mb: '1rem' }} // 40px to rem
                                text='Sign In with Google'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: '0.5rem' }} component={'img'} src={googleicon} alt='googleicon' />} // 8px to rem
                            />
                            <OutlinedButton
                                style={{ height: '2.5rem', borderRadius: '0.375rem', padding: '0.625rem 1.5rem', mb: '1rem' }} // 40px to rem
                                text='Sign In with Facebook'
                                type="submit"
                                fullWidth
                                leftimage={<Box sx={{ mr: '0.5rem' }} component={'img'} src={facebookicon} alt='facebookicon' />} // 8px to rem
                            />
                        </form>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '3rem' }}> {/* 48px to rem */}
                            <CustomTypography
                                text="Don't have an account?"
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.75rem', // 12px to rem
                                    lineHeight: '1.25rem', // 20px to rem
                                    color: 'text.primary',
                                    mr: '0.25rem' // 4px to rem
                                }}
                            />
                            <Link to='/signup'>
                                <CustomTypography
                                    text='Sign Up Now'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '0.75rem', // 12px to rem
                                        lineHeight: '1.25rem', // 20px to rem
                                        color: 'text.main',
                                        cursor: 'pointer',
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* 24px to rem */}
                            <CustomTypography
                                text="Want to sell on DOPECY?"
                                style={{
                                    fontWeight: '400',
                                    fontSize: '0.75rem', // 12px to rem
                                    lineHeight: '1.25rem', // 20px to rem
                                    color: 'text.primary',
                                    mr: '0.25rem' // 4px to rem
                                }}
                            />
                            <Link to='/seller-signup'>
                                <CustomTypography
                                    text='Become a seller'
                                    style={{
                                        fontWeight: '400',
                                        fontSize: '0.75rem', // 12px to rem
                                        lineHeight: '1.25rem', // 20px to rem
                                        color: 'text.main',
                                        cursor: 'pointer',
                                    }}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
