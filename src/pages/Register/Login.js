import React, { useEffect, useRef, useState } from 'react';
import { appendErrors, useForm } from "react-hook-form";
import auth from '../../Firebase/firebase.init'
import GoogleButton from 'react-google-button';
import { useSignInWithGoogle,useSignInWithEmailAndPassword, useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';
import useToken from '../../Hooks/useToken';

const Login = () => {

    
    const emailRef =useRef()
   
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    
    const { register, formState: { errors }, handleSubmit,reset} = useForm();
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
let signInError;
const [token]=useToken(user||Guser)
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";
useEffect( () =>{
    if (token) {
        navigate(from, { replace: true });
       
    }
}, [token,from,navigate])

if (loading || Gloading) {
    return <Loading></Loading>
}

if(error || Gerror){
    signInError= <p className='text-red-500'><small>{error?.message || Gerror?.message }</small></p>
}


const onSubmit = async(data) => {
   
    // reset()
  await  signInWithEmailAndPassword(data.email, data.password);
    
}
const resetPassword = async () => {
    const Email = emailRef
    console.log(Email);
    if (Email) {
        await sendPasswordResetEmail(Email);
       toast.success('Email sent successful ')
    }
    else {
        toast.error('Please enter your email!')
    }
   
}
  return <div className=' container my-5'>
      <h2 className='w-75'>Login</h2>
  <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label className='d-flex ms-3'>Email</Form.Label>
                       <Form.Control
                        ref={emailRef} type="email"
                        placeholder="Enter email" className='border border-success rounded-pill w-75' 
                         name='email' 
                         {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                        />
                         <Form.Label className='d-flex ms-3 my-2'>
                         {errors.email?.type === 'required' && <span className="text-danger">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-danger">{errors.email.message}</span>} 
                         </Form.Label>
                   </Form.Group>
             
 
             <Form.Group className="" controlId="formBasicPassword">
                
                 <Form.Group className=" " controlId="formBasicPassword">
          <Form.Label className='d-flex ms-3'>Password</Form.Label>
          <Form.Control
              {...register("password", {
                required: {
                    value: true,
                    message: 'Password is Required'
                },
                minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer'
                }
            })}
           type="password" placeholder="Password" className='border border-success rounded-pill w-75' name='password'/>
      </Form.Group>
      <Form.Label className='d-flex ms-3 mt-2'>
                 {errors.password?.type === 'required' && <span className=" text-danger">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                 </Form.Label>
             </Form.Group>
            
            
             <div className='d-flex text-danger'>
                 <p>{signInError}</p>
             </div>
        <div className='w-75'>
        <p className="mt-3">
          New here ?  please
          <Link className="ms-2 text-warning text-decoration-none fw-bolder" to="/signup">
            Sign Up 
          </Link>
        </p>
        
            
             <button type="submit" class="btn  btn-outline-warning btn-success fw-bold">Login</button>
        </div>
         </Form>
         {/* <Link className='d-flex justify-content-end w-75 pe-3 text-danger text-decoration-none ' onClick={resetPassword}  to='/login'> forget password?</Link> */}
         {/* <div className='d-flex '>
                   <button onClick={resetPassword} className='p-text mb-3 p-1 rounded bt btn-info me-auto'>Reset password?</button>
                   </div> */}
        
       <div className='w-50'>
       <GoogleButton
        className="w-100  my-5 mx-auto rounded-3 bg-dark"
        onClick={() => signInWithGoogle()}
      />
       </div>
       {
        
       }
 </div>
};

export default Login;

