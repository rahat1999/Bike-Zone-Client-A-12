import React from 'react';
import banner from '../../../images/banner.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const bannerBg = {
    background: `url(${banner})`,
    height: "100vh",
    marginTop: "5rem"
}
const Banner = () => {
    return (
        <div style={bannerBg}>
            <Box style={{}} sx={{ flexGrow: 1, textAlign: 'center' }} >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mt: 5 }}>
                                <Typography sx={{ color: 'tomato', fontWeight: 600, textShadow: "1px 1px 2px white" }} variant="h2" >
                                    Bike Zone
                                </Typography>
                                <Typography sx={{ color: 'white', my: 2, textShadow: "1px 1px 1px tomato" }} variant="h4">
                                    Best & Luxury Bike Sales
                                </Typography>
                                <Typography sx={{ color: 'white' }} variant="h6">
                                    The most exciting Moto bike magazine of all time. digital, free and open-minded. Unbiased moto bike reviews and equipment tests. High quality mtb content.
                                </Typography>
                                <NavLink style={{ textDecoration: 'none' }} to="/explore">
                                    <Button sx={{ my: 4 }} variant="contained" color="warning">
                                        <ShoppingCartOutlinedIcon /> Buy now</Button>
                                </NavLink>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Banner;