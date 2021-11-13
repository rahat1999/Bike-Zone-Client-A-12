import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
const inputStyle = {
    width: "60%",
    margin: '5px'
}

const CoustomerReview = () => {
    const { user } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.date = new Date().toLocaleDateString()
        if (isNaN(data.rating) || data.rating < 0 || data.rating > 5) {
            alert('Plese Given a number from 1 to 5')
            return;
        }
        fetch('https://desolate-ridge-72025.herokuapp.com/coustomerReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your Review Done")
                    reset()
                };
            })
    };

    return (
        <>
            <Container >
                <Box sx={{ flexGrow: 1, my: 16, }} >

                    <Grid container
                        style={{ backgroundColor: "#CCD1D1", padding: '30px 0' }}
                        spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                            <Typography variant="h4"
                                sx={{
                                    textAlign: 'center',
                                    color: 'tomato',
                                    fontWeight: 600,
                                    textShadow: "1px 1px 3px black"
                                }}>
                                Please Give Your Feedback
                            </Typography>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={inputStyle} value={user?.displayName} {...register("name")} />
                                <input style={inputStyle} value={user?.email} {...register("email")} />
                                <input style={inputStyle} placeholder="Give rating"
                                    type="number" {...register("rating")} required />
                                <textarea style={inputStyle}
                                    rows={4}
                                    placeholder="Give Your Feedback/Review" {...register("massage")} required />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <Button
                                    style={{ width: "40%" }}
                                    type="submit" variant="contained"
                                    color="warning">
                                    Submit</Button>

                            </form>
                        </Grid>

                    </Grid>
                </Box>
            </Container ></>
    );
};

export default CoustomerReview;