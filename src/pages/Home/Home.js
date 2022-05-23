import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../../Allproducts/AllProducts';
import Product from '../../Allproducts/Product';
import Myteam from '../../ExtraPart/Myteam';
import useData from '../../Hooks/useData';
import Loading from '../Shared/Loading';

import Banner from './Banner';


const Home = () => {
    const [products] =useData()
    const [loading,setLoading]=useState(false)
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
       <Myteam></Myteam>
       
        </div>
    );
};

export default Home;