import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import SettingsLayout from './Layouts/SettingsLayout/SettingsLayout';
import ListsLayout from './Layouts/ListsLayout/ListsLayout';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/home" render={()=><HomeLayout />} exact />
                        <Route path="/settings" render={() => <SettingsLayout />} exact />
                        <Route path="/toDoList" render={() => <ListsLayout />} exact />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        ); 
    }
}
export default Router