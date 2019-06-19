import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../Components/Buisness/Home/Home';

const HomeLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <Home>
                <Component {...matchProps} />
            </Home>
        )} />
    )
};

export default HomeLayout;  