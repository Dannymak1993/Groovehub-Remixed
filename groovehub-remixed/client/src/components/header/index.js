import React from 'react';
// import bannerImage from '../../images/Banner.jpg';
// import logo from '../../images/Logo.jpg';
import './style.css';

const Header = () => {
    return (
        <header className="banner">
            <img src='/images/Banner.jpg' alt="Banner" />
            <div className="overlay">
                <img src='/images/Logo.jpg' alt="Logo" className="logo" />
                <h1 className="text">Groovehub</h1>
            </div>
        </header>
    );
};

export default Header;
