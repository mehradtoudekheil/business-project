import React from 'react';

const ContactForm = () => {
    return (
        <div className='col-12 col-md-6 p-2 d-flex justify-content-center'>
          <div className=' contact-form-section d-flex flex-column align-items-center'>
          <h4 className='contact-section-title text-center'>ارسال ایمیل</h4>
          <form className='col-10 mt-3'>

            <div className="form-group my-3">
                <input type="text" className='form-control contact-form-input' id='contactName'placeholder='نام : '/>
            </div>

            <div className="form-group my-3">

                <input type="text" className='form-control contact-form-input' id='contactEmail' placeholder='ایمیل : '/>
            </div>

            <div className="form-group my-3">
                <input type="text" className='form-control contact-form-input' id='contactSubject' placeholder='موضوع :'/>
            </div>
            
            <div className='form-group'>
                <textarea name="" id="" className='form-control contact-form-input' cols="30" rows="5" placeholder='پیام شما :'></textarea>
            </div>
            <button className='btn btn-primary w-100 my-4'>ارسال</button>
          </form>
          </div>
        </div> 
    );
};

export default ContactForm;