import React, { Component } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

class Settings extends Component {
    render () {
        return (
            <div className="settingsWrapper">
                <div className="settingsWrapper__themeSwitcher">
                    <ThemeSwitcher />
                </div>
            </div>
        )
    }
}

export default Settings