import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../../Allproducts/AllProducts';
import Product from '../../Allproducts/Product';
import Myteam from '../../ExtraPart/Myteam';
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
    const [loading,setLoading]=useState(false)
    const[reviews]=useReviews ()
    const Reverse= reviews.reverse()
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
       <Myteam></Myteam>
      
       <div className=' my-5 '>
           <h2 className='fw-bold'>Reviews</h2>
         

<HomeReview></HomeReview>

            
         
        </div>
      
       
        </div>
    );
};

export default Home;

// {
              

{/* <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              
</div>  */}