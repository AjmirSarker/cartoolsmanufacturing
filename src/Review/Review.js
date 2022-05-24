import React, { useState,useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import useReviews from '../Hooks/useReviews';
import ReviewCard from './ReviewCard';
import { useForm } from 'react-hook-form';


const Review = () => {
    const [user] = useAuthState(auth);
 
 


    const[reviews]=useReviews([]) 
    const reverseReview = reviews.reverse()
   
   
    return (
     <>
      <div className='container  mb-5 mt-3'>
           
          
           <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
               {
                    reverseReview.map(review=><ReviewCard review={review}></ReviewCard>)
               }
               </div>
               </div>
               
     </>
    );
};

export default Review;