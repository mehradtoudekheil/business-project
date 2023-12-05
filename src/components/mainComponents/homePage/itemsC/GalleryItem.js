import React from 'react';

const GalleryItem = ({src , id , handleChange}) => {



    return (
        <div className='col-2 col-md-4 p-1'>
            <div className='gallery-item'>
                <img className='gallery-item-img' src={src} alt="" data-id={id} onClick={(e)=>handleChange(e)}/>
                <div className='gallery-item-overlay'></div>
            </div>
        </div>

    );
};

export default GalleryItem;