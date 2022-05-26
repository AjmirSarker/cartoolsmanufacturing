import React from 'react';


const MyPortfolio = () => {
    return (
        <div className='container my-5 border shadow-lg rounded-3 border-warning'>
        <div className='mt-5 mb-5'>
            <h2 className='portfolio-title-text'>Md. Arafat Al Ajmir Sarker</h2>
          
           <h5>arafatsarker066@gmail.com</h5>
           
        </div>
        <div className=' flex-wrap'>
           
            <div className='text-start '>
                <h3 className='fw-bolder'>Skills</h3>
                <hr className='text-success fw-bolder'></hr>
                <h4 className='fw-bolder'>Web Design:</h4> 
                <div className='fw-bold'> 
                <p > React,React Bootstrap,Tailwind,JavaScript,
                    Node JS, Express JS, MongoDB.</p>
                
                <p><span className=''>Tools and Software:</span> GitHub Desktop, VS
                    Code, Heroku, Netlify, Firebase</p>
                    </div>
            </div>
            <div className='text-end fw-bolder'>
                <h3 className=''>Education</h3>
                <hr className='text-info fw-bolder'></hr>
                <p>B.Sc. in CSE</p>
                <p>Daffodil International University</p>
                <p>December 2019 - Current</p>
            </div>
        </div>
        <div className='mb-3 bg-info'>
            <h3 className='text-dark fw-bolder'>Projects live site links</h3>
         
            <a className='text-success fw-bolder'  href="https://my-warehouse-967d6.web.app/">Sarker's Warehouse</a>
            <br />
            <a  className='text-success fw-bolder'  href="https://car-manufacturing.web.app/">Car Manufacturing</a>
            <br />
            <a className='text-success fw-bolder' href="https://wedding-photographer-5985a.web.app/">Wedding Clicker</a>
        </div>
        
    </div>
    );
};

export default MyPortfolio;