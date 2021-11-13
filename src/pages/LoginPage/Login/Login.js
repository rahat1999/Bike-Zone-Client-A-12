import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
    const {
        user, isLoading, errorMsg, loginWithGoogle,
        loginWithEmailAndPassword, } = useAuth()
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const handleOneChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handaleLoginSubmit = (e) => {
        loginWithEmailAndPassword(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    /* =======google ==========*/
    const handleGoogleLogin = (e) => {
        loginWithGoogle(location, history)
        e.preventDefault()
    }
    return (
        <Container sx={{ mt: 16, }}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', }}>

                    <Box sx={{ backgroundColor: "#CCD1D1", py: 5, borderRadius: "10px" }}>
                        <Typography variant="h4"
                            sx={{
                                textAlign: 'center',
                                color: 'tomato',
                                fontWeight: 600,
                                textShadow: "1px 1px 3px black"
                            }}>
                            Please Login
                        </Typography>

                        {isLoading && <Box> <LinearProgress /> </Box>}

                        {
                            !isLoading && <form onSubmit={handaleLoginSubmit}>
                                <TextField
                                    required
                                    sx={{ width: '50%', m: 1, }}
                                    id="standard-basic"
                                    label=" Your Email"
                                    onChange={handleOneChange}
                                    name="email"
                                    type="email"
                                    variant="standard" />
                                <TextField
                                    sx={{
                                        width: '50%', m: 1,
                                    }}
                                    id="standard-basic"
                                    type='password'
                                    name="password"
                                    onChange={handleOneChange}
                                    label=" Your Password"
                                    variant="standard" />
                                <br />
                                <Button variant="contained" type="submit" sx={{ width: '20%', m: 1, backgroundColor: '#1BB7E1' }}>LogIn</Button>
                            </form>}

                        {
                            user?.email &&
                            <Alert sx={{ width: "40%", mx: 'auto' }}>You are Login Successfully!</Alert>
                        }
                        {
                            errorMsg && <Alert severity="error" sx={{ width: "40%", mx: 'auto' }}>{errorMsg}</Alert>
                        }
                        <NavLink to='/register'>
                            <Button variant='text' sx={{ width: '65%', m: 1 }} >Are You New user?Please Register</Button>
                        </NavLink>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button onClick={handleGoogleLogin} variant="contained" color="warning">Google Login</Button>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
