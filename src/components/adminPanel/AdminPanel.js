import React from 'react';
import LoginAdmin from './LoginAdmin';
import Admin from './Admin';
import { useState } from 'react';


const AdminPanel = () => {

    const [login, setLogin] = useState(true);

    return (
        <div>
            {
                login ? <Admin /> : <LoginAdmin /> 
            }

        </div>
    );
};

export default AdminPanel;