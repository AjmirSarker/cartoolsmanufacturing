import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../../Allproducts/AllProducts';
import Product from '../../Allproducts/Product';
import Myteam from '../../ExtraPart/Myteam';
import SpecialItem from '../../ExtraPart/SpecialItem';
import useData from '../../Hooks/useData';
import useReviews from '../../Hooks/useReviews';
import HomeReview from '../../Review/HomeReview';
import Review from '../../Review/Review';
import ReviewCard from '../../Review/ReviewCard';
import Loading from '../Shared/Loading';

import Banner from './Banner';





import './Home.module.css'
import Summary from './Summary';




const Home = () => {
    const [products] =useData()
    const revProduct=products.reverse()
    const [loading,setLoading]=useState(false)
    const[reviews]=useReviews ()
   
    // if(products.length<=0){
    //     return <Loading> </Loading>
    // }
 
    return (
        <div>
          <Banner></Banner>
         
          
          <div>
              {
                  products.length===0? <Loading></Loading>:''
              }
          </div>
          <div className='container my-5 '>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">{
              
              products.slice(0,6).map(product=><Product more={2} product={product}></Product>)}
          </div> 
          <div className='d-flex my-1 justify-content-end '> <Link className='text-decoration-none text-success fw-bolder' to='/allproducts'> {`more products ->`}</Link> </div>   
         
        </div>
       <div className='my-5'>
           
<Summary></Summary>
       </div>
       <div className='my-5'>
           <h1 className='my-3'>Management Committee</h1>
           <Myteam></Myteam></div>
      
       <div className=' my-5 '>
           <h2 className='fw-bold'>Reviews</h2>
         

<HomeReview></HomeReview>
<div className='bg-success p-2 mt-5'>
  <h1 className='text-light fw-bolder'>  Special Offer</h1>
<div className='my-5 container'>
    <SpecialItem></SpecialItem>

</div>
</div>

            
         
        </div>
      
       
        </div>
    );
};

export default Home;

// {
              

{/* <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              
</div>  */}