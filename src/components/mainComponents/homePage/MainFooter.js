import React from 'react';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from "./../../context/MyContext";


const MainFooter = () => {

    const info = useContext(MyContext);


    return (
        <footer className='footer d-flex flex-wrap'>
            <IconContext.Provider value={{ className: "footer-icon" }}>
                <div className='col-12 col-md-4 p-2'>
                    <div className='footer-item'>
                        <h5 className='footer-title'>
                            دسترسی ها
                        </h5>
                        <nav className='nav d-flex flex-column'>
                            <div className='d-flex align-items-center'>
                                <FaAngleLeft />
                                <Link to="/About-us" className='footer-link nav-item nav-link'>درباره ما</Link>
                            </div>
                            <div className='d-flex align-items-center'>
                                <FaAngleLeft />
                                <Link to="/Contact-us" className='footer-link nav-item nav-link'>ارتباط با ما</Link>
                            </div>
                            <div className='d-flex align-items-center'>
                                <FaAngleLeft />
                                <Link to="/Services " className='footer-link nav-item nav-link'>خدمات</Link>
                            </div>
                            <div className='d-flex align-items-center'>
                                <FaAngleLeft />
                                <Link to="/" className='footer-link nav-item nav-link'>سوالات متداول</Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='col-12 col-md-4 p-2'>
                    <div className='footer-item'>
                        <h5 className='footer-title'>
                            تگ ها
                        </h5>

                        <div className='footer-tags-box'>
                            <nav className='nav flex-wrap w-100'>

                                {
                                    info.footerTags.map(item => {
                                        return (
                                            <div className='d-flex align-items-center col-6' key={item.id}>
                                                <FaCheck />
                                                <a href={item.href} className='footer-link nav-item nav-link'>{item.title}</a>
                                            </div>
                                        )
                                    })
                                }
                            </nav>

                        </div>

                    </div>
                </div>
                <div className='col-12 col-md-4 p-2'>
                    <div className='footer-item'>
                        <h5 className='footer-title'>
                            عضویت در خبرنامه
                        </h5>
                        <p className='footer-text'>
                            با عضویت در خبرنامه ما از اطلاعیه های ما زود تر از دیگران با خبر شوید
                        </p>

                        <form>
                            <div className='d-flex newsletter-form-container'>
                                <input type="email" placeholder='ایمیل خود را وارد کنید' className='newsletter-input' />
                                <button className='newsletter-btn'>ارسال</button>
                            </div>
                        </form>

                    </div>
                </div>
            </IconContext.Provider>
        </footer>
    );
};

export default MainFooter;