import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ManageProducts = () => {

    const [allProducts, setAllProducts] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://desolate-ridge-72025.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [control])

    const handleProducts = (id) => {
        const proced = window.confirm('Are tou sure selete the Order?')
        if (proced) {
            fetch(`https://desolate-ridge-72025.herokuapp.com/manageProducts/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        console.log(result);
                        alert(`Order No:${id} delete successFully`)
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }

        console.log(id);
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 12, mb: 1, fontWeight: 500, textShadow: "1px 1px 1px black", color: 'orange' }}>Manage Products</Typography>
            <hr style={{ width: '30%', margin: "auto", padding: "2px" }} />
            <Box sx={{ flexGrow: 1, mt: 7 }}>
                <Grid container spacing={2}>
                    {
                        allProducts.map(products =>
                            <Grid key={products._id} item xs={6} md={3}>
                                <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                    <Box>
                                        <CardMedia
                                            style={{ width: "150px", height: "100px", margin: 'auto' }}
                                            component="img"
                                            height="140"
                                            image={products.img}
                                            alt="green iguana"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ fontWeight: 400 }} component="div">
                                            {products.name}
                                        </Typography>
                                    </CardContent>
                                    <Button onClick={() => handleProducts(products._id)} variant="contained" color="warning"> <DeleteForeverOutlinedIcon />Delete</Button>
                                </Item>
                            </Grid>)
                    }


                </Grid>
            </Box>
        </Container>
    );
};

export default ManageProducts;