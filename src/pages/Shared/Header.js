import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import './Header.css'
import logo from '../../iconsss/ogo.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
    return (
        <div>
            <Navbar className="navbar bg-secondary bg-gradient" collapseOnSelect expand="lg" sticky="top">
        <Container >
          <Navbar.Brand className='designed' as={Link} to="/">
           <img style={{width:'60px'}} className=' rounded-circle' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className='text-light border border-info' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-link ">
           
              <CustomLink className="nav-link fs-4 active"  to="/" >Home</CustomLink>
              <CustomLink className="nav-link fs-4 " to="/allproducts" >All Products</CustomLink>
              
              <CustomLink className="nav-link fs-4"  to="/blog" >Blogs</CustomLink>
              <CustomLink className="nav-link fs-4"  to="/reviews" >Review</CustomLink>
              <CustomLink className="nav-link fs-4"  to="/dashboard" >DashBoard</CustomLink>
             {
               user?<p className='text-info'>{user.email}</p>:''

             }

             
             
            </Nav>
            <Nav className="navbar-link">
              {/* {user  && (
                <>
                  <CustomLink className="nav-link fs-6 " to="/usertask" >User Task</CustomLink>
                 
                  
                </>
              )} */}
            {
                user?(<CustomLink  className="nav-link fs-6  mt-1 ms-2 text-center text-light fw-bolder border p-1 btn btn-outline-warning "  to='/' onClick={handleSignOut}> Sign out</CustomLink>):(<CustomLink className="nav-link fs-6 "  to='/login'> Log In</CustomLink>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </div>
    );
};

export default Header;