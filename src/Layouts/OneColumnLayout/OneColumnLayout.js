import React, { Component } from 'react'

class HomeLayout extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}
export default HomeLayout; 