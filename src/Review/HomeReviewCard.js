import React from 'react';

const HomeReviewCard = ({review}) => {
    const checking = parseInt(review.ratings)
    const Ratings = Math.round(checking)
    return (
        <div className='my-4'>
            <img  src={review.image || 'https://i.ibb.co/D8cXxB7/one.webp'}alt='' />
            <div className="myCarousel my-3">
            <h4>Reviewer</h4>
              <h3>{review.username}</h3>
              {Ratings===1?'⭐':Ratings===2?'⭐⭐':Ratings===3?'⭐⭐⭐':Ratings===4?'⭐⭐⭐⭐':Ratings===5?'⭐⭐⭐⭐⭐':''}
              <p>
                {review.description}
              </p>
              
                  
                  
            </div>
          </div>
    );
};

export default HomeReviewCard;