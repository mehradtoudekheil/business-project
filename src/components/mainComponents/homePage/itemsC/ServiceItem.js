import React from 'react';

const ServiceItem = ({ title, text, src }) => {
    return (
        <>
         <div className="col-12 col-md-6 col-lg-4 p-4">
                <div className="service-item d-flex flex-column">
                    <div className="service-item-img-container">
                       <img src={src} className="service-item-img" alt="" />
                    </div>
                   <div className='service-item-info d-flex flex-column align-items-center'>
                   <h5 className="service-item-title mt-4">{title}</h5>
                    <p className="service-item-text">{text}</p>
                   </div>
                </div>
            </div>
        </>
    );
};

export default ServiceItem;

