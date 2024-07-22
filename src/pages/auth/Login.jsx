import { Box, Grid, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginbg from '../../assets/images/loginbg.svg';
import CustomTypography from '../../components/typography/CustomTypography';
import LogoLight from '../../components/logos/LogoLight';
import LogoLoginScreen from '../../components/logos/LogoLoginScreen';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <Box>
            <Grid container>
                <Grid item xs={7.5}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100vh',
                            backgroundImage: `url(${loginbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100vh',
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
                                        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
                <Grid item xs={4.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '80%', maxWidth: 400 }}>
                        <Typography variant="h4" component="h2" align="center" gutterBottom>
                            Login
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            Nice To See You Again
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                                label="Remember me"
                                sx={{ display: 'flex', alignItems: 'center' }}
                            />
                            <Typography variant="body2" component="span" sx={{ marginLeft: 'auto' }}>
                                Forgot password?
                            </Typography>
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                                Login
                            </Button>
                            <Typography variant="body2" align="center" sx={{ mt: 2, textDecoration: 'underline' }}>
                                Join Dopecy Delivery
                            </Typography>
                            <Box sx={{ display: "flex", my: 1, alignItems: "center", justifyContent: 'space-between' }}>
                                <Box sx={{ width: "30%", height: "2px", bgcolor: "#b7a3a3" }}></Box>
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        color: "#b7a3a3",
                                        mx: 1,
                                    }}
                                >
                                    Or Continue with
                                </Typography>
                                <Box sx={{ width: "30%", height: "2px", bgcolor: "#b7a3a3" }}></Box>
                            </Box>
                            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                Or Continue with
                            </Typography>
                            <Button fullWidth variant="outlined" color="primary" sx={{ mt: 1 }}>
                                Sign In with Google
                            </Button>
                            <Button fullWidth variant="outlined" color="primary" sx={{ mt: 1 }}>
                                Sign In with Facebook
                            </Button>
                            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                Don't have an account? <a href="#">Sign Up Now</a>
                            </Typography>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
