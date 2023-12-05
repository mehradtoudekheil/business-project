import React from 'react';

const ContactMange = () => {
    return (
        <div>
            <h3 className='pt-5 text-center'>تنظیمات راه های ارتباطی</h3>
            <div className='contact-setting-container d-flex w-100 flex-column'>
                <div className='col-12 d-flex flex-column'>
                    <h5 className='p-4'>تلفن ها :</h5>
                    <div className='d-flex flex-wrap justify-content-around w-100 p-4'>
                        <form className='contact-phone-form contact-set-form col-12 col-md-5 p-4 mb-4 mb-md-0'>
                            <h6>تلفن 1</h6>
                           <div className='d-flex col-12 align-items-center'>
                            <input type="text" placeholder='تلفن : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                        </form>
                        <form className='contact-phone-form contact-set-form col-12 col-md-5 p-4'>
                            <h6>تلفن 2</h6>
                           <div className='d-flex col-12 align-items-center'>
                            <input type="text" placeholder='تلفن : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                        </form>
                    </div>
                </div>

                <div className='col-12 d-flex flex-column'>
                    <h5 className='p-4'> آدرس :</h5>
                    <div className='d-flex justify-content-around w-100 p-4'>
                        <form className='contact-phone-form contact-set-form col-12 col-md-5 p-4'>
                            <h6>آدرس</h6>
                           <div className='d-flex col-12 align-items-center'>
                           <textarea name="" id="" cols="30" rows="3" className='form-control'></textarea>
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                        </form>
                    </div>
                </div>


                <div className='col-12 d-flex flex-column'>
                    <h5 className='p-4'> ایمیل   :</h5>
                    <div className='d-flex justify-content-around w-100 p-4'>
                        <form className='contact-phone-form contact-set-form col-12 col-md-5 p-4'>
                            <h6>ایمیل</h6>
                           <div className='d-flex col-12 align-items-center'>
                           <input type="text" placeholder='ایمیل : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                        </form>
                    </div>
                </div>

                <div className='col-12 d-flex flex-column'>
                    <h5 className='p-4'> شبکه های اجتماعی:</h5>
                    <div className='d-flex justify-content-around w-100 p-4'>
                        <form className='contact-phone-form contact-set-form col-12 col-md-5 p-4'>
                            <h6 >لینک ها را قرار دهید</h6>
                           <div className='d-flex col-12 align-items-center my-4'>
                           <input type="text" placeholder='واتساپ : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>

                           <div className='d-flex col-12 align-items-center my-4'>
                           <input type="text" placeholder='اینستاگرام : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                           <div className='d-flex col-12 align-items-center my-4'>
                           <input type="text" placeholder='تلگرام : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                           <div className='d-flex col-12 align-items-center my-4'>
                           <input type="text" placeholder='لینکدین : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>
                           <div className='d-flex col-12 align-items-center my-4'>
                           <input type="text" placeholder='توییتر : ' className='form-control w-75' />
                            <button className='btn btn-success me-2'>تائید</button>
                           </div>


                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactMange;