import React from 'react';
import { useContext } from 'react';
import MyContext from './../../../context/MyContext';

const GalleryMainItem = () => {

    const info = useContext(MyContext);

    console.log(info.galleryItems);


    return (
        <div className='gallery-main-item'>
            {
                info.galleryItems.map(item=>{
                    return item.main &&  <img key={item.id} src={item.src} alt="" className='gallery-main-img' />
                })
            }
        </div>  
    );
};

export default GalleryMainItem;