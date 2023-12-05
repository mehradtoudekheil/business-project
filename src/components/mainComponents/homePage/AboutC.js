import React from 'react';
import aboutImg from './../../../img/about.jpg'

import { FaCheck , FaPhone } from 'react-icons/fa';
import { IconContext } from "react-icons";


const AboutC = () => {
    return (

        <section className="about d-flex flex-wrap section-padding">
            <div className="col-12 col-md-6">
                <div className="about-content">
                    <div className="title-box d-flex align-items-center px-3">
                        <h4 className="sec-title text-right">درباره ما</h4>
                        <span className="title-border p-1"></span>
                    </div>
                    <p className="about-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                        باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <IconContext.Provider value={{className:"about-section-item-icon"}}>
                    <div className="d-flex justify-content-around flex-wrap">
                        <div className="col-6 d-flex justify-content-center">
                            <FaCheck />
                            <p className='me-2'>لورم ایپسوم </p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <FaCheck />
                            <p className='me-2'>لورم ایپسوم </p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <FaCheck /> 
                            <p className='me-2'>لورم ایپسوم </p>                   
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <FaCheck />   
                            <p className='me-2'>لورم ایپسوم </p>                     
                        </div>
                    </div>
                    </IconContext.Provider>
                 
                    <div className='d-flex justify-content-center w-100'>
                    <div className="d-flex mt-4 justify-content-center about-contact ">
                        <div className="about-contact-icon">
                            <FaPhone/>
                        </div>
                        <div className="about-contact-info">
                            <p>برای اطلاعات بیشتر تماس بگیرید</p>
                            <a className="about-contact-number text-center">09364621686</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center">
                <div className="about-img-sec">
                    <img className="about-img" src={aboutImg} alt="برنامه نویسی تیم همکاری طراحی سایت کدپنتا " />
                </div>
            </div>

        </section>


    );
};

export default AboutC;