import React, { Component } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Settings.css";
import TwoColumnLayout from "../../../Layouts/TwoColumnLayout/TwoColumnLayout";

class Settings extends Component {
  render() {
    return (
      <TwoColumnLayout
        children={
          <div className="settingsWrapper container">
            <h1>Settings</h1>
            <div className="settingsWrapper__themeSwitcher">
              <ThemeSwitcher updateAppState={this.props.updateAppState} />
            </div>
          </div>
        }
      />
    );
  }
}

export default Settings;
