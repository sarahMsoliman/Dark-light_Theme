import React, { Component } from 'react'

class ListsLayout extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}
export default ListsLayout; 
