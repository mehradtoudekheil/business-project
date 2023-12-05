import React from 'react';
import { useContext } from 'react';
import MyContext from "./../../context/MyContext";
import IndexTagsSetting from './generalSettingPages/IndexTagsSetting';
import BannerSetting from './generalSettingPages/BannerSetting';
import LogoSetting from './generalSettingPages/LogoSetting';
import ServiceManage from './generalSettingPages/ServiceManage';
import AddServiceMange from './generalSettingPages/AddServiceMange';
import FooterTagsManage from './generalSettingPages/FooterTagsMange';
import AddFooterTags from './generalSettingPages/AddFooterTags';
import AwardsManage from './generalSettingPages/AwardsManage';
import AddAwards from './generalSettingPages/AddAwards';
import ContactMange from './generalSettingPages/ContactMange';
import SocialManage from './SocialManage';
import GalleryManage from './generalSettingPages/GalleryManage';
import AddGallery from './generalSettingPages/AddGallery';
import GeneralSetHome from './generalSettingPages/GeneralSetHome';

const GeneralSettings = () => {

    const info = useContext(MyContext);
    let nowAdminPage;

    switch (info.adminPageItem) {
        case "INDEXTAG":
            nowAdminPage = <IndexTagsSetting />;
            break;
        case "BANNER":
            nowAdminPage = <BannerSetting />
            break;
        case "LOGO":
            nowAdminPage = <LogoSetting />
            break;
        case "SERVICE":
            nowAdminPage = <ServiceManage />
            break;
        case "ADDSERVICE":
            nowAdminPage = <AddServiceMange />
            break;
        case "FOOTERTAGS":
            nowAdminPage = <FooterTagsManage />
            break;
        case "ADDFOOTERTAGS":
            nowAdminPage = <AddFooterTags />
            break;
        case "AWARDS":
            nowAdminPage = <AwardsManage />
            break;

        case "ADDAWARDS":
            nowAdminPage = <AddAwards />
            break;
        case "CONTACT":
            nowAdminPage = <ContactMange />
            break;

        case "GALLERY":
            nowAdminPage = <GalleryManage />
            break;
        case "ADDGALLERY":
            nowAdminPage = <AddGallery />
            break;

        default:
            nowAdminPage = <GeneralSetHome />

    }


    return (
        <div className='admin-content-box general-settings'>

            {nowAdminPage}

        </div>
    );
};

export default GeneralSettings;