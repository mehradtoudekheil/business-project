import React from 'react';
import {Alert} from "react-bootstrap"
const FailedAlert = ({text}) => {
    return (
        <Alert variant='danger' className='col-10 col-md-4'>{text}</Alert>   
    );
};

export default FailedAlert;