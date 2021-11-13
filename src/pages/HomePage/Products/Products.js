import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://desolate-ridge-72025.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container className="my-5">
            <Box sx={{ flexGrow: 1, my: 10 }}>
                <Typography sx={{ textAlign: 'center', color: 'tomato', fontWeight: 600, textShadow: "1px 1px 1px black" }} variant="h4" >
                    Our Products
                </Typography>
                <hr style={{ width: "30%", margin: "auto", padding: '1.5px', }} />
                <Container>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        {
                            products.slice(0, 6).map(product =>
                                <Grid key={product._id} item xs={12} md={4} >
                                    <Product product={product} ></Product>
                                </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
};

export default Products;