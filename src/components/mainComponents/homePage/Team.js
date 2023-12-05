import React from 'react';
import TeamItemsContainer from './itemsC/TeamItemsContainer';


const Team = () => {
    return (
        <section className='team section-padding '> 
            <div className="title-box d-flex align-items-center px-5">
                <span className=" title-border title-border-right p-1"></span>
                <h4 className="service-title text-right ps-3">تیم ما</h4>
                <span className="title-border p-1"></span>
            </div>

            <TeamItemsContainer/>
          
        </section>
    );
};

export default Team;