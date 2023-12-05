import React from 'react';
import { FaUser, FaAngleLeft , FaTimes } from 'react-icons/fa';
import { useContext, useReducer } from 'react';
import MyContext from "./../../context/MyContext";



const Sidebar = () => {

  const info = useContext(MyContext);

  // page handler set admin page states
  const adminPageHandler = (e) => {
    let pageName = e.target.dataset.title;
    info.setAdminPageItem(pageName);
    if(window.innerWidth < 768){
      document.getElementById("adminSidebar").classList.add("d-none");
      document.getElementById("adminResMenu").classList.remove("d-none");
      document.getElementById("adminResMenu").classList.add("d-flex");
    }
  }


  const closeSidebarBtn = ()=>{
    document.getElementById("adminSidebar").classList.add("d-none");
    document.getElementById("adminResMenu").classList.remove("d-none");
    document.getElementById("adminResMenu").classList.add("d-flex");
  }



  // child menus handler
  const mainMenuHandler = (e) => {

    let eventData = e.target.dataset.part;

      let elements = document.querySelectorAll(".sidebar-child-menu");
      elements = [...elements];

      elements.map(item => {
        return item.classList.add("d-none");
    })
      document.getElementById(`${eventData}SettingChildMenu`).classList.remove("d-none");
      document.getElementById(`${eventData}SettingChildMenu`).classList.add("d-block");


     let btns = document.querySelectorAll(".side-bar-nav-item-container");
     btns = [...btns];

     btns.map(btn=>{
      return btn.classList.remove("sidebar-nav-item-active");
     })

     document.getElementById(`${eventData}SettingBtn`).classList.add("sidebar-nav-item-active");


  }





  return (
    <aside className='sidebar'>

      <div className='admin-user-box px-2 pt-4 pb-1 w-100'>

        <div className='d-flex justify-content-between'>
         <div className='d-flex'>
         <FaUser className='ms-2 mt-1' />
          <p className='admin-user-name'>مهراد توده خیل</p>
         </div>
       <div className='d-block d-md-none' onClick={closeSidebarBtn}>
       <FaTimes/>
       </div>
        </div>

        <p className='admin-date'>1402/07/18 - 09:14</p>

      </div>

      <h5 className='admin-nav-title'>بخش های مدیریتی</h5>

      <div class="sidebar-nav mt-4 ">

        <div className='d-flex side-bar-nav-item-container sidebar-nav-item-active' id='mainSettingBtn'>
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item ' data-part="main"
          onClick={(e) => mainMenuHandler(e)}>تنظیمات اصلی</p>
        </div>

        <ul className='sidebar-child-menu d-none' id='mainSettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="INDEXTAG" onClick={e => adminPageHandler(e)}>تگ های اصلی</li>
          <li className='sidebar-child-menu-item' data-title="LOGO" onClick={e => adminPageHandler(e)}>لوگو سایت</li>
          <li className='sidebar-child-menu-item' data-title="BANNER" onClick={e => adminPageHandler(e)}>بنر و صفحه اصلی</li>
        </ul>

        <div className='d-flex side-bar-nav-item-container' id='serviceSettingBtn'>
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item' data-part="service"
          onClick={(e) => mainMenuHandler(e)}>مدیریت خدمات</p>
        </div>

        <ul className='sidebar-child-menu d-none' id='serviceSettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="SERVICE" onClick={e => adminPageHandler(e)}>مدیریت آیتم ها</li>
          <li className='sidebar-child-menu-item' data-title="ADDSERVICE" onClick={e => adminPageHandler(e)}>افزودن آیتم</li>
        </ul>

        <div className='d-flex side-bar-nav-item-container' id='gallerySettingBtn'>
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item' data-part="gallery"
          onClick={(e) => mainMenuHandler(e)}>مدیریت گالری</p>
        </div>

        <ul className='sidebar-child-menu d-none' id='gallerySettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="GALLERY" onClick={e => adminPageHandler(e)}>مدیریت آیتم ها</li>
          <li className='sidebar-child-menu-item' data-title="ADDGALLERY" onClick={e => adminPageHandler(e)}>افزودن آیتم</li>
        </ul>

        <div className='d-flex side-bar-nav-item-container' id='footerSettingBtn' >
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item' data-part="footer"
          onClick={(e) => mainMenuHandler(e)}>مدیریت تگ ها</p>
        </div>
        <ul className='sidebar-child-menu d-none' id='footerSettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="FOOTERTAGS" onClick={e => adminPageHandler(e)}>مدیریت آیتم ها</li>
          <li className='sidebar-child-menu-item' data-title="ADDFOOTERTAGS" onClick={e => adminPageHandler(e)}>افزودن آیتم</li>
        </ul>

        <div className='d-flex side-bar-nav-item-container' id='awardsSettingBtn'>
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item'  data-part="awards"
          onClick={(e) => mainMenuHandler(e)}>مدیریت دستاورد</p>
        </div>
        <ul className='sidebar-child-menu d-none' id='awardsSettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="AWARDS" onClick={e => adminPageHandler(e)}>مدیریت آیتم ها</li>
          <li className='sidebar-child-menu-item' data-title="ADDAWARDS" onClick={e => adminPageHandler(e)}>افزودن آیتم</li>
        </ul>


        <div className='d-flex side-bar-nav-item-container' id='contactSettingBtn'>
          <FaAngleLeft className='mt-1' />
          <p className='sidebar-nav-item' data-part="contact"
          onClick={(e) => mainMenuHandler(e)}>مدیریت راه های ارتباطی</p>
        </div>
        <ul className='sidebar-child-menu d-none' id='contactSettingChildMenu'>
          <li className='sidebar-child-menu-item' data-title="CONTACT" onClick={e => adminPageHandler(e)}>مدیریت  تماس</li>
          {/* <li className='sidebar-child-menu-item social-setting-nav-item' data-title="SOCIAL" onClick={e => adminPageHandler(e)}>شبکه های اجتماعی</li> */}
        </ul>

      </div>
    </aside>
  );
};

export default Sidebar;