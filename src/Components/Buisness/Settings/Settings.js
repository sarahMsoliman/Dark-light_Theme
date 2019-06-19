import React, { Component } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Settings.css'

class Settings extends Component {
    render () {
        return (
            <div className="settingsWrapper container">
                <div className="settingsWrapper__themeSwitcher">
                    <ThemeSwitcher />
                </div>
            </div>
        )
    }
}

export default Settings