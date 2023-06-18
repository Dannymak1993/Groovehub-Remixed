import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAuth from '../../utils/auth.js';
import './style.css';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    const isDropdownActive = (item) => {
        return activeItem === item;
    };

    const handleLogout = () => {
        // Clear token/id_token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('id_token');
        // Perform any additional logout actions if necessary

        // Refresh the page to reflect the logout state
        window.location.reload();
    };

    const handleAuthentication = () => {
        if (UserAuth.loggedIn()) {
            handleLogout();
        } else {
            navigate('/authentication');
        }
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <a href="/" onClick={toggleSidebar}>
                            Home
                        </a>
                    </li>
                    {/* <li className="sidebar-menu-item">
                        <a href="/authentication" onClick={toggleSidebar}>
                            Login or Sign Up Here
                        </a>
                    </li> */}
                    <li className="sidebar-menu-item">
                        {UserAuth.loggedIn() ? (
                            <a href="/" onClick={handleAuthentication}>
                                Logout
                            </a>
                        ) : (
                            <a href="/authentication" onClick={toggleSidebar}>
                                Login or Sign Up Here
                            </a>
                        )}
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/myplaylist" onClick={toggleSidebar}>
                            Your Playlists
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/community" onClick={toggleSidebar}>
                            Community
                        </a>
                    </li>
                    <li className={`sidebar-menu-item ${isDropdownActive('about') ? 'active' : ''}`} id="abt-butn">
                        <span className="dropdown-toggle about-button" onClick={() => toggleDropdown('about')}>
                            About Us
                            <i className="fas fa-caret-down"></i>
                        </span>
                        <ul className="sidebar-dropdown">
                            <p>
                                We are the creators of groovehub, a simple web app that allows you to listen to different genres of music
                                while commenting or chatting with others in real time! Our focus was on simple, fluid design that works
                                well. If you have any feedback for us, please reach out to any of our team members below!
                            </p>
                            <li>
                                <a href="https://github.com/Dannymak1993" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/DannyPhoto.jpg" alt="Danny Mak's GitHub" />
                                    <p>Danny Mak</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Joecode22" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/JoePhoto.jpg" alt="Joe Mckinney's GitHub" />
                                    <p>Joe Mckinney</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/oscarmedina234" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/OscarPhoto.jpg" alt="Oscar Melina's GitHub" />
                                    <p>Oscar Medina</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SamH16205" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/SamPhoto.jpg" alt="Sam Halloum's GitHub" />
                                    <p>Sam Halloum</p>
                                </a>
                            </li>
                                <p>&copy; 2023</p>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
