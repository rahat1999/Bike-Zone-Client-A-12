import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth()
    if (isLoading) {
        return <Box sx={{ textAlign: "center", mt: 13 }}> <LinearProgress color="secondary" /></Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            state: { from: location },
                            pathname: "/"

                        }}
                    />
                )
            }
        />
    );

};

export default AdminRoute;