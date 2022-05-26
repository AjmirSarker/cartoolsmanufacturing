import React from 'react';
//style={{width:'64px',height:'64px'}}
import './Summary.css'

const Summary = () => {
    return (
        <div className='d-flex align-items-center justify-content-center summary flex-wrap'>
            <div className='p-5 m-2 summary2'>
                
                <h1 className='summary-h1'>77</h1>
                <h3 className='summary-h3'>COUNTRIES</h3>
            </div>
            <div className='p-5 m-2 summary2'>
              
                <h1 className='summary-h1'>55+</h1>
                <h3 className='summary-h3'>Products</h3>
            </div>
            <div className='p-5 m-2 summary2'>
      
                <h1 className='summary-h1'>999+</h1>
                <h3 className='summary-h3'>orders</h3>
            </div>
            <div className='p-5 m-2 summary2'>
               
                <h1 className='summary-h1'>207+</h1>
                <h3 className='summary-h3'>happy clients</h3>
            </div>
            <div className='p-5 m-2 summary2'>
               
                <h1 className='summary-h1'>444+</h1>
                <h3 className='summary-h3'>feedbacks</h3>
            </div>
            <div className='p-5 m-2 summary2'>
               
               <h1 className='summary-h1'>444+</h1>
               <h3 className='summary-h3'>feedbacks</h3>
           </div>
        </div>
    );
};

export default Summary;