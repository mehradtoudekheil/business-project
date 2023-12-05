import React from 'react';
import { useContext } from 'react';
import MyContext from './../../../context/MyContext';
import TeamItem from './TeamItem';


const TeamItemsContainer = () => {

    const info = useContext(MyContext);


    return (
        <div className='d-flex w-100 flex-wrap justify-content-center pt-5 px-4'>
           {
            info.teamUsers.map(item=>{
                return <TeamItem key={item.id} fName={item.fName} lName={item.lName} text={item.text} img={item.img} subtitle={item.subtitle} github={item.github} instagram={item.instagram} telegram={item.telegram}/>
            })
           }
        </div>
    );
};

export default TeamItemsContainer;