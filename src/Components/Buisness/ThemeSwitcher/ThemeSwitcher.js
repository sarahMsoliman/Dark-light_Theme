import React, { Component } from 'react'
import Switch from "react-switch";
import './ThemeSwitcher.css'
import { setLocalStorage, getLocalStorage } from '../../../Utilities/LocalStorage/LocalStorage'

class ThemeSwitcher extends Component {

    constructor() {
        super();
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
            <label className="themeSwitcherLabel">
                <span>Dark Theme</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#dea5bb"/>
            </label>
        )
    }
}

export default ThemeSwitcher