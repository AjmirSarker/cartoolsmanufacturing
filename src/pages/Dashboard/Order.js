import React from 'react';
import useOrders from '../../Hooks/useOrders'

const Order = ({ index,order }) => {
  const [orders, setOrders] = useOrders()
//   const sendMyItemDelete = (id) => {
//     const procceed = window.confirm('Are you sure to delete this item???');
//     if (procceed) {
//       const url = `http://localhost:5000/orders/${id}`;
//       fetch(url, {
//         method: 'DELETE'
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.deletedCount > 0) {
//             console.log('deleted');
//             const remaining = orders.filter((item) => item._id !== id);
//             setOrders(remaining);
//           }
//         });
//     } else {
//       console.log('ok');
//     }
//   };

  return (
    <tr>
        <td>{`${index +1}`}</td>
      <td>{order?.product}</td>
      <td>{order?.quantity}</td>
      <td>${`${order?.price * order?.quantity}`}</td>
      
      <td>
        <button
        //   onClick={() => sendMyItemDelete(order._id)}
          type="button"
          class="btn btn-sm btn-success"
        >
         Pay
        </button>
      </td>
      <td>
        <button
        //   onClick={() => sendMyItemDelete(order._id)}
          type="button"
          class="btn btn-sm btn-danger"
        >
         X
        </button>
      </td>
    </tr>
  );
};

export default Order;
// ৳