import { Alert, Button } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth()
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://desolate-ridge-72025.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                    reset()
                }
                else {
                    alert('This email is admin or Make Sure the email or  register in this website')
                }
            })
    };


    return (
        <Box sx={{ textAlign: 'center', my: 20 }}>
            <Container style={{ backgroundColor: "#CCD1D1", padding: '40px 0' }}>
                <Typography sx={{ color: 'tomato', fontWeight: 600, textShadow: "1px 1px 1px black", mb: 4 }} variant="h4" >
                    Make Admin
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        style={{ width: "50%", margin: 'auto', padding: '5px  0' }}
                        placeholder="Enter the
                        Email of the person you want to make admin " {...register("email")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <Button
                        sx={{ my: 2 }}
                        variant="contained"
                        color="warning"
                        type='submit'> Make Admin</Button>
                </form>

                {
                    success ? <Alert sx={{ width: '30%', m: 'auto' }} severity="success">Admin make Successfully</Alert> : " "
                }
            </Container>
        </Box>
    );
};

export default MakeAdmin;