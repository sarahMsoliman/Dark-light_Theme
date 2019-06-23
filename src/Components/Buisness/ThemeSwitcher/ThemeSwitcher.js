import React, { Component } from 'react'
import Switch from "react-switch";
import './ThemeSwitcher.css'
import { setLocalStorage, getLocalStorage } from '../../../Utilities/LocalStorage/LocalStorage'

class ThemeSwitcher extends Component {

    constructor() {
        super();
        this.state = {
            checked: this.checkThemeValue()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    checkThemeValue(){
        var currentTheme = getLocalStorage('theme');
        return currentTheme === 'dark'? true : false
    }

    handleChange(checked) {
        this.setState({
            checked
        }, () => {
            var updatedTheme = this.state.checked === true ? 'dark' : 'light';
            setLocalStorage('theme', updatedTheme);     
            this.props.updateAppState();                                                                                                                                                                                            
            
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