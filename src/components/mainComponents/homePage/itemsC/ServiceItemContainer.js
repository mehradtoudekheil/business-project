import React from 'react';
import { useContext } from 'react';
import ServiceItem from './ServiceItem';
import MyContext from './../../../context/MyContext';


const ServiceItemContainer = () => {

   const info = useContext(MyContext);

    return (
        <div className="about-content d-flex flex-wrap">

            {
                info.serviceItems.map((item) => {
                    return (item.showInPage && <ServiceItem key={item.id} title={item.title} text={item.text} src={item.src} />
                    )
                })
            }

        </div>
    );
};

export default ServiceItemContainer;