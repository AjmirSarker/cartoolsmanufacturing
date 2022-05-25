import React, {useEffect,useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useOrders from '../../Hooks/useOrders'

const Order = ({ index,order }) => {
  const [show, setShow] = useState(false);
  const [Order, setOrder] = useState([]);
  useEffect(() => {
    
      fetch(`http://localhost:5000/products?name=${order?.product}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    
  }, [order]);
  const [Delete, setDelete] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orders, setOrders] = useOrders();
  const sendMyItemDelete = (id) => {
    setDelete(true);
    if (Delete) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = orders.filter((item) => item._id !== id);
            setOrders(remaining);
            setShow(false)
          }
        });
    } else {
    }
  };

  return (
    <tr>
        <td>{`${index +1}`}</td>
      <td>{order?.product}</td>
      <td>{order?.quantity}</td>
      <td>${`${order?.price * order?.quantity}`}</td>
      <td>
        <button type="button" class="btn btn-sm btn-success">
          Pay
        </button>
      </td>
      
     
      
      <td>
        <button
          onClick={handleShow}
          type="button"
          class="btn btn-sm btn-danger"
        >
          X
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>DO DOUBLE YES CLICK TO DELETE THE ORDER!!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={() => sendMyItemDelete(order._id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default Order;
// ৳