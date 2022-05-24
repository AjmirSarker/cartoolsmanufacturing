import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './HomeReview.css'
import useReviews from "../Hooks/useReviews";
import HomeReviewCard from "./HomeReviewCard";

const HomeReview = () => {
    const[reviews]=useReviews([]) 
    
    return (
        <div>
            <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
       {
           reviews.map(review=> <HomeReviewCard review={review}></HomeReviewCard>)
       }

        

        
      </Carousel>
            
        </div>
    );
};

export default HomeReview;