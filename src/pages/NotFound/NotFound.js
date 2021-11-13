import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import not from '../../images/404.png'

const bgPhoto = {
    background: `url(${not})`,
    height: "100vh",
    backgroundSize: "cover"
}
const NotFound = () => {
    return (
        <div style={bgPhoto}>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <NavLink to="/">
                    <Button sx={{ width: "40%" }} color="warning" variant="contained">Go Home</Button>
                </NavLink>
            </Box>
        </div>
    );
};

export default NotFound;