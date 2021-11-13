import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';

const inputStyle = {
    width: "60%",
    margin: '5px'
}
const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://desolate-ridge-72025.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Poroduct added successFully Done")
                    reset()
                };
            })

        console.log(data);
    };
    return (
        <div>
            <Container >
                <Box sx={{ flexGrow: 1, my: 13, }} >

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
                                Add A New Bike/Product
                            </Typography>
                            <hr style={{ width: "40%", margin: "auto", padding: '1.5px' }} />
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={inputStyle} placeholder="Enter Bike image url" {...register("img")} />
                                <input style={inputStyle} placeholder="Enter Bike Name" {...register("name")} />
                                <input style={inputStyle} placeholder="Enter Bike price" type="number" {...register("price")} required />

                                <textarea style={inputStyle}
                                    rows={6}
                                    placeholder="Bike specifications/details" {...register("details")} required />
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
            </Container >
        </div>
    );
};

export default AddProduct;