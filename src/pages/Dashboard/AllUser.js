import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/firebase.init';
import USER from './USER';

const AllUser = () => {
    const [user] = useAuthState(auth)
   const{data:allusers,isloading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/users',{
       method:'GET'
   })
   .then(res=>res.json()))
  
    
    return (
        <div>
          <h2>All Users</h2>
        <div  className='my-5 text-center'>
          
            <h1 className=''></h1>
        </div>
       
       <table class="table OverflowX table-borderless table-info container border mt-5 shadow border-warning">
    <thead className='table-dark'>
      <tr>
        
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Make Admin</th>
        
      </tr>
    </thead>
    <tbody>
    
       {
          allusers?.map((user,index) =><USER refetch={refetch} index={index} user={user}></USER>)
         
       }
     
      
      
    </tbody>
  </table>
     
    </div>
    );
};

export default AllUser;