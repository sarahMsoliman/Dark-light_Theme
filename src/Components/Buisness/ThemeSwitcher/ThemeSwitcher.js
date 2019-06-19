import React, { Component } from 'react'
import Switch from "react-switch";
import { setLocalStorage, getLocalStorage } from '../../../Utilities/LocalStorage/LocalStorage'

class ThemeSwitcher extends Component {

    constructor(props) {
        super();
        var currentTheme = props.currentTheme
        this.state = {
            checked: getLocalStorage()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({
            checked
        }, () => {
            setLocalStorage(this.state.checked);
        }
        );
    }

    render() {
        return (
            <label>
                <span>Dark Theme</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        )
    }
}

export default ThemeSwitcher