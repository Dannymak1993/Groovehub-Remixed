import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header className="banner">
            <img src='/images/Banner.jpg' alt="Banner" />
            <div className="overlay">
                <a href='/'>
                <img src='/images/Logo.jpg' alt="Logo" className="logo" />
                </a>
                <h1 className="text">Groovehub Remixed</h1>
            </div>
        </header>
    );
};

export default Header;
