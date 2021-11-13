import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 5, background: "black" }}>
            <Container>
                <Grid container spacing={2} sx={{ textAlign: "center" }}>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ textShadow: "1px 1px 1px white", color: 'tomato' }}>
                            ABOUT US
                        </Typography>
                        <Typography variant="text" sx={{ fontWeight: 500, color: "white" }}>
                            About Us
                            <br />                            Terms & Conditions
                            <br />
                            Privacy policy
                            <br />
                            Contact
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ textShadow: "1px 1px 1px white", color: 'tomato' }}>
                            🏍️ BIKE ZONE
                        </Typography>
                        <br />
                        <Typography variant="text" sx={{ fontWeight: 500, color: "white" }}>
                            Shop: Bosundhora,93/3
                            <br />
                            Trade: #004xy
                            <br />
                            Address: Dhaka,Bangladesh
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ textShadow: "1px 1px 1px white", color: 'tomato' }}>
                            FLOW US ON
                        </Typography>
                        <Typography variant="text" sx={{ fontWeight: 500, color: "white" }}>
                            <TwitterIcon />
                            <br />
                            <FacebookOutlinedIcon />
                            <br />
                            <InstagramIcon />
                            <br />
                            <LinkedInIcon />
                        </Typography>
                    </Grid>
                </Grid>
                <p className="text-center text-secondary py-2 fw-bold ">
                    Copyright  © 2021 by BIKE ZONE
                </p>
            </Container>
        </Box>
    );
};

export default Footer;