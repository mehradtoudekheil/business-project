import React from 'react';
import { useContext } from 'react';
import MyContext from "../../context/MyContext";
import AwardsItem from './AwardsItem';


const AwardsContainer = () => {

    const info = useContext(MyContext);

    return (
        <div>
            <h2 className='award-title'>دستاورد ها و مجوز ها</h2>
            <div className="d-flex flex-wrap">
             {
                   info.awardItems.map(item=>{
                    return <AwardsItem key={item.id} src={item.src} title={item.title}/>
                })
             }
            </div>
        </div>
    );
};

export default AwardsContainer;