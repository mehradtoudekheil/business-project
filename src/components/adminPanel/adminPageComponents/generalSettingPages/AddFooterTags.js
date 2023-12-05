import React from 'react';

const AddFooterTags = () => {
    return (
        <div>
            <h3 className='p-3 pt-5 text-center'>افزودن تگ جدید به فوتر</h3>

            <div className='w-100 d-flex justify-content-center mt-5'>
                <form className="footer-tags-form col-10 col-md-4">
                    <div className="form-group">
                        <label htmlFor="footerTagsName">نام تگ : </label>
                        <input type="text"  placeholder='عنوان : ' className='form-control mt-2'/>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="footerTagsName">آدرس تگ : </label>
                        <input type="text"  placeholder='آدرس : ' className='form-control mt-2'/>
                    </div>
                    <button className='btn btn-success w-100'>افزودن</button>
                </form>
            </div>
        </div>
    );
};

export default AddFooterTags;