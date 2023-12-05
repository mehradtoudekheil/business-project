import React from 'react';
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter, FaPhone, FaMailBulk , FaBars , FaTimes} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {Link } from 'react-router-dom';
import { useState } from 'react';
const MainHeader = () => {


const [showToggleMenu, setShowToggleMenu] = useState(false);

    return (

        <header className="header">
              <div className="header-content">
                <div className="header-content-bg">
          <div className='bg-navbar'>
            <IconContext.Provider value={{ className: "top-header-icons" }}>
                <div className="top-nav p-2 d-none d-md-flex flex-row-reverse">

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

                    <div className="social-media-icons col-6 d-flex justify-content-start">

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

            <div className="top-navbar d-flex justify-content-between flex-row-reverse">
                <div className="logo-bar p-0">
                    <h2 className="logo">Business Logo</h2>
                </div>
                <nav className="nav menu d-none d-md-flex p-0">
                    <Link to="/" className="menu-item active-menu-link">صفحه اصلی</Link>
                    <Link to="/services" className="menu-item">خدمات</Link>
                    <Link to="/about-us" className="menu-item">درباره ما</Link>
                    <Link to="/contact-us" className="menu-item">ارتباط با ما</Link>
                </nav>
                <button className="toggle-menu-btn d-md-none" onClick={() => setShowToggleMenu(!showToggleMenu)}>
                 {   !showToggleMenu ? <FaBars /> : <FaTimes/>}
                </button>
            </div>

            {
                showToggleMenu &&
                <div className="main-toggle-menu">
                    <Link to="/" className="toggle-menu-item">صفحه اصلی</Link>
                    <Link to="/About-us" className="toggle-menu-item">درباره ما</Link>
                    <Link to="/Services" className="toggle-menu-item">خدمات</Link>
                    <Link to="/Contact-us" className="toggle-menu-item">ارتباط با ما</Link>
                </div>
            }
        </div>
          

                    <div className="banner d-flex flex-column align-items-center justify-content-start pt-5 h-100 ">
                        <h1 className="title text-center">شرکت لورم ایپسوم</h1>
                        <p className="subtitle mt-5">
                            لورم ایپسوم متن ساختگی برای پر .ردن فضا در بستر وب
                        </p>
                        <button className="banner-btn mt-5">ارتباط با ما</button>
                    
                    </div>

                </div>
            </div>


        </header>

    );
};

export default MainHeader;