import React from 'react';

import MainHeader from './../mainComponents/homePage/MainHeader';
import AboutC from './../mainComponents/homePage/AboutC';
import Service from './../mainComponents/homePage/Service';
import Gallery from './../mainComponents/homePage/Gallery';
import Team from './../mainComponents/homePage/Team';
import MainFooter from './../mainComponents/homePage/MainFooter';

const HomePage = () => {
    return (
        <div>
            <MainHeader/>
            <main className='main'>
            <AboutC/>
            <Service/>
            <Gallery/>
            {/* <Team/> */}
            </main>
            <MainFooter/>
        </div>
    );
};


export default HomePage;