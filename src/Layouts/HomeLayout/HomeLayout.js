import React, { Component } from 'react'
import Home from '../../Components/Buisness/Home/Home';

class HomeLayout extends Component {
    render() {
        return (
            <Home currentTheme={this.props.currentTheme}/>
        );
    }
}
export default HomeLayout; 