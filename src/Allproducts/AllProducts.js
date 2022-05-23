
import React from 'react';
import useData from '../Hooks/useData';
import Loading from '../pages/Shared/Loading';

import Product from './Product'


const AllProducts = () => {
    const [products] =useData()
    if(products.length<=0){
        return <Loading></Loading>
    }
    return (
        <div className='container  mb-5 mt-3'>
           
          
        <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                products.map(product=><Product more={2} product={product}></Product>)
            }
       
       </div>
      </div>
    );
};

export default AllProducts;