import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Rating from '@mui/material/Rating';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AllReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://desolate-ridge-72025.herokuapp.com/coustomerReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 12 }}>
                <Typography variant="h4" sx={{
                    my: 2,
                    textAlign: 'center',
                    color: 'tomato',
                    fontWeight: 600,
                    textShadow: "1px 1px 1px black"
                }}>
                    Customers Review
                </Typography>
                <hr style={{ width: "40%", margin: "auto", padding: '1.5px', }} />
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    {
                        reviews?.map(review =>
                            <Grid key={review._id} item xs={12} md={12}>
                                <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "space-around" }}>
                                                <Box>
                                                    <AssignmentIndIcon sx={{ fontSize: "3rem", color: "tomato" }} />
                                                    <br />
                                                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                                        {review.name}
                                                    </Typography>
                                                    <Typography variant="text">
                                                        {review.email}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                                                        <Rating name="read-only" value={review?.rating} readOnly />
                                                    </Typography>
                                                    <Typography variant="text">
                                                        {review.date}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <RateReviewRoundedIcon />
                                            <br />
                                            <Typography variant="text" style={{ textAlign: "start" }}>
                                                {review.massage}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AllReview;