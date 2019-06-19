import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        const style = {
            backgroundColor: "#019AA2",
            borderRadius: "25px",
            color: "#ffffff",
            padding: "0.5rem",
            width: "139px",
            height: "43px"
        }
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
                    <Link
                        to="/settings"
                        type="button"
                        className="btn homeWrapper__logo__button"
                        style={style}>
                        Settings
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home