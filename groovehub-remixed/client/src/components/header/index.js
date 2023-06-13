import React from 'react';
import bannerImage from '../../images/Banner.jpg';
import logo from '../../images/Logo.jpg';
import './style.css';

const Header = () => {
    return (
        <header className="banner">
            <img src={bannerImage} alt="Banner" />
            <div className="overlay">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="text">Groovehub</h1>
            </div>
        </header>
    );
};

export default Header;
