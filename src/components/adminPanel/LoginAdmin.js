import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';


const LoginAdmin = () => {

    const [showPass, setShowPass] = useState(false);


    const showPassHandler = () => {
        console.log(2);
    }

    return (
        <div className='container-fluid p-0'>
            <div className='admin-login-container'>
                <h1 className='login-title text-center pt-5'>ورود به پنل ادمین</h1>
                <div className='form-container w-100 d-flex justify-content-center'>
                    <form className='col-10 col-md-4 admin-login-form d-flex flex-column align-items-center'>
                        <div className='form-group'>
                            <label htmlFor="username" className='pb-2'>نام کاربری : </label>
                            <div className='form-input-container d-flex' >
                                <input type="text" className='login-form-input' />
                            </div>
                        </div>
                        <div className='form-group my-4'>
                            <label htmlFor="username" className='pb-2'>رمز عبور : </label>
                            <div className='form-input-container d-flex' >
                                <input type="password" className='login-form-input login-pass-input' />
                                <button className='mt-1 ms-2' onClick={showPassHandler()}>
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button className='btn'>ورود</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;