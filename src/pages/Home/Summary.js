import React from 'react';
//style={{width:'64px',height:'64px'}}
import './Summary.css'

const Summary = () => {
    return (
        <div className='d-flex align-items-center justify-content-center summary flex-wrap'>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
</svg>
                <h1 className='summary-h1'>89</h1>
                <h3 className='summary-h3'>COUNTRIES</h3>
            </div>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>
               
               <h1 className='summary-h1'>1577+</h1>
               <h3 className='summary-h3'>Likes</h3>
           </div>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
</svg>
                <h1 className='summary-h1'>1986+</h1>
                <h3 className='summary-h3'>Deliveries</h3>
            </div>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}}  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
</svg>
               
                <h1 className='summary-h1'>876+</h1>
                <h3 className='summary-h3'>feedbacks</h3>
            </div>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}}   xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
</svg>
                <h1 className='summary-h1'>2230+</h1>
                <h3 className='summary-h3'>orders</h3>
            </div>
            <div className='p-5 m-2 summary2'>
            <svg style={{width:'64px',height:'64px'}}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>
               
                <h1 className='summary-h1'>567+</h1>
                <h3 className='summary-h3'>happy clients</h3>
            </div>
            
            
        </div>
    );
};

export default Summary;