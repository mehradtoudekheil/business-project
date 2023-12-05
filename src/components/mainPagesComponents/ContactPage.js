import React from 'react';
import Navigation from '../mainComponents/Navigation';
import ContactHeader from '../mainComponents/contactPage/ContactHeader'
import ContactSocial from '../mainComponents/contactPage/ContactSocial';
import ContactForm from './../mainComponents/contactPage/ContactForm';
import MainFooter from './../mainComponents/homePage/MainFooter';
const ContactPage = () => {
    return (
       <div className='container-fluid p-0'>
        <header>
        <Navigation/>
       
        </header>
        <main className='main'>
        <ContactHeader/>
       <section className='section-padding col-12 d-flex flex-wrap'>
       <ContactSocial/>
        <ContactForm/>
       </section>
       </main>
       <MainFooter/>

       </div>
    );
};

export default ContactPage;