import React from 'react';
import bannerImage from '../../images/Banner.jpg';
import './style.css';

const Header = () => {
    return (
        <header>
            <img src={bannerImage} alt="Banner" />
        </header>
    );
};

export default Header;
