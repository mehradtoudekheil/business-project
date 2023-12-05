import React from 'react';
import ServiceItemContainer from './itemsC/ServiceItemContainer';
import {Link} from 'react-router-dom';


const Service = () => {
    return (
        <section className="serivces section-padding">
        <div className="title-box d-flex align-items-center px-5">
            <span className=" title-border title-border-right p-1"></span>
            <h4 className="service-title text-right">خدمات ما </h4>
            <span className="title-border p-1"></span>
        </div>

            <ServiceItemContainer/>

            <div className='w-100 d-flex justify-content-center'>
            <Link to="/services" className='service-btn'>خدمات بیشتر</Link>
            </div>

    </section>

    );
};

export default Service;