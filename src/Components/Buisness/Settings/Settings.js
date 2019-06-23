import React, { Component } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Settings.css'
import {  getLocalStorage } from '../../../Utilities/LocalStorage/LocalStorage'

class Settings extends Component {
    render () {
        return (
            <div className={getLocalStorage('theme') === 'dark'? "settingsWrapper container-fluid darkTheme" : "settingsWrapper container-fluid"}>
                <h1>Settings</h1>
                <div className="settingsWrapper__themeSwitcher">
                    <ThemeSwitcher updateAppState={this.props.updateAppState}/>
                </div>
            </div>
        )
    }
}

export default Settings