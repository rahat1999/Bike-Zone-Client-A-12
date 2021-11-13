import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [userRegister, setUserRegister] = useState({})
    const { user, errorMsg, registerWithEmailandPassword, isLoading } = useAuth()
    const history = useHistory()

    const handleOneBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserRegister = { ...userRegister }
        newUserRegister[field] = value;
        setUserRegister(newUserRegister)
    }

    const handaleLoginSubmit = (e) => {
        if (userRegister.password !== userRegister.password2) {
            alert('Your Password did not match')
            return;
        }
        console.log('register user ', userRegister);
        registerWithEmailandPassword(userRegister.email, userRegister.password, userRegister.name, history)
        e.preventDefault();
    }
    return (
        <Container sx={{ my: 9 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        mt: 8,
                        textAlign: 'center',
                        background: "#CCD1D1"
                    }}>

                    <Typography variant="h4"
                        sx={{
                            textAlign: 'center',
                            color: 'tomato',
                            fontWeight: 600,
                            textShadow: "1px 1px 3px black"
                        }}>
                        Please Register
                    </Typography>

                    {!isLoading && <form onSubmit={handaleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            required
                            label=" Your Name"
                            name="name"
                            onBlur={handleOneBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            required
                            label=" Your Email"
                            type="Email"
                            name="email"
                            onBlur={handleOneBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            required

                            name="password"
                            onBlur={handleOneBlur}
                            label=" Password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            required
                            name="password2"
                            onBlur={handleOneBlur}
                            label=" Re-Type Password"
                            variant="standard" />
                        <Button variant="contained" type="submit" sx={{ width: '50%', m: 1, backgroundColor: '#1BB7E1' }}>Register</Button>
                    </form>}

                    {isLoading && <Box>
                        <LinearProgress />
                    </Box>}
                    {
                        user.email ? <Alert severity="success" sx={{ width: "40%", mx: 'auto' }}> User Registered successfulley!</Alert>
                            : <NavLink to='/login'>
                                <Button variant='text' sx={{ width: '75%', m: 1 }} >Already Registered? Please Login</Button>
                            </NavLink>
                    }

                    {
                        errorMsg && <Alert severity="error">{errorMsg}</Alert>
                    }

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;