// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Loading from '../Shared/Loading';

// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');

// const Payment = () => {
//     const { id } = useParams();
//     const url = `https://secret-dusk-46242.herokuapp.com/booking/${id}`;

//     const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
//         method: 'GET',
//         headers: {
//             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => res.json()));

//     if (isLoading) {
//         return <Loading></Loading>
//     }

//     return (
//         <div>
//             <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
//                 <div class="card-body">
//                     <p className="text-success font-bold">Hello, {appointment.patientName}</p>
//                     <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
//                     <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
//                     <p>Please pay: ${appointment.price}</p>
//                 </div>
//             </div>
//             <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
//                 <div class="card-body">
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm appointment={appointment} />
//                     </Elements>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'

const Payment = () => {
    const{id}=useParams()
   const url =`http://localhost:5000/orders/${id}`
   const {data:pay,isLoading}=useQuery(['orders',id],()=>fetch(url,{
     method:'GET'
   }).then(res=>res.json()))
   if(isLoading){
     return <Loading></Loading>
   }
   
    return (
        <div className='container'>
          <div class="card shadow-lg my-5 border border-success w-75">
  <div class="card-body">
    <h5 class="card-title">Pay For : {pay?.product}</h5>
    
    <p class="card-text">{pay?.name}</p>
    <p class="card-text">Total Price : ${pay?.totalPrice}</p>
    <a href="#f" class="btn btn-success ">Button</a>
  </div>
</div>
        </div>
    );
};

export default Payment;