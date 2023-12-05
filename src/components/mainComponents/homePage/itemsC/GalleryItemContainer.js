import React from 'react';
import { useContext } from 'react';
import MyContext from './../../../context/MyContext';
import GalleryItem from './GalleryItem';


const GalleryItemContainer = () => {

const info = useContext(MyContext);

const changeGalleryMain = (e) => {

    const galleryImages = info.galleryItems;

    for (let galleryImage of galleryImages) {
        galleryImage.main = false;
        if (galleryImage.id == e.target.dataset.id) {
            galleryImage.main = true;
        }
    }
    info.setGalleryItems(()=>[...galleryImages]);

}

    return (
        <div className='gallery-item-container d-flex flex-md-wrap'>
           
            {
                info.galleryItems.map(item=>{
                    return(
                        <GalleryItem key={item.id}  src={item.src} id={item.id} handleChange={changeGalleryMain}/>
                    )
                })
            }
           
        </div>
    );
};

export default GalleryItemContainer;