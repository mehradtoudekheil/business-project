import React from 'react';
const AwardsItem = ({ title , src }) => {
    return (
        <div className='col-12 col-md-4 p-5'>
            <div className='award-item'>
                <img src={src} className="award-item-img" alt="" />
                <div className='award-item-info'>
                    <h5 className='award-item-title'>{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default AwardsItem;