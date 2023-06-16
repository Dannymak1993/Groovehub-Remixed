import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState(null);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleDropdown = (item) => {
//         setActiveItem(activeItem === item ? null : item);
//     };

//     const isDropdownActive = (item) => {
//         return activeItem === item;
//     };

//     return (
//         <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//             <div className="sidebar-content">
//                 <ul className="sidebar-menu">
//                     <li className="sidebar-menu-item">
//                         <Link to="/" onClick={toggleSidebar}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className="sidebar-menu-item">
//                         <Link to="/authentication" onClick={toggleSidebar}>
//                             Login
//                         </Link>
//                     </li>
//                     <li className="sidebar-menu-item">
//                         <Link to="/myplaylist" onClick={toggleSidebar}>
//                             Your Playlists
//                         </Link>
//                     </li>
//                     <li className="sidebar-menu-item">
//                         <Link to="/community" onClick={toggleSidebar}>
//                             Community
//                         </Link>
//                     </li>
//                     <li className={`sidebar-menu-item ${isDropdownActive('about') ? 'active' : ''}`} id="abt-butn">
//                         <span className="dropdown-toggle" onClick={() => toggleDropdown('about')}>
//                             About Us
//                             <i className="fas fa-caret-down"></i>
//                         </span>
//                         <ul className="sidebar-dropdown">
//                             <p>
//                                 We are the creators of groovehub, a simple web app that allows you to listen to different genres of
//                                 music while commenting or chatting with others in real time! Our focus was on simple, fluid design that
//                                 works well. If you have any feedback for us, please reach out to any of our team members below!
//                             </p>
//                             <li>
//                                 <a href="https://github.com/Dannymak1993" target="_blank" rel="noopener noreferrer">
//                                     <img src='/images/DannyPhoto.jpg' alt="Danny Mak's GitHub" />
//                                     <p>Danny Mak</p>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://github.com/Joecode22" target="_blank" rel="noopener noreferrer">
//                                     <img src='/images/JoePhoto.jpg' alt="Joe Mckinney's GitHub" />
//                                     <p>Joe Mckinney</p>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://github.com/oscarmedina234" target="_blank" rel="noopener noreferrer">
//                                     <img src='/images/OscarPhoto.jpg' alt="Oscar Melina's GitHub" />
//                                     <p>Oscar Medina</p>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://github.com/SamH16205" target="_blank" rel="noopener noreferrer">
//                                     <img src='/images/SamPhoto.jpg' alt="Sam Halloum's GitHub" />
//                                     <p>Sam Halloum</p>

//                                 </a>
//                             </li>
//                             <div>
//                                 <img className="logo" src='/images/Logo.jpg' alt="Groovehub Logo" />
//                                 <p>
//                                     &copy; 2023
//                                 </p>
//                             </div>

//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    const isDropdownActive = (item) => {
        return activeItem === item;
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
                    <li className="sidebar-menu-item">
                        <Link to="/authentication" onClick={toggleSidebar}>
                        {/* <Link to="/login" onClick={toggleSidebar}> */}
                        Spotify Auth
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/login" onClick={toggleSidebar}>Login!</Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/signup" onClick={toggleSidebar}>Signup!</Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/myplaylist" onClick={toggleSidebar}>

                            Your Playlists
                        </Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/community" onClick={toggleSidebar}>
                            Community
                        </a>
                    </li>
                    <li className={`sidebar-menu-item ${isDropdownActive('about') ? 'active' : ''}`} id="abt-butn">
                        <span className="dropdown-toggle" onClick={() => toggleDropdown('about')}>
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
                            <div>
                                <img className="logo" src="/images/Logo.jpg" alt="Groovehub Logo" />
                                <p>&copy; 2023</p>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
