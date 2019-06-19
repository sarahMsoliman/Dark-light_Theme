import React from 'react'
import { Route } from 'react-router-dom'
import Settings from '../../Components/Buisness/Settings/Settings';

const SettingsLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <Settings>
                <Component {...matchProps} />
            </Settings>
        )} />
    )
};

export default SettingsLayout;

