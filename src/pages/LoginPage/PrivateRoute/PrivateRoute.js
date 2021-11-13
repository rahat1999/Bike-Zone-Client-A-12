import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Box sx={{ textAlign: "center", mt: 5 }}> <LinearProgress sx={{ my: 15 }} color="secondary" /></Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );

};

export default PrivateRoute;