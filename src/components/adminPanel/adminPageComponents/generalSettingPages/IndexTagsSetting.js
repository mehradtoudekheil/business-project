import React from 'react';
import {Alert} from "react-bootstrap";
import { useState ,useEffect } from 'react';
import SuccessAlert from '../../../responseComponents/SuccessAlert';
import FailedAlert from '../../../responseComponents/FailedAlert';
const IndexTagsSetting = () => {

const [showSuccessAlert , setShowSuccessAlert] = useState(false);
const [successAlertText , setSuccessAlertText] = useState("");
const [showFailedAlert , setShowFailedAlert] = useState(false);
const [failedAlertText , setFailedAlertText] = useState("");


    const titleChangeHandler = ()=>{

        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false)
        }, 2000);

        setSuccessAlertText("تگ title با موفقیت تغییر کرد");
      
       
    }
    const descriptionHandler = ()=>{

        setShowFailedAlert(true);
        setTimeout(() => {
            setShowFailedAlert(false)
        }, 2000);

        setFailedAlertText("لطفا فیلذ ها را پر کنید")
      
       
    }


    return (
        <div className='admin-content-item'>
             {
         showSuccessAlert ?  <div className='col-12  d-flex justify-content-end p-3'>
         <SuccessAlert text={successAlertText} className='col-10 col-md-4'/> 
         </div> : ""
        }
         {
         showFailedAlert ?  <div className='col-12  d-flex justify-content-end p-3'>
         <FailedAlert variant='danger' text={failedAlertText} className='col-10 col-md-4'/>  
         </div> : ""
        }
       
        <h5 className='admin-item-title p-5 text-center'>تگ های اصلی</h5>
        <div className='d-flex flex-wrap'>
            <div className='col-12 col-md-6 p-4'>
                <div className=''>
                    <p className='admin-item-info-text'>تغییر تگ title یا همان متن روی تب های مرورگر</p>

                    <form>
                        <div className='d-flex'>
                            <input type="text" className='col-9 admin-form-input' placeholder='تگ title :  '  id='titleTag' />
                          <div className='col-3 px-1'>
                          <button type='button' className='admin-form-btn' onClick={titleChangeHandler}>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 col-md-6 p-4 mt-5 mt-md-0'>
                <div className=''>
                    <p className='admin-item-info-text'>تغییر تگ description </p>

                    <form>
                        <div className='d-flex'>
                            <input type="text" className='col-9 admin-form-input' placeholder='تگ description :  '  id='titleTag' />
                          <div className='col-3 px-1'>
                          <button type='button' onClick={descriptionHandler} className='admin-form-btn'>تنظیم کردن</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
    );
};

export default IndexTagsSetting;