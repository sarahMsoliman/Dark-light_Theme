import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Buisness/Home/Home';
import Settings from './Components/Buisness/Settings/Settings';
import ToDoList from './Components/Buisness/ToDoList/ToDoList'
import Header from './Components/Reusable/Header/Header'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route path="/home" render={()=><Home />} exact />
                        <Route path="/settings" render={() => <Settings updateAppState={this.props.updateAppState}/>} exact />
                        <Route path="/toDoList" render={() => <ToDoList />} exact />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        ); 
    }
}
export default Router