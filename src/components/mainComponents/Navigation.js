import React from 'react';
import { Link } from 'react-router-dom';

// import icon

import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter, FaPhone, FaMailBulk, FaBars , FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";


import { useState } from 'react';

const Navigation = () => {


    const [showToggleMenu, setShowToggleMenu] = useState(false);


    return (
        <div className='bg-navbar'>
            <IconContext.Provider value={{ className: "top-header-icons" }}>
                <div className="top-nav p-2 d-none d-md-none flex-row-reverse">

                    <div className="address-bar col-6 d-flex flex-row justify-content-end">
                        <a href="#" className="top-nav-link">
                            info@codepenta.com
                            <FaMailBulk />
                        </a>
                        <a href="#" className="me-4 top-nav-link">
                            09364621686
                            <FaPhone />
                        </a>
                    </div>

                    <div className="socaila-media-icons col-6 d-flex justify-content-start">

                        <a className="top-social-icon">
                            <FaTelegramPlane />
                        </a>

                        <a className="top-social-icon">
                            <FaInstagram />
                        </a>
                        <a className="top-social-icon">
                            <FaWhatsapp />
                        </a>
                        <a className="top-social-icon">
                            <FaLinkedin />
                        </a>
                        <a className="top-social-icon">
                            <FaTwitter />
                        </a>



                    </div>

                </div>
            </IconContext.Provider>

            <div className="navigation-navbar d-flex justify-content-between flex-row-reverse">
                <div className="logo-bar p-0">
                    <h2 className="navigation-logo">Business Logo</h2>
                </div>
                <nav className="nav menu d-none d-md-flex p-0">
                    <Link to="/" className="navigation-menu-item navigation-active-menu-item">صفحه اصلی</Link>
                    <Link to="/services" className="navigation-menu-item">خدمات</Link>
                    <Link to="/about-us" className="navigation-menu-item">درباره ما</Link>
                    <Link to="/contact-us" className="navigation-menu-item">ارتباط با ما</Link>
                </nav>
                <button className="navigation-toggle-menu-btn d-md-none" onClick={() => setShowToggleMenu(!showToggleMenu)}>
                 {   !showToggleMenu ? <FaBars /> : <FaTimes/>}
                </button>
            </div>

            {
                showToggleMenu &&
                <div className="toggle-menu">
                    <Link to="/" className="toggle-menu-item">صفحه اصلی</Link>
                    <Link to="/About-us" className="toggle-menu-item">درباره ما</Link>
                    <Link to="/Services" className="toggle-menu-item">خدمات</Link>
                    <Link to="/Contact-us" className="toggle-menu-item">ارتباط با ما</Link>
                </div>
            }
        </div>
    );
};

export default Navigation;