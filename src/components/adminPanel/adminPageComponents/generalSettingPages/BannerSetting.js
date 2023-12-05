import React from 'react';

const BannerSetting = () => {
    return (
        <div className='admin-content-item'>
        <h5 className='admin-item-title p-5 text-center'>بنر و صفحه اصلی</h5>
        <div className='d-flex flex-wrap'>
            <div className='col-12 col-md-6 p-4'>
                <div className=''>
                    <p className='admin-item-info-text'>عنوان اصلی سایت</p>

                    <form>
                        <div className='d-flex'>
                            <input type="text" className='col-9 admin-form-input' placeholder=' عنوان :  '  id='titleTag' />
                          <div className='col-3 px-1'>

                          <button className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 col-md-6 p-4'>
                <div className=''>
                    <p className='admin-item-info-text'>متن بنر</p>

                    <form>
                        <div className='d-flex'>
                            <input type="text" className='col-9 admin-form-input' placeholder=' متن :  '  id='titleTag' />
                          <div className='col-3 px-1'>
                          <button className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 col-md-6 p-4 pt-5'>
                <div className=''> 
                    <p className='admin-item-info-text'>آدرس لینک بنر  </p>

                    <form>
                        <div className='d-flex'>
                            <input type="text" className='col-9 admin-form-input' placeholder='لینک :' id='titleTag' />
                          <div className='col-3 px-1'>
                          <button className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 col-md-6 p-4 pt-5'>
                <div className=''>
                    <p className='admin-item-info-text'>عکس پس زمینه بنر سایت</p>

                    <form>
                        <div className='d-flex'>
                            <input type="file" className='col-9 ' />
                          <div className='col-3 px-1'>
                          <button className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    );
};

export default BannerSetting;