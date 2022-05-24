import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AllProducts from '../../Allproducts/AllProducts';
import './Dashboard.css'
import MyOrders from './MyOrders';

const Dashboard = () => {
    return (
        <div>
           <div className=' d-flex justify-content-end mt-1
            me-2 '>
           <button class="btn btn-dark btn-sm btn-outline-warning fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Open  Sidebar</button>
           </div>
           <div className="container">
              
               <Outlet></Outlet>
           </div>

            <div class="offcanvas offcanvas-start sizing" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                  
                    <button type="button" class="btn-close text-warning " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-start ">
                   <p> <Link className='nav-link text-dark fw-bold'  to='/dashboard '>My Orders</Link></p>
                   <p> <Link className='nav-link text-dark fw-bold' to='/dashboard/addreview'>Add A review</Link></p>
                   <p>
                   <Link className='nav-link text-dark fw-bold' to='/dashboard/profile'>Profile</Link>
                   </p>
                </div>
            </div>
        
        </div>
    );
};

export default Dashboard;
