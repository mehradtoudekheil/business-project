import React from 'react';
// import styles
import "./styles/App.css";
import "./styles/style.css";
import "./styles/media.css";

// import context
import MyContext from './components/context/MyContext';


// import components
import HomePage from './components/mainPagesComponents/HomePage';
import ContactPage from './components/mainPagesComponents/ContactPage';
import ServicePage from './components/mainPagesComponents/ServicePage';
import AboutPage from './components/mainPagesComponents/AboutPage';
import AdminPanel from './components/adminPanel/AdminPanel';



// import hooks
import { useState  } from 'react';
import { Route, Routes} from 'react-router-dom'


// import image 
import galleryImage1 from './img/about.jpg';
import galleryImage2 from "./img/banner1.jpg";
import avatarImage1 from './img/avatar/ava1.jpg'




function App() {

    const [serviceItems, setServiceItems] = useState([
        { id: "1", title: "لورم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src:galleryImage1, showInPage: false },
        { id: "2", title: "لورم ایپسوم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src: galleryImage1, showInPage: true },
        { id: "3", title: "لورم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src: galleryImage1, showInPage: true },
        { id: "4", title: " لورم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src: galleryImage1, showInPage: false },
        { id: "5", title: "اورم ایپسوم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src: galleryImage1, showInPage: true },
        { id: "6", title: "لورم ایپسوم", text: "لورم ایپسوم یک متن ساختگیست و برای پر کردن فاصله های متن هاست تا بتوان طراحی را دی", src: galleryImage1, showInPage: false }
    ]);

    const [galleryItems, setGalleryItems] = useState([
        { id: 1, src: galleryImage1, main: true },
        { id: 2, src: galleryImage2, main: false },
        { id: 3, src: galleryImage1, main: false },
        { id: 4, src: galleryImage1, main: false },
        { id: 5, src: galleryImage1, main: false },
        { id: 6, src: galleryImage1, main: false },
        { id: 7, src: galleryImage1, main: false },
        { id: 8, src: galleryImage1, main: false },
        { id: 9, src: galleryImage1, main: false }
    ]);

    const [teamUsers , setTeamUsers] = useState([
        {id:1, fName :"محمد" , lName :"محمدی" , subtitle :"برنامه نویس", text :"این یک متن ساختگی است برای پر ککردن فضا های " ,img : avatarImage1 , github:"lorem" , instagram : "lorem" , telegram: "lorem"},
        {id:2, fName :"محمد" , lName :"محمدی" , subtitle :"برنامه نویس", text :"این یک متن ساختگی است برای پر ککردن فضا های " ,img : avatarImage1 , github:"lorem" , instagram : "lorem" , telegram: "lorem"},
        {id:3, fName :"محمد" , lName :"محمدی" , subtitle :"برنامه نویس", text :"این یک متن ساختگی است برای پر ککردن فضا های " ,img : avatarImage1 , github:"lorem" , instagram : "lorem" , telegram: "lorem"}
     
    ]);

    const [awardItems , setAwardItems] = useState([
        {id:1 , title:"لورم ایپسوم" , src: galleryImage2},
        {id:2 , title:"لورم ایپسوم" , src: galleryImage2},
        {id:3 , title:"لورم ایپسوم" , src: galleryImage2}
    ]);


    const [adminPageItem , setAdminPageItem] = useState("");
    
    const [footerTags , setFooterTags] = useState([
        {id : 1 , title : "لورم 1"  , href:"#"},
        {id : 2 , title : "لورم 2"  , href:"#"},
        {id : 3 , title : "لورم 3"  , href:"#"},
        {id : 4 , title : "لورم 4"  , href:"#"},
        {id : 5 , title : "لورم 5"  , href:"#"},
        {id : 6 , title : "لورم 6"  , href:"#"},
        {id : 7 , title : "لورم 7"  , href:"#"},
        {id : 8 , title : "لورم 8"  , href:"#"}
    ])

    return (
        <MyContext.Provider value={{ serviceItems, setServiceItems , galleryItems , setGalleryItems , teamUsers , setTeamUsers , awardItems , setAwardItems , adminPageItem , setAdminPageItem , footerTags ,}} >


            <Routes>
                <Route  path="/" element={<HomePage />}></Route>
                <Route  path="/Contact-us" element={<ContactPage/> }></Route>
                <Route  path="/Services" element={<ServicePage/>}></Route>
                <Route  path="/About-us" element={<AboutPage/>}></Route>
                <Route  path="/Admin" element={<AdminPanel/>}></Route>
            </Routes>

            


        </MyContext.Provider>
    );
}

export default App;