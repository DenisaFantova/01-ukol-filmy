import React from "react";
import camera from './camera.svg';
import './Header.css';

const Header = () => {
    return (
       <header>
            <h1 className="main-title">
                <img className="logo" src={camera} alt="Logo" />
                V našem kině právě uvádíme
            </h1>
    </header>
    )
};

export default Header;