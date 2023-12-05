import React from 'react';

const AddServiceMange = () => {
    return (
        <div>
            <h2 className='pt-5 text-center'>افزودن آیتم خدمات</h2>
            <div className='d-flex w-100 justify-content-center align-items-center flex-column'>
                <form className='col-10 col-md-5 my-3 add-service-form'>
                    <input type="text" className='add-service-form-input' placeholder='عنوان : '/>
                    <label htmlFor="addServiceFileInput" className='my-2'>فایل عکس را انتنخاب کنید :</label>
                    <input type="file" className='add-service-form-input' id="addServiceFileInput"/>
                    <textarea placeholder='متن آیتم :' name="add-service-text" className='add-service-form-input' id="" cols="30" rows="4"></textarea>
                    <p className='my-3'>در صفحه اصلی نشان داده شود؟</p>
                    <div className='my-4'>
                        <label htmlFor="showInPageTrueRadio">
                            بله
                        </label>
                        <input type="radio"  name='addServiceStatus' value={"yes"} id='showInPageTrueRadio' className='ms-4 me-1'/>
                        <label htmlFor="showInPageTrueRadio">
                            خیر
                        </label>
                        <input type="radio" name='addServiceStatus' value={"no"} id='showInPageFalseRadio' className='me-1'/>
                    </div>
                    <button className='btn btn-success w-100 my-3'>
                        افزودن
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddServiceMange;