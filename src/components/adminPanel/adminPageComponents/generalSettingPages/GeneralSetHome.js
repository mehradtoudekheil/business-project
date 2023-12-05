import React from 'react';
import {FaCog} from "react-icons/fa"


const GeneralSetHome = () => {
    return (
        <div className='general-setting-homepage'>
            <div className='setting-icon rotate'>
                <FaCog/>
            </div>
            <h3>به صفحه تنظیمات خوش آمدید</h3>
        </div>
    );
};

export default GeneralSetHome;