import React from 'react';

const LogoSetting = () => {
    return (
        <div className='admin-content-item'>
        <h5 className='admin-item-title p-5 text-center'>لوگو سایت</h5>
        <div className='d-flex p-2 flex-wrap'>
            <div className='col-12 col-md-6 p-4 admin-logo-item'>
                <div className=''>
                    <p className='admin-item-info-text'>تغییر لوگو سایت</p> 
                    <form>
                        <div className='d-flex'>
                            <input type="file" className='col-9' />
                          <div className='col-3 px-1'>
                          <button className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-5 mt-md-0 p-4 d-flex justify-content-between align-items-center'>
            <h6>لوگو فعلی سایت</h6>
            <div className='admin-logo-img'></div>
           </div>
        </div>
    </div>
    );
};

export default LogoSetting;