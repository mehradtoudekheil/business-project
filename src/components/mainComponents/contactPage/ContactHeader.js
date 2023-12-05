import React from 'react';
import headerImg from '../../../img/contact2.png';
import {FaPhone , FaSearchLocation} from 'react-icons/fa';
import { IconContext } from "react-icons";


const ContactHeader = () => {
    return (
        <div className='w-100 d-flex flex-row-reverse flex-wrap p-2'>
            <div className='col-12 col-md-6 p-3 d-flex justify-content-center'>
                <div className='contact-header-img-container'>
                    <img src={headerImg} className='contact-header-img' alt="" />
                </div>
            </div>
            <IconContext.Provider value={{className:"contact-header-icons"}}>
            <div className='col-12 col-md-6 p-3'>
                <div className='contact-header-img-container w-100  '>
                    <div className='contact-header-info w-100'>
                        <h1 className='contact-title'>راه های ارتباطی ما</h1>
                        <p className='contact-header-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک امه و مجله در ستون و سطرآنچنان کصلی، و جوابگوی سوالات پیوسته ا طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <div className='contact-box d-flex align-items-center justify-content-between w-md-75 mx-auto w-100'>
                            
                            <FaPhone/>
                            <p className='contact-box-text'>09121485623</p>
                            
                        </div>
                        <div className='contact-box d-flex align-items-center justify-content-between w-md-75 w-100 mx-auto'>
                            <FaSearchLocation/>
                            <p className='contact-box-text'>لورم ایپسوم متن ساختگی </p>
                        </div>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    );
};

export default ContactHeader;