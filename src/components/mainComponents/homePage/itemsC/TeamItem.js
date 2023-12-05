import React from 'react';
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const TeamItem = ({ fName, lName, subtitle, text, img, github, instagram, telegram }) => {
    return (
        <div className='col-12 col-md-3 p-3'>
            <div className='team-item'>
                <div className="team-item-img-container">
                    <img src={img} className="team-item-img" alt="" />
                </div>
                <div className="team-item-info d-flex flex-column align-items-center">
                    <h5 className='team-item-title'>{fName} {lName}</h5>
                    <h6 className='team-item-subtitle'>{subtitle}</h6>
                    <p className='team-item-text'>{text}</p>
                </div>
                <div className="team-item-social-media-box d-flex w-100 justify-content-around">
                    <a href={github}>
                        <FaTelegramPlane style={{
                            color : "#000",
                            fontSize : "30px"
                        }} />
                    </a>
                    <a href={instagram}>
                        <FaInstagram style={{
                            color : "#000",
                            fontSize : "30px"
                        }}/>
                    </a>
                    <a href={telegram}>
                        <FaWhatsapp style={{
                            color : "#000",
                            fontSize : "30px"
                        }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamItem;