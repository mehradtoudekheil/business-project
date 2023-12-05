import React from 'react';

const AddGallery = () => {
    return (
        <div>
             <h3 className='pt-5 text-center'>
                 افزودن آیتم به گالری
            </h3>

            <div className='d-flex w-100 justify-content-center mt-5'>
                <form className='col-10 col-md-6 p-4 border rounded-3'>
                    <h5 className='text-center my-3'>اطلاعات آیتم را وارد کنید</h5>
                    <div className='form-group'>
                        <input type="text" placeholder='متن alt' className='form-control' />
                    </div>
                    <div className='form-group my-5'>
                        <input type="file"className='form-control' />
                    </div>
                    <div className='form-group my-5'>
                        <strong className='d-block mb-3'>
                            آیا تصویر اصلی باشد؟
                        </strong>
                        <input type="radio"className='ms-2' />
                        <label htmlFor="">بله</label>
                    </div>
                    <button className='btn btn-success w-100'>افزودن </button>
                </form>
            </div>
        </div>
    );
};

export default AddGallery;