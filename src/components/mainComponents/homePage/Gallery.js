import React from 'react';
import GalleryItemContainer from "./itemsC/GalleryItemContainer";
import GalleryMainItem from "./itemsC/GalleryMainItem";

const Gallery = () => {
    return (
        <section className='gallery section-padding'>
            <div className="title-box d-flex align-items-center px-5">
                <span className=" title-border title-border-right p-1"></span>
                <h4 className="service-title text-right ps-3">گالری تصاویر</h4>
                <span className="title-border p-1"></span>
            </div>
            <div className='d-flex mt-5 flex-row-reverse flex-wrap gallery-content'>
                <div className='col-12 col-md-8 p-3  d-flex justify-content-center'>
                <GalleryMainItem/>
                </div>
                <div className='col-12 col-md-4 p-3'>
                    <GalleryItemContainer/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;