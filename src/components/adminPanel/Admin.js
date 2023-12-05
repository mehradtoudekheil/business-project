import React from 'react';
import Sidebar from './adminPageComponents/Sidebar';
import GeneralSettings from './adminPageComponents/GeneralSettings';
import {FaBars} from "react-icons/fa";

const Admin = () => {

const adminMenuHandler =()=>{
   document.getElementById("adminSidebar").classList.remove("d-none");
   document.getElementById("adminResMenu").classList.remove("d-flex");
   document.getElementById("adminResMenu").classList.add("d-none");
}


    return (
        <div className='container-fluid p-0'>
            <div className='admin-content  d-flex flex-wrap'>
                <div className='col-12 col-md-2 h-auto h-md-100 d-none d-md-block' id='adminSidebar'>
                    <Sidebar />
                </div>
                <div className='col-12 d-flex align-items-center justify-content-start d-md-none admin-responsive-menu' id='adminResMenu'>
                    <div className='admin-menu-btn me-4' onClick={adminMenuHandler}>
                    <FaBars/>
                    </div>
                    <h3 className='text-white w-75 text-center'>پنل ادمین</h3>
                </div>
                <div className='col-12 col-md-10 admin-content-container'>
                    <GeneralSettings/>
                </div>
            </div>
        </div>
    );
};

export default Admin;