import React from 'react';
import { Route, Redirect, generatePath } from 'react-router-dom';

const LOCALSTORAGE_USER_KEY = 'LUOBO_GAMES_KEY';
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
                        to={generatePath('/:id/login', {
                            id: props.match.params.id
                        })}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
