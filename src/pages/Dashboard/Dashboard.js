import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import AllProducts from '../../Allproducts/AllProducts';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import './Dashboard.css'
import MyOrders from './MyOrders';
import UserProfile from './UserProfile';

const Dashboard = () => {
    const[user]=useAuthState(auth)
    const[admin]=useAdmin(user)
    return (
        <div>
           <div className=' d-flex justify-content-end mt-1
            me-2 '>
           <button class="btn btn-dark btn-sm btn-outline-warning fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Open  Sidebar</button>
           </div>
           <div className="container">
               <div className='bg-success'>
               <marquee><h3 className='fw-bold my-auto text-warning'>Welcome To DashBoard</h3></marquee></div>
              
               <Outlet></Outlet>
           </div>

            <div class="offcanvas offcanvas-start sizing" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                  
                    <button type="button" class="btn-close text-warning " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-start bg-cyan ">
                   <p> {!admin &&<Link className='nav-link text-dark fw-bold'  to='/dashboard/myorders '>My Orders</Link>}</p>
                   <p> {
                       !admin && <Link className='nav-link text-dark fw-bold' to='/dashboard/addreview'>Add A review</Link>
                       }
                   </p>               
                   <p>
                   <Link className='nav-link text-dark fw-bold' to='/dashboard'>Profile</Link>
                   
                   </p>
                   <p>{
                       admin && <CustomLink className='nav-link text-dark fw-bold' to='/dashboard/allusers'>All Users</CustomLink>
}</p>

<p>{
                       admin && <CustomLink className='nav-link text-dark fw-bold' to='/dashboard/allorder'>Manage Orders</CustomLink>
}</p>
<p>{
                       admin && <CustomLink className='nav-link text-dark fw-bold' to='/dashboard/addproduct'>Add Product</CustomLink>
}</p>
<p>{
                       admin && <CustomLink className='nav-link text-dark fw-bold' to='/dashboard/manageproduct'>Manage Product</CustomLink>
}</p>
                </div>
            </div>
        
        </div>
    );
};

export default Dashboard;
