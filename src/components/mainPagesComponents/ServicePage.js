import React from 'react';
import MainFooter from '../mainComponents/homePage/MainFooter';
import Navigation from '../mainComponents/Navigation';
import ServicePageContainer from '../mainComponents/servicePage/ServicePageContainer'
const ServicePage = () => {
    return (
        <div className='container-fluid p-0'>
            <header>
                <Navigation/>
            </header>
            <main className='main'>
                <h1 className='service-page-title'>
                    خدمات ما
                </h1>
                <ServicePageContainer/>
            </main>
            <footer>
                <MainFooter/>
            </footer>
        </div>
    );
};

export default ServicePage;