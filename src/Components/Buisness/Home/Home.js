import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="homeWrapper container-fluid">
                <div className="homeWrapper__bckgrdImg" />
                <div className="homeWrapper__logo">
                    <div className="homeWrapper__logo__logoDiv">
                        <img
                            src={process.env.PUBLIC_URL + "/Images/logo2.png"}
                            alt="logo"
                        />
                    </div>
                    <Link to="/settings" type="button" className="btn homeWrapper__logo__button">Settings</Link>
                </div>
            </div>
        )
    }
}

export default Home