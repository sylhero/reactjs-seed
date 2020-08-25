import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LOCALSTORAGE_USER_KEY = 'LOCALSTORAGE_USER_KEY';
const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || false;
    return (
        // eslint-disable-next-line arrow-body-style
        <Route
            {...rest}
            // eslint-disable-next-line arrow-body-style
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
