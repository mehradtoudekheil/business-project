import React from 'react';
import {Alert} from "react-bootstrap"
const SuccessAlert = ({text}) => {
    return (
        <Alert className='col-10 col-md-4'>{text}</Alert>   
    );
};

export default SuccessAlert;