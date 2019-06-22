import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import SettingsLayout from './Layouts/SettingsLayout/SettingsLayout';
import ListsLayout from './Layouts/ListsLayout/ListsLayout';
import Header from './Components/Reusable/Header/Header'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
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