import React from 'react';
import {FaTelegramPlane, FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { IconContext } from "react-icons";


const ContactSocial = () => {
    return (
        <div className='col-12 col-md-6 p-2 d-flex justify-content-center'> 
        <div className='contact-social-section'>
        <h4 className='contact-section-title text-center '>شبکه های اجتماعی ما</h4>
        <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <IconContext.Provider value={{className:"contact-social-icon"}}>
            <div className='social-item d-flex justify-content-between align-items-center col-8 my-3'>
                <div className='social-item-bg'></div>
                <FaTelegramPlane/>
                <a href="#" className='social-link'>Telegram</a>
            </div>
            <div className='social-item d-flex justify-content-between align-items-center col-8 my-3'>
                <div className='social-item-bg'></div>
                <FaInstagram/>
                <a href="#" className='social-link'>Instagram</a>
            </div>
            <div className='social-item d-flex justify-content-between align-items-center col-8 my-3'>
                <div className='social-item-bg'></div>
                <FaWhatsapp/>
                <a href="#" className='social-link'>WhatsApp</a>
            </div>
            <div className='social-item d-flex justify-content-between align-items-center col-8 my-3'>
                <div className='social-item-bg'></div>
               <FaTwitter/>
                <a href="#" className='social-link'>Twitter</a>
            </div>
            </IconContext.Provider>
        </div>
        </div>
        </div>
    );
};

export default ContactSocial;