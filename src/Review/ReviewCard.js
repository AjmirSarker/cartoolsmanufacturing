import React from 'react';
import useReviews from '../Hooks/useReviews';

const ReviewCard = ({review}) => {
    const checking = parseInt(review.ratings)
    const Ratings = Math.round(checking)
  
    

   
    return (
        <div class="col">
        <div class="card mb-3 border border-warning" >
        <div style={{maxWidth: '540px',height:'334px'}} class="row align-items-center ps-2 g-0 shadow">
          <div class="col-md-4">
          <h5 class="card-title fw-bold">User name ⬇ </h5>
              <h5 class="card-title">{review?.username}</h5>
            <img src={review?.image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body align-items-center">
            
              <p class="card-text">{review?.description}</p>
              <p>Rating :
                  {Ratings===1?'⭐':Ratings===2?'⭐⭐':Ratings===3?'⭐⭐⭐':Ratings===4?'⭐⭐⭐⭐':Ratings===5?'⭐⭐⭐⭐⭐':''}
                  </p>
             
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ReviewCard;