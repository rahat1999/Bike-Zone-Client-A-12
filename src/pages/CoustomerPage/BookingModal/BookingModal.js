import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const inputStyle = {
    width: "55%",
    margin: '5px',
    height: '2.4rem'
}


const BookingModal = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams()
    const [booking, setBooking] = useState({})
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://desolate-ridge-72025.herokuapp.com/bookigProduct/${id}`)
            .then(res => res.json())
            .then(getData => setBooking(getData))
    }, [id])

    const onSubmit = data => {
        data.date = new Date().toLocaleDateString()
        data.status = 'pending...'
        data.productName = booking.name
        data.price = booking.price
        fetch('https://desolate-ridge-72025.herokuapp.com/coustomerOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(`Your Order ${data?.productName} Done`)
                    reset()
                };
            })
    };


    return (
        <div>
            <Box sx={{ flexGrow: 1, my: 12 }}>
                <Typography sx={{ textAlign: 'center', color: 'tomato', fontWeight: 600, textShadow: "1px 1px 1px black", mb: 2 }} variant="h4" >
                    Pleace Order From here
                </Typography>
                <hr style={{ width: "30%", margin: "auto", padding: '1.5px', marginBottom: "30px" }} />
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>

                            <Item>
                                <Box>
                                    <CardMedia
                                        style={{ width: "280px", height: "180px", margin: 'auto' }}
                                        component="img"
                                        height="140"
                                        image={booking.img}
                                        alt="green iguana"
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" sx={{ fontWeight: 500 }} component="div">
                                        {booking?.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        price: {booking?.price}$
                                    </Typography>
                                    <hr />
                                    <Typography variant="body2" color="text.secondary">
                                        {booking.details}
                                    </Typography>
                                </CardContent>

                            </Item>

                        </Grid>
                        <Grid item xs={12} md={6} sx={{ height: "100%" }}>

                            <Item>
                                <Typography sx={{ textAlign: 'center', color: 'tomato', fontWeight: 600, my: 2 }} variant="h6" >
                                    OrderId: {id}
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input readOnly style={inputStyle} value={user.displayName} {...register("name")} required />
                                    <input readOnly style={inputStyle} value={user?.email} {...register("email")} required />

                                    <input style={inputStyle} value={booking?.name} {...register("productName")} />

                                    <input style={inputStyle} value={`${booking?.price}$`} {...register("price")} required />

                                    <input style={inputStyle} placeholder="Delivery address" {...register("address")} required />

                                    <input style={inputStyle} type="number" placeholder="Phone Number" {...register("phone")} required />

                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <br />
                                    <Button
                                        style={{ width: "40%" }}
                                        type="submit" variant="contained"
                                        color="warning">
                                        Place Order
                                    </Button>

                                </form>
                            </Item>
                        </Grid>

                    </Grid>
                </Container>
                <Box sx={{ textAlign: 'center', my: 2 }}>
                    <NavLink style={{ textDecoration: "none" }} to="/explore">
                        <Button
                            style={{ width: "30%", margin: 'auto' }}
                            variant="contained"
                            color="primary">
                            Go Back</Button>
                    </NavLink>
                </Box>
            </Box>
        </div >
    );
};

export default BookingModal;

