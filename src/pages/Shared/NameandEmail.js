import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const NameandEmail = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-info d-flex justify-content-between ' >
            <marquee behavior="alternate"><span>Name : {user?.displayName} Email :  {user?.email}
         </span></marquee>
            
        </div>
    );
};

export default NameandEmail;