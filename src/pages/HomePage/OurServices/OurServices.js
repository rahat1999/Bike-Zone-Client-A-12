import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import service from '../../../images/bikeservice.png'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OurServices = () => {
    return (
        <div>
            <Container sx={{ my: 13 }}>
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography sx={{ my: 2, color: "tomato", fontWeight: 600, textShadow: "1px 1px 1px black" }} variant="h4">
                        We Always Provide <br /> Best Services
                    </Typography>
                    <hr style={{ width: "40%", margin: "auto", padding: '1.5px', }} />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} sx={{}}>
                                <Grid item xs={12} md={6}>
                                    <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                        <Typography sx={{ color: "tomato", fontWeight: 500 }} variant="h5">Air Filter Cleaning</Typography>
                                        <hr />
                                        <Typography sx={{ fontWeight: 400 }} variant="h6">Work seals leak from normal wear and tear, age, and debris getting into the seals. Icausing corrosion and abrasion.  </Typography>

                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                        <Typography sx={{ color: "tomato", fontWeight: 500 }} variant="h5">
                                            Bike Wash
                                        </Typography>
                                        <hr />
                                        <Typography sx={{ fontWeight: 400 }} variant="h6"> Cleaning your bike regularly will help keep it running smoothly,and also gives you a chance to components a quick once over, </Typography>

                                    </Item>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                        <Typography sx={{ color: "tomato", fontWeight: 500 }} variant="h5">
                                            Cleaning Spark plugs</Typography>
                                        <hr />
                                        <Typography sx={{ fontWeight: 400 }} variant="h6"> Spark plugs are vital to making an engine run, so it’s important to keep them in clean working order. </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                        <Typography sx={{ color: "tomato", fontWeight: 500 }} variant="h5">Frock oil seal change</Typography>
                                        <hr />
                                        <Typography sx={{ fontWeight: 400 }} variant="h6"> While most of us wouldn’t hesitate to change the engine oil in our bikes every year, few of us consider the </Typography>
                                    </Item>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                style={{ width: "70%", height: 'auto', margin: 'auto' }}
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={service}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default OurServices;
