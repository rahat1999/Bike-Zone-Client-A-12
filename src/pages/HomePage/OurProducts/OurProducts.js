import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OurProduct from '../OurProduct/OurProduct';

const OurProducts = () => {
    const [ourProducts, setOurProducts] = useState([]);
    // console.log(ourProducts);
    useEffect(() => {
        fetch('https://desolate-ridge-72025.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setOurProducts(data))
    }, [])

    return (
        <>

            <div>
                <Box sx={{ flexGrow: 1, my: 13 }}>
                    <Typography sx={{ textAlign: 'center', color: 'tomato', fontWeight: 600, textShadow: "1px 1px 1px black" }} variant="h4" >
                        Our Products
                    </Typography>
                    <hr style={{ width: "30%", margin: "auto", padding: '1.5px', }} />
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            {
                                ourProducts.map(product =>
                                    <Grid key={product._id} item xs={12} md={4} >
                                        <OurProduct
                                            product={product}
                                        ></OurProduct>
                                    </Grid>)
                            }
                        </Grid>
                    </Container>
                </Box>
            </div>

        </>
    );
};

export default OurProducts;