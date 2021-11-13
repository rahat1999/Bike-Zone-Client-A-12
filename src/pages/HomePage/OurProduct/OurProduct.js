import React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OurProduct = ({ product }) => {
    return (
        <div>

            <Box>
                <Item sx={{ boxShadow: "1px 1px 4px 1px gray" }}>
                    <Box>
                        <CardMedia
                            style={{ width: "300px", height: "180px", margin: 'auto' }}
                            component="img"
                            height="140"
                            image={product.img}
                            alt="green iguana"
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="h4" sx={{ fontWeight: 500 }} component="div">
                            {product.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {product.details.slice(0, 90)}
                        </Typography>
                    </CardContent>

                    <NavLink style={{ textDecoration: "none" }} to={`/plceOrder/${product._id}`}>
                        <Button variant="contained" color="warning">
                            <ShoppingCartOutlinedIcon />Buy now</Button>
                    </NavLink>


                </Item>
            </Box>

        </div>

    );
};

export default OurProduct;