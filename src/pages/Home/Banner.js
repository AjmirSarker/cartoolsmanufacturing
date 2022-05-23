import React from 'react';
import './Banner.css'


const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active slide1">
            
          <div className="d-flex justify-content-center align-items-center w-100 h-100 container">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <span className="banner-title-1 d-block text-center text-md-start">
                SPECIAL OFFER
              </span>
              <h1 className="banner-title-2 text-center text-md-start">
                HIGH PERFORMANCE <br />
                INDUSTRIAL TOOLS
              </h1>
              <p className="banner-title-3 text-center text-md-start">
                SAVE UP TO $500
              </p>
              <p></p>
             
            </div>
          </div>
        </div>
        <div className="carousel-item slide2">
          <div className="d-flex align-items-center justify-content-start w-100 h-100 container">
            <div>
              <span className="banner-title-1 text-center  text-md-start d-block">
                SPECIAL OFFER
              </span>
              <h1 className="banner-title-2  text-center ">
                HIGH PERFORMANCE <br />
                INDUSTRIAL TOOLS
              </h1>
              <p className="banner-title-3 text-center text-md-start ">
                SAVE UP TO $500
              </p>
              <p></p>
              
            </div>
          </div>
        </div>
        <div className="carousel-item slide3">
          <div className="d-flex justify-content-end align-items-center w-100 h-100 container">
            <div>
              <span className="banner-title-1 d-block text-center text-md-start">
                SPECIAL OFFER
              </span>
              <h1 className="banner-title-2 text-center text-md-start">
                HIGH PERFORMANCE <br />
                INDUSTRIAL TOOLS
              </h1>
              <p className="banner-title-3 text-center text-md-start">
                SAVE UP TO $500
              </p>
              <p></p>
             
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
